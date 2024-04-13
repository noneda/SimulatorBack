class BalanceEnergia{
    constructor(
        AguaEvaporada,
        CantidadInicial,
        TempInicial,
        TempFinal,
        LambDa,
        CalorEspMa,
        CalorEspAg
    )
    {
        this.AguaEvaporada = AguaEvaporada
        this.CantidadInicial = CantidadInicial
        this.TempInicial =TempInicial
        this.TempFinal = TempFinal
        this.LambDa = LambDa
        this.CalorEspMa = CalorEspMa
        this.CalorEspAg = CalorEspAg
    }
    get QLatenteAg(){
        return this.AguaEvaporada * this.LambDa;
    }

    get QSensibleMat(){
        return this.CantidadInicial * this.CalorEspMa * (this.TempFinal - this.TempInicial);
    }

    get QTotal(){
        return this.QLatenteAg + this.QSensibleMat;
    }
}
module.exports = BalanceEnergia