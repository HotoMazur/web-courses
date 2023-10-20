/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer.prompt([
    {
        name: 'greeting',
        message: 'What would you want generate qr code?',
        type: 'input'
    }])
    .then(function (answer) {
        let qr_png = qr.image(answer.greeting, { type: 'png' });
        qr_png.pipe(fs.createWriteStream('qe-code-image.png'));
        fs.writeFile("./qr-code-text.txt", answer.greeting, err => {
            if (err) {
                console.log(err)
            }
        })
    });
