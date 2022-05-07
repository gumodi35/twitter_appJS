// agregamos el codigo para que la prueba funcione del requerimiento 1
const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

// Agregamos el codigo para que la prueba funcione del requerimiento 2
    static getInfo(user){
        return Object.values(user)
    }
}

// exportamos nuestro modulo
module.exports = UserService