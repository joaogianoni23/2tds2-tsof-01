import { somar, subtrair, dividir, multiplicar } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 2;
        const b = 3;

        // Act (Executar)
        const resultado = somar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    });

     test("Deve subtrair dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 12;
        const b = 2;

        // Act (Executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(10);
    });

     test("Deve dividir dois números corretamente", () => {
        // AAA
        // Arrange (Preparar)
        const a = 4;
        const b = 2;

        // Act (Executar)
        const resultado = dividir(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(2);
    });

     test("Deve multiplicar dois números corretamente", () => {
        expect(() => {
            dividir (10, 0);
            }).toThrowError("Divisão por zero não é permitida");
        })
    });
