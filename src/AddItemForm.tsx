import React, {ChangeEvent, memo, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = memo((props: AddItemFormPropsType) => {
        console.log('AddItemForm')
        let [title, setTitle] = useState("")
        let [error, setError] = useState<string | null>(null)

        const addItem = () => {
            if (title.trim() !== "") {
                props.addItem(title);
                setTitle("");
            } else {
                setError("Title is required");
            }
        }

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onClickPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (error) setError(null);
            if (e.key === 'Enter') {
                addItem();
            }
        }

        return <div>
            <TextField variant="outlined"
                       error={!!error}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onClickPressHandler}
                       label="Title"
                       helperText={error}
            />
            <IconButton color="primary" onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    },
    (prevProps, nextProps) => prevProps.addItem !== nextProps.addItem)
