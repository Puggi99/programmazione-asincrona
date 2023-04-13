// contiene tutte le funzioni che servono a chiamare il server

'use strict'

class DataService {
    // static getTodos(callback) { // linea 1 app.js => chiamo la get e dico di stampare. funzione inutile, poco leggibile
    //     // get here
    //     fetch(`https://643694673e4d2b4a12d616bf.mockapi.io/:endpoint`)
    //         .then(resp => resp.json())
    //         .then(data => callback(data));
    // }

    static getTodos() {
        // get here
        return fetch(`https://643694673e4d2b4a12d616bf.mockapi.io/ToDo`) // ritorno la fetch perche non so cosa farci con questi dati. ma non ho un then. vado in main
            .then(resp => resp.json());
    }

    // static postTodo(todo){

    // }
    // static putTodo(todo){

    // }
    // static deleteTodo(todo){

    // }
}