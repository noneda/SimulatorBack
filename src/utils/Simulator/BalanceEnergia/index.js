class BalanceEnergia {
    constructor(
        Masa_Total,
        Humedad_Porcentaje,
        Humedad_AireCaliente_Inicial,
        Calor_Especifico,
        Cambio_Temperatura,
        Calor_latente_Evaporacion_Agua,
    )
    {
        this.Masa_Total = Masa_Total
        this.Humedad_Porcentaje = Humedad_Porcentaje
        this.Humedad_AireCaliente = Humedad_AireCaliente_Inicial
        this.Calor_Especifico = Calor_Especifico
        this.Cambio_Temperatura = Cambio_Temperatura
        this.Calor_latente_Evaporacion_Agua = Calor_latente_Evaporacion_Agua
    }
    get Solidos_Iniciales(){
        return this.Masa_Total * (this.Humedad_Porcentaje / 100)
    }
    get Humedad_Incial(){
        return this.Masa_Total * ((100- this.Humedad_Porcentaje ) / 100)
    }
    get Agua_Salida(){
        return this.Humedad_Incial - this.Solidos_Iniciales
    }
    get Agua_Evaporada(){
        return this.Humedad_Incial - this.Agua_Salida
    }
    get Calor_Sencible(){
        return this.Masa_Total * this.Calor_Especifico * this.Cambio_Temperatura
    }
    get Masa_Agua_Evaporada(){
        return this.Agua_Evaporada
    }
    get Calor_latente(){
        return this.Masa_Agua_Evaporada * this.Calor_latente_Evaporacion_Agua
    }
    get Calor_Total(){
        return  this.Calor_Sencible + this.Calor_latente
    }
}

module.exports = BalanceEnergia