class NewFormulas {
    constructor(
        user_id,
        CantidadInicial,
        HumedadInicial,
        HumedadFinal,
        FluidoServicio,
        TempInicial,
        TempFinal,
        LambDa,
        CalorEspMa,
        CalorEspAg
    ){
        this.user_id = user_id;
        this.CantidadInicial = CantidadInicial;
        this.HumedadInicial = HumedadInicial;
        this.HumedadFinal = HumedadFinal;
        this.FluidoServicio = FluidoServicio;
        this.TempInicial = TempInicial;
        this.TempFinal = TempFinal;
        this.LambDa = LambDa;
        this.CalorEspMa = CalorEspMa;
        this.CalorEspAg = CalorEspAg;
    }

    calcPorcentaje(PORCENTAJE, TYPE) {
        if (TYPE) {
            return PORCENTAJE / 100;
        } else {
            return (100 - PORCENTAJE) / 100;
        }
    }
    
    get Solidos(){
        return this.CantidadInicial * this.calcPorcentaje(this.HumedadInicial, false);
    }

    get gHumedadInicial(){
        return this.CantidadInicial - this.Solidos;
    }

    get gHumedadFinal(){
        return(
            this.Solidos * this.calcPorcentaje(this.HumedadFinal, true)
            / this.calcPorcentaje(this.HumedadFinal, false)
        );
    }

    get AguaEvaporada(){
        return this.gHumedadInicial - this.gHumedadFinal;
    }

    get FlujoAireSeco(){
        return(
            (1 / this.FluidoServicio) * this.AguaEvaporada
        );
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

    get RetornAll(){
        return {
            user_id : this.user_id,
            CantidadInicial: this.CantidadInicial,
            MagCantidadInicial: "kg/s",
            HumedadInicial: this.HumedadInicial,
            MagHumedadInicial: "%",
            HumedadFinal: this.HumedadFinal,
            MagHumedadFinal: "%",
            FluidoServicio: this.FluidoServicio,
            MagFluidoServicio: "Agua/kg",
            TempInicial: this.TempInicial,
            LambDa: this.LambDa,
            MagTempInicial: "K",
            TempFinal: this.TempFinal,
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
            QSensibleMat: this.QSensibleMat,
            MagQSensibleMat: "kJ/s",
            QTotal: this.QTotal,
            MagQTotal: "kJ/s"
        };
    }
}

const Data =  new NewFormulas(
    1, 500, 15, 7, 0.012, 281.15, 343.15, 2230, 1.710, 4.100, 
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