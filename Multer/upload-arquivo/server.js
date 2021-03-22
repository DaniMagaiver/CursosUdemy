const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const porta = 3000;

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`
    );
  },
});

// const upload = multer({ dest: "uploads/" });
const upload = multer({ storage });

app.use(express.static("public"));

app.listen(porta, () =>
  console.log(`\nServidor rodando na porta ${porta} (～￣▽￣)～ !\n`)
);

app.post("/file/upload", upload.single("file"), (req, res) => {
  res.send("<h2>Upload realizado com sucesso</h2>");
});
