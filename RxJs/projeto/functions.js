const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "legendas");

const lerPasta = new Promise((resolve, reject) => {
  try {
    fs.readdir(directoryPath, { encoding: "utf-8" }, (err, files) => {
      if (err) throw `Read directory error: ${err.message}`;
      resolve(files);
    });
  } catch (e) {
    reject(e);
  }
});

const fileFilter = function (files) {
  return files.filter((file) => file.includes("srt"));
};

const legendReader = function (legendList) {
  const legendPromises = legendList.map((legend) => {
    const filePath = path.join(directoryPath, legend);
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(filePath, (err, data) => {
          if (err) throw `Read file error ${err.message}`;
          resolve(data);
        });
      } catch (e) {
        reject(e);
      }
    });
  });
  return Promise.all(legendPromises);
};

const Concat = function (BufferLists) {
  return BufferLists.reduce((BufferList, BufferItem) =>
    BufferList.concat(BufferItem)
  );
};

const ConvertAndBreakLines = function (BufferList) {
  return BufferList.map((buffer) => buffer.toString().split(/\n/));
};

const removeTimes = function (legendLines) {
  return legendLines.filter((line) => !/[1-9]/.test(line));
};

const filter = function (regex) {
  return function(list){
    return list.map((item) => item.replace(regex, "")).filter((item) => !!item);
  }
};

const BreakWords = function (lines) {
  return lines.map((line) => line.toLowerCase().split(" "));
};

const Count = function (words) {
  const setWord = new Set(words);
  const wordList = [...setWord];

  let amount = wordList.map((wordItem) => {
    const number = words.filter((word) => wordItem === word).length;
    return { word: wordItem, number };
  });

  return amount.filter((wordItem) => !!wordItem.word);
};

const order = function (amountList) {
  return orderedList = amountList.sort((a, b) => {
    return a.number > b.number ? -1 : a.number < b.number ? 1 : 0;
  });
};

const WriteInJson = function (amountList) {
  const resultJson = JSON.stringify(amountList);
  fs.writeFile("result.json", resultJson, "utf8", () => {
    console.log("Rankeamento completo!")
  });
  return resultJson
};

module.exports = {
  lerPasta,
  fileFilter,
  legendReader,
  ConvertAndBreakLines,
  Concat,
  BreakWords,
  Count,
  order,
  filter,
  removeTimes,
  WriteInJson,
};
