const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt({
        message: "What is you name?",
        name: "name"
    }).then(name => {
        fs.writeFile('read.md',

            "${name}",
            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });