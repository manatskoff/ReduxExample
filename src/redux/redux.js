// Модуль - аналог реального REDUX
export function createStore(reducer, initialState) {   // reducer - функция для изменения состояния


    let state = initialState
    let callbacks = []


    const getState = () => state                        // Функция получения состояния



    const dispatch = (action) => {                      // функция изменения состояния
        state = reducer(state, action);
        callbacks.forEach(callback => callback())
    }



    const subscribe = callback => {
        callbacks.push(callback)
        return () => callbacks.filter(cb => cb !== callback)
    }




    return {getState, dispatch, subscribe}


}
