import {addTodolistAC, todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";
import {v1} from "uuid";


let todolistId1: string;
let todolistId2: string;
let startState: Array<TodolistType> = [];

beforeEach(() => {
    todolistId1 = v1();
    todolistId2 = v1();
    startState = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
})


test('correct todolist should be added', () => {
    let newTodolistTitle = "New Todolist";

    const endState:Array<TodolistType> = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
    expect(endState[0].filter).toBe("all");
});


