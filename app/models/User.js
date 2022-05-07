// agrega el archivo user.js

class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }

   //Agregamos el codigo para que funcione la pruebas
   get getUsername(){
       return this.username
   } 

   get getBio(){
       return this.bio
   }

   get DateCreated(){
       return this.dateCreated
   }

   get getLastUpdated(){
       return this.lastUpdated
   }

   // Agregamos el codigo para nuestra prueba
   set setUsername(newUsername){
       this.username = newUsername
   }

   set setBio(newBio){
       this.bio = newBio
   }

}

module.exports = User