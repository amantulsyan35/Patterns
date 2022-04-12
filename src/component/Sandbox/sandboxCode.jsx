export const appCode = `
import {useCounter} from './counter-context.js'

const App = () => {
    const {state, dispatch} = useCounter()

    return(
      <div>
        <h1>SINGLETON PATTERN</h1>
        <h2>{state.count}</h2>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>INCREMENT</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      </div>
    )
  }
  
  export default App;`;

export const indexCode = `import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  import {CounterProvider} from './counter-context.js'
    
  ReactDOM.render(
    <React.StrictMode>
    <CounterProvider>
              <App />
    </CounterProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );`;

export const counterCode = `import { createContext, useContext, useState, useReducer } from 'react';

  const CounterContext = createContext();
  
  const CounterProvider = ({ children }) => {
    const reducerFunc = (state, action) => {
        switch(action.type){
            case 'INCREMENT':
                return {...state, count: state.count + 1 }
            case 'DECREMENT': 
            return {...state, count: state.count -1 }
            case DEFAULT:
                return state
        }
    }
  
    const [state, dispatch] = useReducer(reducerFunc, {count: 0})
    return (
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    );
  };
  
  const useCounter = () => useContext(CounterContext);
  
  export { CounterProvider, useCounter };`;
