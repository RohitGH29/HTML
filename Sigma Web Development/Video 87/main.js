const fs = require("fs");
//console.log(fs)

console.log("starting")
// fs.writeFileSync("rohit.txt","Rohit is a good boy")
fs.writeFile("rohit1.txt","Rohit is a good boy",()=>{
    console.log("Done")
    fs.readFile("rohit.txt",(error,data)=>{
      console.log(error,data.toString());
    })
})

fs.appendFile("rohit.txt"," New data added",(e,d)=>{
console.log(d)
})

console.log("ending")