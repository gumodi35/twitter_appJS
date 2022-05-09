// Usamos require para importar el UserView
const UserView = require('./../../app/views/UserView')

// Agregamos la prueba para el requerimiento 1 
describe("Tests for UserView", () => {

    test("Return an error object when try to create a new user whit an null payload", () => {
        const payload = null
        const result = UserView.createUser(payload)
        // https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/)
    })

    //Agregamos el test para el requerimiento 2
    test("Return an error object when try to create a new user whit a payload with invalid properties", () => {
        const payload = {
            username: null,
            name: 12,
            id: "id"
        }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("necesitan tener un valor valido")
    })

    //Agregamos el test para el requerimiento 3
    test("Return an error object when try to create a new user with a payload whith missing properties", () => {
        const payload = {
            username: "Username"
        }
        const result = UserView.createUser(payload)
        expect(result.error).toMatch("necesitan tener un valor valido")
    })

    //Agregamos la prueba para el requerimiento 4
    test("Create a user by a given valid payload", () => {
        const payload = {
            username: "username",
            id: 1,
            name: "name"
        }
        const result = UserView.createUser(payload)
        expect(result.name).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    })


})