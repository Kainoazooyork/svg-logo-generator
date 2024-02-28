// const colorKeywords = require('./colorKeywords.js')

const questions = [
    
    // Shapes
    
    {
        name: 'shape',
        message: 'What shape would you like your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    
    // Shape color
    
    {
        name: 'shapeColorChoice',
        message: 'What color would you like your logo?',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    
    // Color keyword 
    
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
    //    when: (answers) => {
    //         if(answers.shapeColorChoice === 'color keyword') {
    //             return true;
    //         }
    //         return false;
    //     },
    //     validate: (answer) => {
    //         let answerLowercase = answer.toLowerCase();
    //         for (var i = 0, len = colorKeywords.length; i < len; ++i) {
    //             if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
    //             return true;
    //         }}
    //         return console.log("\n Please enter a valid color keyword")
    //     }
    },
    
    // Hexadecimal color
    
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number",
        // when: (answers) => {
        //     if(answers.shapeColorChoice === 'hexadecimal') {
        //         return true;
        //     }
        //     return false;
        // },
        // validate: (answer) => {
        //     const hexRegEx = '^#[A-Fa-f0-9]{6}$'
        //     if (!answer.match(hexRegEx)) {
        //         return console.log("\n Please enter a valid hexadecimal")
        //     }
        //     return true;
        // }
    },

        // Text (3 character limit)

    {
        name: 'text',
        message: 'What is the text for your logo? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text has a 3 character limit. Please choose again");
            }
            return true;
        }
    },

    // Text color
    
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },

    // Color keyword for text

    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        // when: (answers) => {
        //     if(answers.textColorChoice === 'color keyword') {
        //         return true;
        //     }
        //     return false;
        // },
        // validate: (answer) => {
        //     let answerLowercase = answer.toLowerCase();
        //     for (var i = 0, len = colorKeywords.length; i < len; ++i) {
        //         if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
        //         return true;
        //     }}
        //     return console.log("\n Please enter a valid color")
        // }
    },

    // Hexadecimal values

    {
        type: "input",
        name: "textColor",
        message: "Enter the hexadecimal number",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;