import React from 'react';
import {FilterValuesType, TaskType} from './App';

//1.Variable
//2.Parm of fun
//3.Retunr of func

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeTodoListFilter: (nextFilterValue: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {


    const tasksListItem = props.tasks.map((task: TaskType) => {
        return (

            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => props.removeTask(task.id)}>x</button>
            </li>

        )

    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksListItem}
            </ul>
            <div>
                <button onClick={() => props.changeTodoListFilter('all')}>All</button>
                <button onClick={() => props.changeTodoListFilter('active')}>Active</button>
                <button onClick={() => props.changeTodoListFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;