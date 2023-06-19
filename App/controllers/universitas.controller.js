const db = require("../models");
const universitas = db.universitas;

exports.create = (req, res) => {
  universitas.create(req.body)
    .then(() => res.send({ message: "Data berhasil disimpan" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.findAll = (req, res) => {
  universitas.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.show = (req, res) => {
  const id = req.params.id;

  universitas.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.update = (req, res) => {
  const id = req.params.id;

  universitas.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat mengupate data" });
      }
      res.send({ message: "data barhasil diupdate" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
exports.delete = (req, res) => {
  const id = req.params.id;

  universitas.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "tidak dapat menghapus data" });
      }
      res.send({ message: "data barhasil dihapus" });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};