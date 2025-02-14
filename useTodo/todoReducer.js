

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo': //Caso si es que el tipo del action que enviamos.

            return [...initialState, action.payload]; //retorna todo lo que esta en el estado inicial(inicialState)
        //adicional a esto, agregamos al estado el payload
        //en nuestro caso, el "todo" que le pasamos en TodoApp.jsx

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) { //comparo el id que me llega por el paylod.
                    return {
                        ...todo, //armo un nuevo objeto correspondiente al id.
                        done: !todo.done //cambio la propiedad done.
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }

}