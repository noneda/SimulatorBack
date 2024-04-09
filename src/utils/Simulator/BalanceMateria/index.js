class BalanceMateria{
    constructor(
        Temperatura_Incial,
        Temperatura_Final,
        Latente_Vaporizacion,
        Calor_Especifio,
        Calor_Especifio_Agua,
        Masa_Agua_Evapora,
        Masa_Total
    )
    {
        this.Temperatura_Final = Temperatura_Final;
        this.Temperatura_Incial = Temperatura_Incial;
        this.Latente_Vaporizacion = Latente_Vaporizacion;
        this.Calor_Especifio = Calor_Especifio;
        this.Calor_Especifio_Agua = Calor_Especifio_Agua;
        this.Masa_Agua_Evapora = Masa_Agua_Evapora;
        this.Masa_Total = Masa_Total
    }
    get QLatente_Agua(){
        return this.Masa_Agua_Evapora * this.Latente_Vaporizacion
    }
    get IdontKnow(){
        return this.Masa_Total * this.Calor_Especifio * (this.Temperatura_Final - this.Temperatura_Incial )
    }
    get QTotal(){
        return this.QLatente_Agua + this.IdontKnow
    }

}
module.exports = BalanceMateria