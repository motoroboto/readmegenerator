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
            message: 'How would someone contribute to this project?',
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
            var licenseDescription = 'The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works.By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users.We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors.You can apply it to your programs, too.';
        } else if (answer.license == 'MIT') {
            var licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            var licenseDescription = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.';
        };
        fs.writeFile('README.md',

            `
# ${answer.title}
${licenseBadge}

### Introduction

This was made for ${answer.name} and it's really cool. My github name is ${answer.github}

[Project Description](#project-description)
[Installation](#installation)
[Issues](#issues)
[License](#license)


### Project Description
${answer.useCase}
${answer.howTo}

### Installation
${answer.install} and then some

### Issues
${answer.report}
${answer.contribute}

### Licence
About the ${answer.license} License: 
${licenseDescription}
`,

            function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
    });