// agregamos el codigo para que la prueba del requerimiento 1 funcione
const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

// Agregamos el codigo para que la prueba del requerimiento 2 funcione
    static getInfo(user){
        return Object.values(user)
    }

// Agregamos el codigo para que la prueba del requerimiento 3 funcione
    static updateUserUsername(user, username){
        user.setUsername = username
    }

// Agregamos el codigo para que la prueba del requerimiento 4 funcione
    static getAllUsernames(users){
        const usersUsernames= users.map( user => user.username)
        return usersUsernames
    }
}

// exportamos nuestro modulo
module.exports = UserService