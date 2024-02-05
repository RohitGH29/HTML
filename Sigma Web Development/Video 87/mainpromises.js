import fs from "fs/promises"



let b=await fs.appendFile("rohit.txt","\n\nTHis line is added by using promises")
let a=await fs.readFile("rohit.txt")

console.log(a.toString())