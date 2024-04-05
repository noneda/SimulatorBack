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
        return (((InitialWeight - FinalWeight) / InitialWeight) * 100);
    }

    IdealEnergy(){
        return (massAEvaporate * heatIdealVaporization)
    }
    
    EquationExcessEnergy(){
        return (heatUsed - IdealEnergy())
    }
    
    EquationDeficitEnergy(){
        return (IdealEnergy() - heatUsed)
    }
    timeToEvaporateEverything(){
/*
    Esta funcion retornara el tiempo necesario para evaporar una cantidad de
    de agua especifica usando la energia total para evaporar todo y dividirlo
    por la cantidad de calor que se suministra cada segundo Vatios W o Joules por segundo
*/
    return (heatIdealVaporization / supplyEnergy)
    }
}


export default EcuaEvaporate;