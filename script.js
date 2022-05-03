
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
    
    escuchar_estado(cantVecinos){
        if (cantVecinos < 2 && this.estado == 1){
            this.estado = 0;
        } else if (cantVecinos > 3 && this.estado == 1){
            this.estado = 0;
        } else if ((cantVecinos === 3 || cantVecinos === 2) && this.estado == 1){
            this.estado = 1;
        } else if (cantVecinos == 3 && this.estado == 0){
            this.estado = 1;
        }

    }
    
}
class Table {
    constructor (filas, columnas)
    {
        this.filas = filas ;
        this.columnas = columnas;
        this.tabla = new Array(filas)
                    .fill(new Array(columnas).fill(new Celula()));
    }
    generar_tabla(){
        let numRandom= Math.round(Math.random)
    }

    

}
class Juego{

    constructor(Table){

    }
}

const tabla = new Table(4,3);
console.log(tabla.tabla);