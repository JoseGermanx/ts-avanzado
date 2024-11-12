
/** Calculadora con funciones básicas */
export class Calculator {
    constructor() {
        console.log('Calculator created');
    }

/** Suma cualquier cantidad de números */
    sum(...values: number[]): number {
        return values.reduce((previous, current) => previous + current);
    }


/** Resta cualquier cantidad de números */
    subtract(...values: number[]): number {
        return values.reduce((previous, current) => previous - current);
    }
}

