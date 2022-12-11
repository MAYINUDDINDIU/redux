import React, { useState } from 'react';

const Child = ({ count, setCount }) => {
    // const [count, setCount] = useState(0);


    return (
        <div>
            <h1>Result:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Child;