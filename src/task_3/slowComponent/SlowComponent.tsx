import {memo, useEffect, useMemo} from "react";

// export const SlowComponent = memo(() => {            // 2 способ - React.memo
export const SlowComponent = () => {
    console.log('SlowComponent re-render...');


    // useEffect(()=>{                              // 5 способ - useEffect
    //     let now = performance.now();
    //     while (performance.now() - now < 1000) {
    //         // Artificial delay -- do nothing for 100ms
    //     }
    // },[])


    let now = performance.now();
    // useMemo(() => () => {                             // 1 способ - useMemo
        while (performance.now() - now < 1000) {
            // Artificial delay -- do nothing for 100ms
        }
    // }, [])


    return <p>I am a very slow component tree.</p>;
};
