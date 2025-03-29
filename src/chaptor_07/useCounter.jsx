import React, { useState } from "react";

function useCounter(initialValue){
    
    //초기값을 count로 받고 count이름의 state 생성.
    const[count, setCount] = useState(initialValue);

    //카운트 증가 및 감소를 편리하도록 함수 제공
    const increaseCount =()=> setCount((count)=> count + 1);
    const decreaseCount =()=> setCount((count)=> Math.max(count-1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
