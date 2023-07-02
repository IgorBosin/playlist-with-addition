import React, {memo, useCallback} from 'react';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {FilterValuesType} from "./App";
import IconButton from '@mui/material/IconButton';
import {Delete} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {changeFilterAC, changeTodolistTitleAC, removeTodolistAC} from "./state/todolists-reducer";
import {Task} from "./Task";
import {addTaskAC, removeTaskAC} from "./state/tasks-reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
}

export const Todolist = memo(function (props: PropsType) {
    console.log('Todolist')

    const dispatch = useDispatch()

    const addTask = (title: string) => {
        dispatch(addTaskAC(title, props.id))
    }

    const removeTodolist = useCallback(() => {
        dispatch(removeTodolistAC(props.id))
    }, [dispatch])

    // const changeTodolistTitle = (title: string) => {
    //     dispatch(changeTodolistTitleAC(props.id, title))
    // } // со вторым параметром React.memo не работает

    const changeTodolistTitle = useCallback((title: string) => {
        dispatch(changeTodolistTitleAC(props.id, title))
    }, [dispatch, props.id])

    const removeTask = useCallback((taskId: string) => {
        dispatch(removeTaskAC(taskId, props.id))
    }, [dispatch, props.id])

    const onAllClickHandler = () => dispatch(changeFilterAC(props.id, 'all'))
    const onActiveClickHandler = () => dispatch(changeFilterAC(props.id, 'active'))
    const onCompletedClickHandler = () => dispatch(changeFilterAC(props.id, 'completed'))

    let tasks = props.tasks
    if (props.filter === "active") {
        tasks = props.tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasks = props.tasks.filter(t => t.isDone);
    }
    // const changeTaskStatus = useCallback((taskId: string, newIsDoneValue: boolean, todolistId: string) => {
    //     dispatch(changeTaskStatusAC(taskId, newIsDoneValue, todolistId))
    // }, [dispatch])
    // const changeTaskTitle = useCallback((taskId: string, newValue: string, todolistId: string) => {
    //     dispatch(changeTaskTitleAC(taskId, newValue, todolistId))
    // }, [dispatch])

    return <div>
        <h3><EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>


        {tasks.map(task => {
            return <Task key={task.id}
                         removeTask={removeTask} todolistId={props.id} tasks={task}/>
        })
        }

        <div style={{paddingTop: "10px"}}>
            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'inherit'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
})

