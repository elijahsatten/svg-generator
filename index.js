const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const parameters = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'text',
        validate: input => (input.length > 3) ? 'Enter up to 3 characters or less' : true
    },
    {
        type: 'input',
        message: 'Enter a text color keyword or code',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Select a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a background color keyword or color code',
        name: 'background'
    }
];

function generateSVG(text, color, shape, background) {
    switch(shape) {
        case 'circle':
            const newCircle = new Circle(text, color, background);
            return newCircle.render();
            break;
        case 'triangle':
            const newTriangle = new Triangle(text, color, background);
            return newTriangle.render();
            break;
        case 'square':
            const newSquare = new Square(text, color, background);
            return newSquare.render();
            break;
    }
}

function start() {
    inquirer.prompt(parameters)
        .then((answers) => {
            const { text, color, shape, background } = answers;
            const svg = generateSVG(text, color, shape, background);
            fs.writeFile('./examples/logo.svg', svg, (err) => {
                if(err) {
                    console.log(err);
                }
                console.log('Success!');
            });
        });
}
start();
