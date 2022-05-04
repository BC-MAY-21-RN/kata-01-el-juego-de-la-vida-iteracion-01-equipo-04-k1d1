
class Celula {
    constructor(estado){
        this.estado = estado;
    }
    
    get_estado() {
        return this.estado; //Devueleve el estado: 1- Si esta vivo 0-Si esta muerto
    }

    set_vecinos(vecinos) {
        this.vecinos = vecinos;
    }
    
    verificar_estado() {
        const vecinos_vivos = this.vecinos.filter(celula => celula.get_estado() === 1).length;
        if (vecinos_vivos < 2 && this.estado === 1){
            this.estado = 0;
        } else if (vecinos_vivos > 3 && this.estado === 1){
            this.estado = 0;
        } else if ((vecinos_vivos === 3 || vecinos_vivos === 2) && this.estado === 1){
            this.estado = 1;
        } else if (vecinos_vivos === 3 && this.estado === 0){
            this.estado = 1;
        }
    }
    
}

class Table {
    constructor (filas, columnas) {
        this.filas = filas ;
        this.columnas = columnas;
        this.tabla = new Array(filas)
                    .fill(new Array(columnas).fill(0))
                    .map(fila => fila.map(_ => new Celula(this.generar_random())));
        this.tabla.forEach((fila, y) => {
            fila.forEach((celula, x) => {
                let vecinos;
                if (x === 0) {
                    if (y === 0) {
                        vecinos = [this.tabla[y][x+1], this.tabla[y+1][x+1], this.tabla[y+1][x]];
                    }
                    if (y === this.filas-1) {
                        vecinos = [this.tabla[y-1][x], this.tabla[y-1][x+1], this.tabla[y][x+1]];
                    }
                } else if (x !== this.columnas-1) {
                    if (y === 0) {
                        vecinos = [this.tabla[y][x-1], this.tabla[y][x+1], this.tabla[y+1][x-1], this.tabla[y+1][x], this.tabla[y+1][x+1]];
                    } else if (y === this.filas-1) {
                        vecinos = [this.tabla[y][x-1], this.tabla[y][x+1], this.tabla[y-1][x-1], this.tabla[y-1][x], this.tabla[y-1][x+1]];
                    } else {
                        vecinos = [this.tabla[y-1][x-1], this.tabla[y-1][x], this.tabla[y-1][x+1], this.tabla[y][x-1], this.tabla[y][x+1], this.tabla[y+1][x-1], this.tabla[y+1][x], this.tabla[y+1][x+1]];
                    }
                }

                if (y !== 0 && y !== this.filas-1) {
                    if (x === 0) {
                        vecinos = [this.tabla[y-1][x], this.tabla[y-1][x+1], this.tabla[y][x+1], this.tabla[y+1][x+1], this.tabla[y+1][x]];
                    } else if (x === this.columnas-1) {
                        vecinos = [this.tabla[y-1][x], this.tabla[y-1][x-1], this.tabla[y][x-1], this.tabla[y+1][x-1], this.tabla[y+1][x]];
                    } else {
                        vecinos = [this.tabla[y-1][x-1], this.tabla[y-1][x], this.tabla[y-1][x+1], this.tabla[y][x-1], this.tabla[y][x+1], this.tabla[y+1][x-1], this.tabla[y+1][x], this.tabla[y+1][x+1]];
                    }
                }

                if (x === this.columnas-1) {
                    if (y === 0) {
                        vecinos = [this.tabla[y][x-1], this.tabla[y+1][x-1], this.tabla[y+1][x]];
                    }
                    
                    if (y === this.filas-1) {
                        vecinos = [this.tabla[y][x-1], this.tabla[y-1][x-1], this.tabla[y-1][x]];
                    }
                }

                celula.set_vecinos(vecinos)
            });
        });
    }

    generar_random(){
        let numRandom = Math.round(Math.random())
        return numRandom;
    }

    mostrar_tabla () {
        console.log(this.tabla.map(fila => fila.map(columna => columna.get_estado() ? '*' : '.').join('').concat('\n')).join(''));
    }

    siguiente_generacion() {
        this.tabla.forEach(fila => fila.forEach(celula => celula.verificar_estado()));
    }

}


const tabla = new Table(6,10);
// tabla.mostrar_tabla();
setInterval(() => {
    console.clear();
    tabla.mostrar_tabla();
    tabla.siguiente_generacion();
}, 700);
