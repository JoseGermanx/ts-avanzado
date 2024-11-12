"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
/** Calculadora con funciones básicas */
class Calculator {
    constructor() {
        console.log('Calculator created');
    }
    /** Suma cualquier cantidad de números */
    sum(...values) {
        return values.reduce((previous, current) => previous + current);
    }
    /** Resta cualquier cantidad de números */
    subtract(...values) {
        return values.reduce((previous, current) => previous - current);
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calc.js.map