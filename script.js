
class Celula {
    constructor(estado,x,y,limites,cantv){
        this.estado=estado;
        this.x=x;
        this.y=y;
        this.limites= limites;
        this.cantv = cantv;

    }

    get_estado(){
        return this.estado
    }
    set_estado(nuevo_estado){
        this.estado = nuevo_estado;
    }    
    get_position(){
        console.log("["+this.x+" , "+this.y+"]");
    }
    
}
class Table {
    constructor (filas, columnas)
    {
        this.filas = filas ;
        this.columnas = columnas;
    }
    

}
class Juego{

    constructor(Table)
}