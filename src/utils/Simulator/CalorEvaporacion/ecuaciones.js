function EcuacionEnergia(calorUsado, masaAEvaporar, calorIdealVaporizacion){
    
    this.calorUsado = calorUsado
    this.masaAEvaporar = masaAEvaporar
    this.calorIdealVaporizacion = calorIdealVaporizacion

}

function EnergiaIdeal(){

    return (masaAEvaporar * calorIdealVaporizacion)

}

function EcuacionExcesoEnergia(){

    return (calorUsado - EnergiaIdeal())

}

function EcuacionDeficitEnergia(){

    return (EnergiaIdeal() - calorUsado)

}
