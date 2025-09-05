import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
        type : 'input',
        name : 'url',
        message: 'enter the url'
    }
    
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qrImg.png'));
    console.log('qr generated!!');

    writeFile('url.txt', answers.url, 'utf8', callback);

  })
  .catch((error) => {
    console.error("something went wrong",error);
  });
