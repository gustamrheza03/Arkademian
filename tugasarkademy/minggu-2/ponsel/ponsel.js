const ponsel = [
    {
        "nama":"Vivo y93",
        "gambar":"-",
        "harga":"2,999",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Samsung S10+",
        "gambar":"-",
        "harga":"2,500",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Realme",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Iphone XR",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Oppo A31",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Xiaomi 4x",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Honor",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Huawei",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Smartfren",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
    {
        "nama":"Oppo F1s",
        "gambar":"-",
        "harga":"2,000",
        "ram":"3GB",
        "storage":""
    },
];

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama 
    let gambarPonsel = ponsel[x].gambar
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider = "<div>\
    <span class='nama-ponsel'>"+namaPonsel+"</span>\
    <span class='gambar-ponsel'>"+gambarPonsel+"</span>\
    <span class='harga-ponsel'>"+hargaPonsel+"</span>\
    <span class='ram-ponsel'>"+ramPonsel+"</span>\
    <span class='storage-ponsel'>"+storagePonsel+"</span>\
    </div>";
    document.getElementById('ponsel-yusril').innerHTML += divider
}