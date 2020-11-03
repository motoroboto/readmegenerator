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
        {
            name: 'useCase',
            type: 'input',
            message: 'What is this application used for?',
        },
        {
            name: 'howTo',
            type: 'input',
            message: 'How is this app used?',
        },
        {
            name: 'install',
            type: 'input',
            message: 'What command should be run to install this app?',
        },
        {
            name: 'report',
            type: 'input',
            message: 'What should a user do to report an issue?',
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'How would someone contribute to this project?',
        },
        {
            name: 'licence',
            type: 'list',
            message: 'How kind of license does this project have?',
            choices: ["Apache", "MPS", "Another made Up one"],
        },
    ])
    .then((answer) => {
        var licenseType = answer.licence;
        if (licenseType = 'Apache') {
            var licenseCode = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        } else {

        };
        console.log('licenseType:', licenseType);
        fs.writeFile('README.md',

            `
# ${answer.title}
${licenseCode}
This was made for ${answer.name} and it's really ${answer.something}
${answer.useCase}
${answer.howTo}
${answer.install} and then some
${answer.report}
${answer.contribute}

`,

            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });