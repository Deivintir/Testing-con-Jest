const { user } = require('../main');

describe('Lista de usuarios indexada por el DNI', () => {
    test('Comprueba que el usuario está registrado', () => {
        expect(user(75145611)).toEqual({name:'Ana', surname:'Rodríguez Benjumea', dni: 75145611});
    })
    test('Devuelve "No se encontraron coincidencias." si el DNI no es válido', () => {
        expect(user(75555555)).toEqual("No se encontraron coincidencias.");
    })
});
