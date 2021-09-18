var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    Car.prototype.getActualMillage = function () {
        var realMillage = this._millage + 50000;
        return realMillage;
    };
    Car.prototype.getTotalPrice = function (tax) {
        var taxAmount = (this.price * tax) / 100;
        var total = this.price + taxAmount;
        return total;
    };
    return Car;
}());
var toyota = new Car("toyota", 100000);
var totalPrice = toyota.getTotalPrice(25);
