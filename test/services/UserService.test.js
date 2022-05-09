// Agregamos la prueba para el requerimiento 1
const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {

    xtest("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Gualberto", "Gual")
        expect(user.username).toBe("Gualberto")
        expect(user.name).toBe("Gual")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

// Agregamos la prueba para el requerimiento 2
    xtest("2. Get all user data in a list", () => {
        const user = UserService.create(1, "Gualberto", "Gual")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("Gualberto")
        expect(userInfoInList[2]).toBe("Gual")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

// Agregamos la prueba para el requerimiento 3
    xtest("3. Update username", () => {
        const user = UserService.create(1, "Gualberto", "Gual")
        UserService.updateUserUsername(user, "gual")
        expect(user.username).toBe("gual")
    })

// Agregamos la prueba para el requerimiento 4
    xtest("4. Given a list of users give me the list of usernames", () => {
        const user1= UserService.create(1, "Gualberto1", "Gual")
        const user2= UserService.create(1, "Gualberto2", "Gual")
        const user3= UserService.create(1, "Gualberto3", "Gual")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("Gualberto1")
        expect(usernames).toContain("Gualberto2")
        expect(usernames).toContain("Gualberto3")
    })

})