#! /usr/bin/env node
//Parvez Coder
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "What you want  to add your Something ???"
        },
        {
            name: "adMore",
            type: "confirm",
            message: "Do you want to add more?????",
            default: false,
        }
    ]);
    todo.push(addTask.todo);
    condition = addTask.adMore;
    console.log(todo);
}
