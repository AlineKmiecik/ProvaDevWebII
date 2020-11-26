const Medico = require("../models/Medico.js");
const MedicoSchema = require("../models/Medico.js");

class MedicoController {
    async store(req, res) {
        try{
            var result = await Medico.create(req.body);
            console.log(req.body);
            res.status(201).json(result);
        }catch(error) {
            res.status(500).json(error)
        }
    }
    async get(req, res){
        var result = await Medico.find({});
        res.status(200).json(result);
    
    }
    async getByCrm(req, res){
        var result = await Medico.findOne({Crm : req.params.CRM}) ;
        res.status(200).json(result);
    }

    async Alter(req, res){
        var result = await Medico.updateOne(req.params.id, req.body);
        console.log(req.body);
        res.status(200).json(result);
    }

    async delete(req, res){   
        var result = await Medico.deleteOne({Crm: req.params.CRM});
        res.status(200).json(result);
    }   

    
}
module.exports = new MedicoController();