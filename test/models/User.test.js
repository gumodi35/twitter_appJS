// escribimos una prueba TDD
const User = require('./../../app/models/user')

describe("Unit Test for User class", () => {

    test('Create an User object', () => {
        // Aqui invocamos el codigo que va ejecutar el app
        const user = new User(1, "Gualberto", "Gual", "Bio")

        // Aqui validas los resultados de ese codigo
        // Esta es una comparacion que va igualar el valor de izquierda con el 
        // valor de la derecha (valore esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("Gualberto")
        expect(user.name).toBe("Gual")
        expect(user.bio).toBe("Bio")
        /*
        expect(user.dateCreated).not.toBeUndefined() //verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
        */
    })

    //Agregamos una segunda prueba
    test('Add getters', () => {
        const user = new User(1, "Gualberto", "Gual", "Bio")
        expect(user.getUsername).toBe("Gualberto")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).toBe(this.dateCreated)
        expect(user.getLastUpdated).toBe(this.lastUpdate)
    })

    // Agregamos la prueba de los setters
    test('Add setters', () => {
        const user = new User(1, "Gualberto", "Gual", "Bio")
        user.setUsername = "Gual"
        expect(user.username).toBe("Gual")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})

