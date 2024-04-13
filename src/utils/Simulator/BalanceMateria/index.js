class BalanceMateria{
    constructor 
    (
        CantidadInicial, 
        HumedadInicial,
        HumedadFinal,
        FluidoServicio 
    )
    {
        this.CantidadInicial = CantidadInicial;
        this.HumedadInicial = HumedadInicial;
        this.HumedadFinal = HumedadFinal;
        this.FluidoServicio = FluidoServicio;
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
}



module.exports = BalanceMateria

