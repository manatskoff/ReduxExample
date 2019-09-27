import React from 'react';
import './App.css';



import {createStore} from './redux/redux'
// import {createStore} from 'redux'


const initialState = {count: 0}


function reducer(state={count:0}, action) {
  switch (action.type) {
    case 'Inc' : return {count: state.count + action.amount}
    case 'Dec' : return {count: state.count - action.amount}
    case 'Reset' : return {count: 0}
    default: return state
  }
}

const incAction = {type: 'Inc', amount: 1}
const decAction = {type: 'Dec', amount: 1}
const resetAction = {type: 'Reset'}


const store  = createStore(reducer, initialState)     // Создаем хранилище - Указываем функцию для изменения состояния и Начальное состояние





class App extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    store.subscribe(() => {                   // Подписались на STORE. При изменении состояния  компонент будет обновляться
      this.forceUpdate()
      }
    )
  }


  incriment() {
    store.dispatch(incAction)                         // Вызываем функцию обновления состояния
  }


  render() {
    this.incriment()
    this.incriment()
    this.incriment()                                   // Изменяем состояние Store

    const count = store.getState().count
    return (
        <div>
          <p>Store State Count - {count}</p>
        </div>
    );
  }

}

export default App;
