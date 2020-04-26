import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext)

    const addNewTransaction = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(), text, amount: +amount
        };

        addTransaction(newTransaction)

        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={addNewTransaction}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input value={text} 
                       onChange={e => setText(e.target.value)} 
                       type="text" 
                       id="text" 
                       placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input value={amount} 
                       onChange={e => setAmount(e.target.value)}
                       type="number" 
                       id="amount" 
                       placeholder="Enter amount..." />
                </div>
                <button className="btn" disabled={!text}>Add transaction</button>
            </form>
        </>
    )
}
