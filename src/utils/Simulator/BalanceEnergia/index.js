class BalanceEnergia{
    constructor(
        AguaEvaporada,
        CantidadInicial,
        TemInicial,
        TemFinal,
        LambDa,
        CalorEspMa,
        CalorEspAg
    )
    {
        this.AguaEvaporada = AguaEvaporada
        this.CantidadInicial = CantidadInicial
        this.TemInicial = TemInicial
        this.TemFinal = TemFinal
        this.LambDa = LambDa
        this.CalorEspMa = CalorEspMa
        this.CalorEspAg = CalorEspAg
    }
    get QLatenteAg(){
        return this.AguaEvaporada * this.LambDa;
    }

    get QSensibleMat(){
        return this.CantidadInicial * this.CalorEspMa * (this.TemFinal - this.TemInicial);
    }

    get QTotal(){
        return this.QLatenteAg + this.QSensibleMat;
    }
}
module.exports = BalanceEnergia