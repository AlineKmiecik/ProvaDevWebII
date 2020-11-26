const express = require('express');
const router = express.Router(); 
const MedicoController = require('../controllers/MedicoController.js');
   
const Pessoa = require("../controllers/MedicoController.js");

//http://localhost:1234/medico/cadastrar 
router.post("/medico/cadastrar",MedicoController.store);

//http://localhost:1234/medico/buscar/crm
router.get("/Medico/buscar/:CRM", MedicoController.getByCrm);

//http://localhost:1234/medico/listar 
router.get("/medico/listar", MedicoController.get);


//Alterar – http://localhost:1234/medico/alterar 
router.put("/medico/alterar", MedicoController.Alter);


//deletar
//http://localhost:1234/medico/remover/crm
router.delete("/medico/remover/:CRM", MedicoController.delete);


module.exports = router ;