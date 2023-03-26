const { createStore } = require('redux');

const initialState = {
    count: 0,
    instructor: '',
    alumnos: []
}

const reducer = (state=initialState, action) => { //ejemplo:   action => {type: 'AUMENTAR_COUNT'}       action => {type: 'CAMBIAR_INSTRUCTOR', payload: 'Diana Ripoll'}
    // if (action.type === 'AUMENTAR_COUNT'){
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // }

    // if (action.type === 'CAMBIAR_INSTRUCTOR'){
    //     return {
    //         ...state,
    //         instructor: action.payload
    //     }
    // }

    switch(action.type){ // le indico lo que voy a estar evaluando
        case 'AUMENTAR_COUNT' : return {
            ...state, 
            count: state.count + 1
        }

        case 'CAMBIAR_INSTRUCTOR' : return {
            ...state,
            instructor: action.payload
        }

        case 'AGREGAR_ALUMNOS' : return {
            ...state,
            alumnos: action.payload
        }

        default: return {...state} // En caso que no se cumpla ningun caso, yo devuelvo el estado como estaba. 
    }
}

const store = createStore(reducer)

store.dispatch({type:'AUMENTAR_COUNT'})
store.dispatch({type:'CAMBIAR_INSTRUCTOR', payload: 'Diana Ripoll'})
store.dispatch({type:'AGREGAR_ALUMNOS', payload: ['Diana', 'Andres', 'Angie']})

console.log(store.getState())