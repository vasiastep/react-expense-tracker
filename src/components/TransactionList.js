import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { TransacionItem } from './TransacionItem';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map( transaction => <TransacionItem key={transaction.id} 
                transaction={transaction}/> )}
            </ul>
        </>
    )
}
