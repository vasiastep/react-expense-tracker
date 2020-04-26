import React, { createContext, useReducer } from 'react';
import {GlobalReducer} from './GlobalReducer'

// initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Salary', amount: 2000 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }) 
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        }) 
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    )
}