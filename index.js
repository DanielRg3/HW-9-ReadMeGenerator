var readmeGenerator = require("./readmeGenerator");
var fs = require('fs');
var inquirer = require('inquirer');

let questions = [
    {
        type: 'input',
        message: 'Project Title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the first bulet for the table of content.',
        name: 'bulet1',
    },
    {
        type: 'input',
        message: 'Enter the second bulet for the table of content.',
        name: 'bulet2',
    },
    {
        type: 'input',
        message: 'Enter the third bulet for the table of content.',
        name: 'bulet3',
    },
    {
        type: 'input',
        message: 'Please state what this project was about',
        name: 'about',
    },
    {
        type: 'input',
        message: 'Please state an specific learning from this project',
        name: 'learning1',
    },
    {
        type: 'input',
        message: 'Please state an other specific learning from this project',
        name: 'learning2',
    },
    {
        type: 'input',
        message: 'Please state an other specific learning from this project',
        name: 'learning3',
    },
    {
        type: 'input',
        message: 'Please state an other specific learning from this project',
        name: 'learning4',
    },
    {
        type: 'input',
        message: 'Cite any help from internet you might have used?',
        name: 'credit',
    },
    {
        type: 'input',
        message: 'Would you like to acknowledge any tutor?',
        name: 'tutor',
    },
    {
        type: 'input',
        message: 'Would you like to acknowledge any TA?',
        name: 'ta',
    }
];

/* .then((response) => {
    const invoke = README(response.title, response.description);
    fs.appendFile('README.md', invoke, (err) =>
        err? console.error(err) : console.log('Commit logged!')
    )
});
 */

inquirer.prompt(questions).then(function(response) {
    console.log(response);

    var content = readmeGenerator(response);
    console.log(content);
    fs.writeFile("./README.md", content, function(err) {
        if (err) throw err
        console.log("success");
    });
});