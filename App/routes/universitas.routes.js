module.exports = function (app) {
    const universitas = require("../controllers/universitas.controller");
    const r = require("express").Router();
  
    r.get("/", universitas.findAll);
    r.get("/:id", universitas.show);
    r.post("/", universitas.create);
    r.put("/:id", universitas.update);
    r.delete("/:id", universitas.delete);
  
    app.use("/universitas", r);
  };