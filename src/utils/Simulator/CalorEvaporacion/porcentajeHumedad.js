function FormulaPorcetajeHumedad(PesoInicial, PesoFinal){

    this.PesoInicial = PesoInicial
    this.PesoFinal = PesoFinal

}

function porcetajeHumedad(){

    return ( ( (PesoInicial - PesoFinal) / PesoInicial) * 100)

}

//Esta Clase deberia depender de la clase ecuacionesEnegia 
//Ya que con esas ecuaciones se deberia hallar la cantidad de gramos
//de agua que pierde la materia con determindao calor.