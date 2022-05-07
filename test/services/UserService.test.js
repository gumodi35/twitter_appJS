// Agregamos la prueba para el requerimiento 1
const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Gualberto", "Gual")
        expect(user.username).toBe("Gualberto")
        expect(user.name).toBe("Gual")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "Gualberto", "Gual")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Gualberto")
        expect(userInfoInList[2]).toBe("Gual")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

})