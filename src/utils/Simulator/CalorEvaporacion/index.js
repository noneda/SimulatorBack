/*
    ! -> FUCK!!!!!!!!!!!!!!!!!!!!! HOW DO YOU THINK THAT I UNDERSTAND IT?
*/
class EcuaEvaporate{
    constructor(InitialWeight, FinalWeight, heatUsed, massAEvaporate, heatIdealVaporization, supplyEnergy){
        this.InitialWeight = InitialWeight
        this.FinalWeight = FinalWeight
        this.heatUsed = heatUsed
        this.massAEvaporate = massAEvaporate
        this.heatIdealVaporization = heatIdealVaporization
        this.supplyEnergy = supplyEnergy
    }

    humidityPercentage() {
        return (((this.InitialWeight - this.FinalWeight) / this.InitialWeight) * 100);
    }

    IdealEnergy(){
        return (this.massAEvaporate * this.heatIdealVaporization)
    }
    
    EquationExcessEnergy(){
        return (this.heatUsed - this.IdealEnergy())
    }
    
    EquationDeficitEnergy(){
        return (this.IdealEnergy() - this.heatUsed)
    }
    timeToEvaporateEverything(){
/*
    Esta funcion retornara el tiempo necesario para evaporar una cantidad de
    de agua especifica usando la energia total para evaporar todo y dividirlo
    por la cantidad de calor que se suministra cada segundo Vatios W o Joules por segundo
*/
    return (this.heatIdealVaporization / this.supplyEnergy)
    }
}


module.exports = {EcuaEvaporate
}