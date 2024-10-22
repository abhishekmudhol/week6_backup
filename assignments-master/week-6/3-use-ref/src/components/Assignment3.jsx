import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

export function Assignment3() {
    const [count ,setCount] = useState(0)
    const buttonRef = useRef(100)

    function updateRef(){
        buttonRef.current = buttonRef.current + 1
    }

    console.log('re-renders');

    return(
        <>
            <b>{buttonRef.current}</b><br/>
            <b>{count}</b><br/>
            <button onClick={updateRef}>Ref update</button><br/>
            <button onClick={()=> setCount(prev=>prev+1)}>state update </button>
        </>
    )
};