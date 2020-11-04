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
            message: 'What is your email so that you can be contacted to report an issue?',
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'What kinds of contributions do you need for this project?',
        },
        {
            name: 'github',
            type: 'input',
            message: 'What is your gihub username?',
        },
        {
            name: 'license',
            type: 'list',
            message: 'How kind of license does this project have?',
            choices: ["Apache 2.0", "GNU v3.0", "MIT"],
        },
    ])
    .then((answer) => {
        console.log('license', answer.license)
        if (answer.license == 'Apache 2.0') {
            var licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            var licenseDescription = 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0';
        } else if (answer.license == 'GNU v3.0') {
            var licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
            var licenseDescription = 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.If not, see https://www.gnu.org/licenses/.';
        } else if (answer.license == 'MIT') {
            var licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            var licenseDescription = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.';
        };
        fs.writeFile('README.md',

            `
# ${answer.title}
${licenseBadge}

### Introduction

This was made for ${answer.name} and it's really cool. My github can be found at https://github.com/${answer.github}.

[Project Description](#project-description)  
[Installation](#installation)  
[Issues](#issues-and-questions)  
[License](#license)  


### Project Description  
${answer.useCase}  
${answer.howTo}  

### Installation  
${answer.install} and then some  

### Issues and Questions
If you find any issues with our code, please don't hesitate to contact us at ${answer.report}, and if you would like to contribute to this project, we could use someone who is able to ${answer.contribute}. If you are interested in pitching in get in touch with us. 

### License  
About the ${answer.license} License:   
${licenseDescription}
`,

            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });