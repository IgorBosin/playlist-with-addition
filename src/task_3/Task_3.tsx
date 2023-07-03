import {ChangeEvent, memo, ReactNode, RefObject, useCallback, useEffect, useRef, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children

type TaskType = {
    children: ReactNode
}

export const Task_3 = () => {
    console.log('Task_3')
// export const Task_3: React.FC<TaskType> = ({children}) => {                            // 4 способ - передача компоненты в children
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    const inputRef: RefObject<HTMLInputElement> = useRef(null)                   // 6 способ - useRef
    return (
        <div>
            <div>Lags when change value</div>
            {/*<input type="text" value={value} onChange={onChange}/>*/}
            <input ref={inputRef}/>
            <SlowComponent/>
            {/*{children}*/}
        </div>
    );
};

const Input = memo(() => {                                                      // 3 способ - создать отдельную компоненту
    console.log('Task_3')
    const [value, setValue] = useState('');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value), [setValue]);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
});