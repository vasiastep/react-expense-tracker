import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${amounts.reduce((am, i) => (am += i), 0)}</h1>
        </>
    )
}

