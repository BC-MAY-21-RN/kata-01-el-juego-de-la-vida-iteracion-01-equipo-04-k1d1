
class Celula {
    constructor(estado,x,y,limites,cantv){
        this.estado=estado;
        this.x=x;
        this.y=y;
        this.limites= limites;
        this.cantv = cantv;

    }
    
    get_estado(){

        return this.estado; //Devueleve el estado: 1- Si esta vivo 0-Si esta muerto
    }
    set_estado(nuevo_estado){
        this.estado = nuevo_estado;
    }    
    get_position(){
        console.log("["+this.x+" , "+this.y+"]");
    }
    get_limites(){
        return this.limites;
    }
    
    escuchar_estado(estadoCelula ,cantVecinos){

        if (cantVecinos < 2){
            this.estadoCelula = 0;
        }

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

    constructor(Table){

    }
}