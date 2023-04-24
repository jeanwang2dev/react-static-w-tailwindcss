import React from 'react';
import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function formatCount() {
        return count === 0 ? "Zero" : count;
    }

    return (
        <div className="mt-3">
            <span className="text-3xl mx-3">{count}</span>
            <button className="bg-slate-700 text-white px-4 py-2 rounded-xl">Increment</button>
        </div>
    )

    
    // formatCount() {
    //     const {count} = this.state;
    //     return count === 0 ? "Zero" : count;
    // }
}
 
export default Counter;