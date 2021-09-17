class Productos {
    constructor(nombre, precio){
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
}
const palito = new Productos (palito, 1500);
const helado = new Productos (helado, 1500);
const bombito = new Productos (bombito, 1600);
const caramelito = new Productos (caramelito, 1000);
const mentita = new Productos (mentita, 2000);
const cubik = new Productos (cubik, 1600);
const bombe = new Productos (bombe, 1500);
const dados = new Productos (dados, 1000);
palito.sumaIva();
helado.sumaIva();
bombito.sumaIva();
caramelito.sumaIva();
mentita.sumaIva();
cubik.sumaIva();
bombe.sumaIva();
dados.sumaIva();