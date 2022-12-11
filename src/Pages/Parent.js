import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);


    return (
        <div>
            <div>
                <h1>Result:{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>

            </div>


            <Child count={count} setCount={setCount} />
        </div>

    );
};

export default Parent;