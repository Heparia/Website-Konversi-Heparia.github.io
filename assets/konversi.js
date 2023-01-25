//nilai pangkat
var satuanKedua = "4"
var satuanPertama = "1"
const konversi = {
  displayNumber : 'Nilai',
  displayHasil : 'Hasil',
  hasil : "",
  pangkat : null,
  pilAkhir : null,
}

function tujuan(nilai){
  const kedua = JSON.stringify({nilai})
  const k = JSON.parse(kedua)
  satuanKedua = satuanKedua.replace(satuanKedua, k.nilai)
  console.log(satuanKedua)
  informasi()
  }
function asal(nilai){
  const pertama = JSON.stringify({nilai})
  const p = JSON.parse(pertama)
  satuanPertama = satuanPertama.replace(satuanPertama, p.nilai)
  informasi()
  }
//displayNumber
function updateDisplay(digit) {
  console.log(konversi.displayNumber)
  if (konversi.displayNumber.length<=10) {
    document.querySelector('#displayNumber').innerText = konversi.displayNumber;
    console.log(konversi.displayNumber.length)
  }
  else if(konversi.displayNumber.length<=20){
    document.querySelector('#displayNumber').innerText = konversi.displayNumber;
    document.querySelector('#displayNumber').style.maxWidth = '130px';
    document.querySelector('#displayNumber').style.overflowX = 'auto';
    document.querySelector('#displayNumber').style.margin = '15% auto auto auto';
  }
  else if (digit == '1' || digit == '2' || digit == '3' || digit == '0' || digit == '4' || digit == '5' || digit == '6' || digit == '7' || digit == '8' || digit == '9') {
    alert('Maaf ini sudah mencapai batas jumlah input. Silahkan tekan tombol sama dengan (=) untuk memperoleh hasil atau (x) untuk menghapus input terakhir atau (C) untuk menghapus semua input!')
  }
}
function inputDigit(digit) {
  let x = 5;
  let y = displayNumber.length;
  let arr = ['kilometer','hektometer','dekameter','meter','desimeter','centimeter','milimeter']
  if (konversi.displayNumber === 'Nilai') {
    if (digit == '.' || digit =='=' || digit == 'i' || digit == 'x') {
      konversi.displayNumber === konversi.displayNumber;
      alert('Isikan angka terlebih dahulu!')
    }
    else if (digit == 'C') {
      konversi.displayHasil = 'Hasil'
    }
    else{
      konversi.displayNumber = digit;
    }
  }
  else if (digit == 'i') {
    konversi.displayNumber === konversi.displayNumber;
    let namaSatuanPertama = arr[parseInt(satuanPertama)-1]
    let namaSatuanKedua = arr[parseInt(satuanKedua)-1]
    if (document.querySelector('#displayHasil').innerText == 'Hasil') {
      alert("Tolong click tombol sama dengan (=) terlebih dahulu!")
    }
    else{
      if (konversi.pilAkhir == 'panjang') {
      namaSatuanPertama = namaSatuanPertama.replace('gram', 'meter')
      namaSatuanKedua = namaSatuanKedua.replace('gram','meter')
      alert(`${konversi.displayNumber} ${namaSatuanPertama} = ${konversi.displayHasil} ${namaSatuanKedua}`)
      } 
      else if(konversi.pilAkhir == 'massa') {
      namaSatuanPertama = namaSatuanPertama.replace('meter', 'gram')
      namaSatuanKedua = namaSatuanKedua.replace('meter','gram')
      alert(`${konversi.displayNumber} ${namaSatuanPertama} = ${konversi.displayHasil} ${namaSatuanKedua}`)
      }else{
        alert(`${konversi.displayNumber} ${namaSatuanPertama} = ${konversi.displayHasil} ${namaSatuanKedua}`)
      }
    }
  }
  else if (digit == '=') {
    konversi.displayNumber = konversi.displayNumber;
    enter()
  }
  else if (digit == 'x') {
    konversi.displayNumber = konversi.displayNumber.slice(0,-1)
    document.querySelector('#displayHasil').style.overflowX = 'hidden';
    document.querySelector('#displayHasil').innerHTML = 'Hasil';
  }
  else if (digit == 'C') {
    konversi.displayNumber = 'Nilai';
    document.querySelector('#displayNumber').style.overflowX = 'hidden';
    document.querySelector('#displayHasil').style.overflowX = 'hidden';
    document.querySelector('#displayHasil').innerHTML = 'Hasil';
  }
  else{
    if (konversi.displayNumber == '0' && digit == '0') {
      konversi.displayNumber = konversi.displayNumber + '.'+ digit;
      alert('Sistem otomatis mengubah input angkamu menjadi bentu desimal karena dua angka awal tidak boleh nol (0)!')
    } 
    else {
      konversi.displayNumber += digit
    }
      }
}
const buttons = document.querySelectorAll('.button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    const target = event.target;
  inputDigit(target.innerText);
  updateDisplay(target.innerText);})}
//operasi akhir
function enter(){
  if (satuanPertama>satuanKedua) {
    pangkat = satuanPertama-satuanKedua
    hasil = 10**pangkat
    konversi.displayHasil = parseInt(konversi.displayNumber)/hasil
      document.querySelector('#displayHasil').innerHTML = konversi.displayHasil;
      bentukOutput()}
  else if (satuanKedua>satuanPertama) {
    pangkat = satuanKedua-satuanPertama
    hasil = 10**pangkat
    konversi.displayHasil = parseInt(konversi.displayNumber)*hasil
      document.querySelector('#displayHasil').innerHTML = konversi.displayHasil;
      bentukOutput()
    }
    else {
    konversi.displayHasil = konversi.displayNumber
    document.querySelector('#displayHasil').innerHTML = konversi.displayHasil;
    bentukOutput()
  }
  updateHistory()
  }
//bentuk output
function bentukOutput(){
    document.querySelector('#displayHasil').style.maxWidth = '130px'
    document.querySelector('#displayHasil').style.overflowX = 'auto';
    document.querySelector('#displayHasil').style.margin = '15% auto auto auto';
}
//dropdown jenis kalkulator
function pilihan(nilai){
  const pilKalkulator = JSON.stringify({nilai})
  const pilKonversi = JSON.parse(pilKalkulator)
  konversi.pilAkhir = pilKonversi.nilai
  const kata = document.querySelectorAll(".ops");
  if (konversi.pilAkhir == 'panjang') {
    for (const item of kata) {
      let data = item.innerText
      let datanew = data.replace('gram','meter')
      item.innerHTML = datanew
    }   
  } else{
    for (const item of kata) {
      let data = item.innerText
      let datanew = data.replace('meter','gram')
      item.innerHTML = datanew
    }
  }
}
//informasi operasi
function informasi(){
  if (satuanPertama>satuanKedua) {
    konversi.pangkat = satuanPertama-satuanKedua
    konversi.hasil = 10**konversi.pangkat
    document.getElementById('informasi').innerHTML = "Nilai dibagi dengan "+konversi.hasil;
  } else if (satuanKedua>satuanPertama) {
    konversi.pangkat = satuanKedua-satuanPertama
    konversi.hasil = 10**konversi.pangkat
    document.getElementById('informasi').innerHTML = "Nilai dikali dengan "+konversi.hasil;
  } else {
    konversi.pangkat = 0
    konversi.hasil = 10**konversi.pangkat
    document.getElementById('informasi').innerHTML = "Nilai sama";
  }
}

//history
function updateHistory() {
  let historyList = document.querySelector("#listRiwayat");
  document.querySelector("#listRiwayat").style.overflowX = 'scroll'
  historyList.innerHTML = "";
  if (konversi.pilAkhir == 'panjang') {
    let arr = ['kilometer','hektometer','dekameter','meter','desimeter','centimeter','milimeter']
    let row = document.createElement('tr');
      row.innerHTML = "<td>" + konversi.displayNumber + "</td>";
      row.innerHTML += "<td>" + arr[parseInt(satuanPertama)-1] + "</td>";
      row.innerHTML += "<td>" + konversi.displayHasil + "</td>";
      row.innerHTML += "<td>" + arr[parseInt(satuanKedua)-1] + "</td>";
      historyList.appendChild(row);
  } else {
    let arry = ['kilogram','hektogram','dekagram','gram','desigram','centigram','miligram']
      let row = document.createElement('tr');
      row.innerHTML = "<td>" + konversi.displayNumber + "</td>";
      row.innerHTML += "<td>" + arry[parseInt(satuanPertama)-1] + "</td>";
      row.innerHTML += "<td>" + konversi.displayHasil + "</td>";
      row.innerHTML += "<td>" + arry[parseInt(satuanKedua)-1] + "</td>";
      historyList.appendChild(row);
}}