const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?',
        },
        {
            name: 'something',
            type: 'input',
            message: 'What is something else?',
        },
        {
            name: 'title',
            type: 'input',
            message: 'What is the name of this project?',
        },
    ])
    .then((answer) => {
        fs.writeFile('README.md',

            `# ${answer.title}
            This was made for ${answer.name} and it's really ${answer.something}`,

            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });