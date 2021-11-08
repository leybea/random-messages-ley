const messages = [
    "Serena",
    "Rei",
    "Amy",
    "Mina",
    "Lita",
    "Mamoru",
    "Chibiusa",
    "Hotaru",
    "Saturn",
    "Uranus"
];
//randomMsg se encarga de hacer el random de estos mensajes
const randomMsg = () =>{
    //creamos un nuevo mensaje con un procesamiento matemático con métodos de javascript para poder retornar de fomra aleatoria un valor de esta lista
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};
//exportando como un modulo
module.exports = {randomMsg};