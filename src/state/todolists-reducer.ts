import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";

// export type AddTodolistActionType = ReturnType<typeof addTodolistAC>

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    todolistId: string
}

type ChangeTodolistTitleActionType = ReturnType<typeof changeTodolistTitleAC>
type ChangeFilterActionType = ReturnType<typeof changeFilterAC>

type ActionsType = AddTodolistActionType
    | RemoveTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeFilterActionType

const initialState: Array<TodolistType> = []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            const newTodolist: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }
            return [newTodolist, ...state]
        }
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.todolistId)
        }
        case "CHANGE-TODOLIST-TITLE": {
            return state.map(el => el.id === action.todolistId ? {...el, title: action.newTitle} : el)
        }
        case "CHANGE-FILTER": {
            return state.map(el => el.id === action.todolistId ? {...el, filter: action.newFilter} : el)
        }
        default:
            return state;
    }
}

export const addTodolistAC = (title: string) => ({type: 'ADD-TODOLIST', title: title, todolistId: v1()}) as const

export const removeTodolistAC = (todolistId: string) => ({
    type: 'REMOVE-TODOLIST',
    todolistId,
}) as const
export const changeTodolistTitleAC = (todolistId: string, newTitle: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',
    todolistId,
    newTitle,
}) as const
export const changeFilterAC = (todolistId: string, newFilter: FilterValuesType) => ({
    type: 'CHANGE-FILTER',
    todolistId,
    newFilter,
}) as const