import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';


export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const incomes = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : null);
    const expenses = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : null);    
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${incomes.reduce((am, i) => (am += i), 0)}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expenses.reduce((am, i) => (am += i), 0))}</p>
            </div>
        </div>
    )
}
