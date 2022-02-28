const fs = require('fs')

const db = {
    read(path) {
        return new Promise((resolve,reject) => {
            fs.readFile(path,{flag: 'a+'},(error,data) => {
                if(error){
                    return reject(error)
                }
                let list = []
                if(data.toString() == ""){
                    list = []
                }else{
                    console.log(data.toString())
                    list = JSON.parse(data.toString())
                }
                resolve(list)
            })
        })
    },
    write(list,path){
        return new Promise((resolve,reject) => {
            const str = JSON.stringify(list)
            fs.writeFile(path, str, (error) => {
                if(error){
                    return reject(error)
                }
                resolve()
            })
        })
    }
}
module.exports = db