import path from "path"

let myPath="f:\\Github\\HTML\\Sigma Web Development\\Video 87\\rohit.txt"

console.log(path.extname(myPath))  // it gives extension of file

console.log(path.dirname(myPath)) // it gives path of the file
console.log(path.basename(myPath)) // it gives file name

console.log(path.join("c:/","programs\\rohit.txt"))