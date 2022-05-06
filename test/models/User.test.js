// escribimos una prueba TDD
const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {

    test('Create an User object', () => {
        // Aqui invocamos el codigo que va ejecutar el app
        const user = new User(1, "Gualberto", "Gual", "Bio", "dateCreated", "lastUpdated")

        // Aqui validas los resultados de ese codigo
        // Esta es una comparacion que va igualar el valor de izquierda con el 
        // valor de la derecha (valore esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("Gualberto")
        expect(user.name).toBe("Gual")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdate).toBe("lastUpdated")
    })
})