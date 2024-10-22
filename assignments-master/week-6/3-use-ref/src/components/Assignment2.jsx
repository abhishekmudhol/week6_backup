import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

//let numberOfTimesReRendered = 0
export function Assignment2() {
    const [, forceRender] = useState(0);
    const renders = useRef(0)

    let a = renders.current 
    console.log(a);
    renders.current = ++a

    //++numberOfTimesReRendered

    const handleReRender = () => {
        // Update state to force re-render
        forceRender(Math.random());
    };

    return (
        <div>
            <p>This component has rendered {renders.current} times.</p>
            {/* <p>This component has rendered {numberOfTimesReRendered} times.</p>  */}
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};