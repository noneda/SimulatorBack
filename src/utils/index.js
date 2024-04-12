const NewFormulas = require("./Simulator")


const Data =  new NewFormulas(
    1, 500, 15, 7, 0.012, 281.15, 343.15, 2230, 1.710, 4.100
)

const send = {
    Solidos : Data.Solidos,
    gHumedadInicial : Data.gHumedadInicial,
    gHumedadFinal : Data.gHumedadFinal,
    AguaEvaporada : Data.AguaEvaporada,
    FlujoAireSeco : Data.FlujoAireSeco,
    QLatenteAg : Data.QLatenteAg,
    QSencibleMat : Data.QSencibleMat, 
    QTotal : Data.QTotal,
}


console.log(send)

console.log(Data.RetornAll)