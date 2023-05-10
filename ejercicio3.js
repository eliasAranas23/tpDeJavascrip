var Carritos = /** @class */ (function () {
    function Carritos(paramMonto, paramProductos) {
        this.montoTotall = paramMonto;
        this.productoss = ["leche"];
    }
    Carritos.prototype.agregarProducto = function (nombre, precio, cantidad) {
        for (var i = 0; i < this.productoss.length; i++) {
            if ((this.productoss[i]) === (nombre)) {
                console.log(" ya existe " + " " + (nombre) + " " + "con " + " " + (cantidad) + " " + "unidades");
            }
            else {
                var precioTotal = precio * cantidad;
                this.montoTotall = this.montoTotall + precioTotal;
                this.productoss.push(nombre);
            }
        }
    };
    return Carritos;
}());
var carrito8 = new Carritos(10, "leche");
carrito8.agregarProducto("azucar", 2, 5);
console.log(carrito8);
