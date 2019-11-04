//proses pemanggilan libray fs 
const fs = require('fs')

console.log('start reading a file...')

//proses readfile text.txt.txt menggunakan libray fs
fs.readFile('text.txt', 'utf-8', (err, content)=>{
    //untuk handle error 
    if (err) {
        console.log('error happened during reading reading the file')
        return console.log(err)
    }
    
    //lakukan sesuatu disini kalau berhasil 

    //jika berhasil rename text.txt ke terserah.txt
    fs.rename('text.txt', 'terserah.txt', (err) =>{
        if (err) console.log ("gagal rename!"+err);

        console.log("Berhasil")
    })

})

console.log('end of the file')