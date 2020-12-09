function night(){
    
    document.body.style.backgroundColor="lightgray"
    document.body.style.color="black"
    document.querySelector('.experience').style.backgroundColor="black";
    document.querySelector('.experience').style.color="white";
    document.querySelector('.certification').style.backgroundColor="black";
    document.querySelector('.certification').style.color="white";
    document.querySelector('.education').style.backgroundColor="black";
    document.querySelector('.education').style.color="white";
    document.querySelector('.skills').style.backgroundColor="black";
    document.querySelector('.skills').style.color="white";  
}
function light(){
    document.body.style.backgroundColor="lightgray";
    document.body.style.color="black";
    document.querySelector('.experience').style.backgroundColor="white";
    document.querySelector('.experience').style.color="black";
    document.querySelector('.certification').style.backgroundColor="white";
    document.querySelector('.certification').style.color="black";
    document.querySelector('.education').style.backgroundColor="white";
    document.querySelector('.education').style.color="black";
    document.querySelector('.skills').style.backgroundColor="white";
    document.querySelector('.skills').style.color="black";
}
function myFoto(){
    alert("Tidak bisa mengcopy atau memindahkan foto");
}
function nama(){
    let nama = prompt("Masukkan Nama");
    console.log("Nama anda adalah" + nama);
}
function email(){
    let email = prompt("Masukkan Email");
    console.log("Email = " + email);
}
function pesan(){
    let pesan = prompt("Tinggalkan Deskripsi");
    console.log("Deskripsi = " + pesan);
}
function submit(){
    alert("Data anda tersimpan");
}