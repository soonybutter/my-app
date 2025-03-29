import React,{useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount]=useCounter(0);

    //의존성 배열 x
    useEffect(()=>{
        console.log("================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    //의존성 배열 ㅇ
    useEffect(()=>{
        setIsFull(count>=MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    },[count]);

    return (
        <div style={{ padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disable={isFull}>
                입장
            </button>
            <button onclick={decreaseCount}>
                퇴장
            </button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;