import fs from "fs/promises"
import fsn from "fs"
import path from "path"


const basePath = 'F:\\Github\\HTML\\Sigma Web Development\\Video 93'

// console.log(fs)
let files = await fs.readdir(basePath)
// console.log(files)

// let  extensions=[]
for (const item of files) {

    console.log("running for", item)

    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(ext)
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basePath, ext))) {
            // move the file to the directory if it's not a json or js file
            console.log("File exits")
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        } else {
            console.log("File not exist")
            fs.mkdir(ext)
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item))
        }
    }
    // console.log(item)
}