function funct () {
    let nama = prompt ('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
   }
   function sahkan () {
    let sahkan = confirm ('Adakah anda pasti?');
    if (sahkan) {
    return true;
    } else {
    alert ('Arahan simpan dibatalkan');
    return false;
    }
   }
   function target () {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
   }
   function blind() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
   }