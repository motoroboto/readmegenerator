const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            message: "What is you name?",
            name: "name",
        },
        {
            message: "What else?",
            name: "what",
        },
    ]).then(name => {
        fs.writeFile('README.md',

            `${name}`,

            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });