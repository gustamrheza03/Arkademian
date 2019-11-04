const fs = require('fs');

fs.readFile('text.txt',async(err,data)=>{
    if (err) return console.log("Data Tidak Di Temukan");
    await console.log("data di temukan");

    fs.unLink('text.txt',(err)=>{
      if (err) return console.log("Gagal Hapus Data");

      console.log("Hapus Data Berhasil");

    })
})
