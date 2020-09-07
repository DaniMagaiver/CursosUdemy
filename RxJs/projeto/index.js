const {
  lerPasta,
  fileFilter,
  legendReader,
  ConvertAndBreakLines,
  Concat,
  Edit,
  BreakWords,
  Count,
  order,
  filter,
  removeTimes,
  WriteInJson,
  composicao
} = require("./functions");

composicao(
  lerPasta,
  fileFilter,
  legendReader,
  ConvertAndBreakLines,
  Concat,
  removeTimes,
  filter(/[1-9]/),
  filter(/[\\\r]/),
  filter(/<i>/),
  filter(/<i>/),
  filter(/- /),
  filter(/"/),
  filter(/<\/i>/),
  filter(/\./),
  filter(/\,/),
  filter(/!/),
  filter(/\?/),
  BreakWords,
  Concat,
  Count,
  order,
  WriteInJson
);

// lerPasta
//   .then(fileFilter)
//   .then(legendReader)
//   .then(ConvertAndBreakLines)
//   .then(Concat)
//   .then(removeTimes)
//   .then(filter(/[1-9]/))
//   .then(filter(/[\\\r]/))
//   .then(filter(/<i>/))
//   .then(filter(/<i>/))
//   .then(filter(/- /))
//   .then(filter(/"/))
//   .then(filter(/<\/i>/))
//   .then(filter(/\./))
//   .then(filter(/\,/))
//   .then(filter(/!/))
//   .then(filter(/\?/))
//   .then(BreakWords)
//   .then(Concat)
//   .then(Count)
//   .then(order)
//   .then(WriteInJson)
//   .catch((err) => console.log(err));
