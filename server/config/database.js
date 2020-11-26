
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://AlineKmiecik:Hadouken81810190@ciclodepagamentos.sihcn.gcp.mongodb.net/CicloDePagamentos?retryWrites=true&w=majority", {
    UseNewUrlParser: true,
    UseUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Conexão estabelecida com o DB");
});

mongoose.connection.on("disconnected", () => {
    console.log("desconectado com o DB");
});

mongoose.connection.on("error", (error) => {
    console.log(`Algum erro aconteceu com o banco \n ${error}`);
});

module.exports = db;