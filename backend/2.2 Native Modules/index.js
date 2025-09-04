const fs =require("fs");

// fs.writeFile("helloWorld.txt","hello everyone!",(err) =>{
//     if(err)throw err;
//     console.log("file has been saved!");
// })

fs.readFile("helloWorld.txt","utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 