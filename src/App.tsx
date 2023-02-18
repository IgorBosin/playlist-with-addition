import React, {useEffect, useState} from 'react';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";

type DataType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

const App = () => {

    const [data, setData] = useState<DataType[]>([])

    const doFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        doFetch()
    }, [])

    const showAllFoo = () => {
        doFetch()
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [])

    // const showAllFoo = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }

    const clearAllFoo = () => {
        setData([])
    }

    const [title, setTitle] = useState('')

    const newData = (title: string) => {
        const newData = {title: title, completed: true, id: data.length + 1, userId: data.length + 1}
        setData([newData, ...data])
    }

    const addTitle = () => {
        newData(title)
        setTitle('')
    }

    return (
        <div>
            <Button name={'Show all'} callback={showAllFoo}/>
            <Button name={'Clear all'} callback={clearAllFoo}/>
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'Add new title'} callback={addTitle}/>
            </div>
            <ul>
                {data.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default App;