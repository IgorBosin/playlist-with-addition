import React, {ChangeEvent} from 'react';

type PropsType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = (props:PropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <div>
            <input value={props.title} onChange={onChangeHandler}/>
        </div>
    );
};
