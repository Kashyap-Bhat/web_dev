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

    fs.writeFile('URL.txt', answers.url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    }); 

  })
  .catch((error) => {
    console.error("something went wrong",error);
  });
