class NewFormulas {
    constructor(
        user_id,
        CantidadInical,
        HumedadInical,
        HumedadFinal,
        FluidoServicio,
        TemInical,
        TemFinal,
        LambDa,
        CalorEspMa,
        CalorEspAg,
    ){
        this.user_id        = user_id
        this.CantidadInical = CantidadInical
        this.HumedadInical  = HumedadInical
        this.HumedadFinal   = HumedadFinal
        this.FluidoServicio = FluidoServicio
        this.TemInical      = TemInical
        this.TemFinal       = TemFinal
        this.LambDa         = LambDa
        this.CalorEspMa     = CalorEspMa
        this.CalorEspAg     = CalorEspAg
    }

    calcPorcentaje(PORCETEAJE, TYPE) {
        if (TYPE) {
            return PORCETEAJE / 100;
        } else {
            return (100 - PORCETEAJE) / 100;
        }
    }
    get Solidos(){
        return this.CantidadInical * this.calcPorcentaje(this.HumedadInical, false)
    }
    get gHumedadInicial(){
        return this.CantidadInical - this.Solidos
    }
    get gHumedadFinal(){
        return(
            this.Solidos * this.calcPorcentaje(this.HumedadFinal, true)
            / this.calcPorcentaje(this.HumedadFinal, false)
        )
    }
    get AguaEvaporada(){
        return this.gHumedadInicial - this.gHumedadFinal
    }
    get FlujoAireSeco(){
        return(
            (1 / this.FluidoServicio) * this.AguaEvaporada
        )
    }
    get QLatenteAg(){
        return this.AguaEvaporada * this.LambDa
    }
    get QSencibleMat(){
        return this.CantidadInical * this.CalorEspMa
    }
    get QTotal(){
        return this.QLatenteAg + this.QSencibleMat
    }

    get RetornAll(){
        return {
            user_id : this.user_id,
            CantidadInicial: this.CantidadInical,
            MagCantidadInicial: "kg/s",
            HumedadInicial: this.HumedadInical,
            MagHumedadInicial: "%",
            HumedadFinal: this.HumedadFinal,
            MagHumedadFinal: "%",
            FluidoServicio: this.FluidoServicio,
            MagFluidoServicio: "Agua/kg",
            TempInicial: this.TemInical,
            LambDa: this.LambDa,
            MagTempInicial: "K",
            TempFinal: this.TemFinal,
            MagTempFinal: "K",
            CalorEspMa: this.CalorEspMa,
            MagCalorEspMa: "kJ/kgK",
            CalorEspAg: this.CalorEspAg,
            MagCalorEspAg: "kJ/kgK",
            Solidos: this.Solidos,
            MagSolidos: "kg/s",
            gHumedadInicial: this.gHumedadInicial,
            MaggHumedadInicial: "kg/s",
            gHumedadFinal: this.gHumedadFinal,
            MaggHumedadFinal: "kg/s",
            AguaEvaporada: this.AguaEvaporada,
            MagAguaEvaporada: "kg/s",
            FlujoAireSeco: this.FlujoAireSeco,
            MagFlujoAireSeco: "kg/s",
            QLatenteAg: this.QLatenteAg,
            MagQLatenteAg: "kJ/s",
            QSensibleMat: this.QSencibleMat,
            MagQSensibleMat: "kJ/s",
            QTotal: this.QTotal,
            MagQTotal: "kJ/s"
        }
    }
    
}
module.exports = NewFormulas