let name = prompt("Masukkan nama anda disini","");
document.getElementById("name").innerHTML = name;

function displayResult(event) {
    event.preventDefault();
    

    // Mengambil nilai dari form
    const nama = document.forms["form-input"]["nama"].value;
    const tglLahir = document.forms["form-input"]["tgl_lahir"].value;
    const gender = document.forms["form-input"]["gender"].value;
    const message = document.forms["form-input"]["message"].value;

    if (nama === '' || tglLahir === '' || gender === '' || message === '') {
        document.getElementById("error-msg").innerHTML = "Data tidak boleh kosong!";
        return false;
    }

    document.getElementById("error-msg").innerHTML = "";
    setSenderform(nama, tglLahir, gender, message);

    return false;
}

// Menampilkan inputan pengguna
function setSenderform(nama, tgl_lahir, gender, pesan) {
    document.getElementById("outputName").innerHTML = nama;
    document.getElementById("outputDob").innerHTML = tgl_lahir;
    document.getElementById("outputGender").innerHTML = gender;
    document.getElementById("outputMessage").innerHTML = pesan;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i=0; i < imgList.length; i++){
        imgList[i].style.display = "none"
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000);