const mongoose  = require("mongoose");

const Medico = new mongoose.Schema({
    Nome: {
        type: String,
        require: [true, "O campo Nome é obrigatório"],

    },

    Crm: {
        type: String,
        require: [true, "O campo Crm é obrigatório"],
    },

    Especialidade: {
        type: String,
        require: [true, "O campo Especialidade é obrigatório"],
    },

    createdAt: {type: Date, default:Date.now},
});

module.exports = mongoose.model("Medico", Medico);