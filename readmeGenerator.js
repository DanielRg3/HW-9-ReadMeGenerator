function readmeGenerator(response) {
    var content = `# ${response.title}
    
## Project Description
${response.description}

## Table of Content:
1. ${response.bulet1}
1. ${response.bulet2}
1. ${response.bulet3}

## What I Learned:
In this project I learned about ${response.about}.\n
How to ${response.learning1}.\n
How to ${response.learning2}.\n
How to ${response.learning3}.\n
How to ${response.learning4}.

## Credits:
This project was made with the use of a tutorial in YouTube by <cite> ${response.credit} </cite>.\n 
Also, I would like to thank my tutor ${response.tutor} and my TA ${response.ta} for helping me to understand this assignment.`

    return content;
};

module.exports = readmeGenerator;