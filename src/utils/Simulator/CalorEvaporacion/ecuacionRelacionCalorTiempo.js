function ecuacionTiempo(masaAEvaporar, calorIdealVaporizacion, suministroEnergia)
{

    this.masaAEvaporar = masaAEvaporar
    this.calorIdealVaporizacion = calorIdealVaporizacion
    this.suministroEnergia = suministroEnergia

}

function tiempoParaEvaporarTodo()
{
    //Esta funcion retornara el tiempo necesario para evaporar una cantidad de
    //de agua especifica usando la energia total para evaporar todo y dividirlo
    //por la cantidad de calor que se suministra cada segundo Vatios W o Joules por segundo
    return (calorIdealVaporizacion / suministroEnergia)

}