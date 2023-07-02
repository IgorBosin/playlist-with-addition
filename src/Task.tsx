import {Delete} from "@mui/icons-material";
import {EditableSpan} from "./EditableSpan";
import React, {ChangeEvent, memo, useCallback} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {TaskType} from "./Todolist";
import {useDispatch, useSelector} from "react-redux";
import {changeTaskStatusAC, changeTaskTitleAC} from "./state/tasks-reducer";
import {AppRootStateType} from "./state/store";


type TaskPropsType = {
    removeTask: (taskId: string) => void
    todolistId: string
    tasks: TaskType
    // changeTaskStatus: (taskId: string, newIsDoneValue: boolean, todolistId: string) => void
    // changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void
}
export const Task = memo((props: TaskPropsType) => {
    const dispatch = useDispatch()
    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[props.todolistId].filter(el => el.id === props.tasks.id)[0])
    console.log('tasks')
    const onClickHandler = () => props.removeTask(task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(task.id, newIsDoneValue, props.todolistId))
        // props.changeTaskStatus(task.id, newIsDoneValue, props.todolistId)
    }

    const onTitleChangeHandler = useCallback((newValue: string) => {
        dispatch(changeTaskTitleAC(task.id, newValue, props.todolistId))
        // props.changeTaskTitle(task.id, newValue, props.todolistId)
    }, [dispatch, task.id, props.todolistId]) // dispatch перерисовок не добавит

    // const onTitleChangeHandler = (newValue: string) => {
    //     dispatch(changeTaskTitleAC(task.id, newValue, props.todolistId))
    //     // props.changeTaskTitle(task.id, newValue, props.todolistId)
    // } // со вторым параметром React.memo не работает

    return <div className={task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>

})