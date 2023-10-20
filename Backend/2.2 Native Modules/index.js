const fs = require("fs");

// fs.writeFile("message1.txt", "Hello world", (err)=>{
//     if (err) throw err;
//     console.log("The file saved successful")
// })

fs.readFile("./message.txt", "utf8" , (err, data) =>{
    if (err) throw err;
    console.log(data);
})