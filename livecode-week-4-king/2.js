/**
 * =====================
 * HITUNG GAJI KARYAWAN
 * =====================
 * 
 * [Deskripsi]:
 * Sebuah fungsi yang akan mengembalikan jumlah gaji yang akan diterima karyawan.
 * Dimana karyawan juga akan mendapatkan bonus maksimal 300.000.
 * Namun, jika jumlah tidak kehadiran karyawan kurang dari 70% maka
 * karyawan tidak akan mendapatkan bonus atau hanya mendapatkan gaji pokok saja.
 * 
 * - Absensi berupa array yang berisi angka 1 dan 0.
 * - Dimana 1 berarti karyawan hadir di kantor dan 0 berarti karyawan tidak hadir di kantor.
 * - Perhitungan bonus berupa 300.000 * (persen kehadiran)
 * - Total gaji berupa gaji pokok + bonus (jika ada)
 * 
 * [Rules]:
 * 1. tidak boleh menggunakan built in function apapun.
 * 2. Function menerima parameter nama, bonus, absensi dan gaji pokok karyawan
 * 3. Output harus sesuai dengan contoh yang telah diberikan
*/

function hitungGaji(nama, absensi, gajiPokok) {
  // Write your code here
  let jumlahHadir = 0
  let persenHadir = 0
  let totalGaji = 0
  for(let i=0;i<absensi.length;i++){
    jumlahHadir+=absensi[i]
  }
  persenHadir = jumlahHadir/absensi.length
  if(persenHadir>=0.7){
    totalGaji = 300000*persenHadir+gajiPokok
    return "Total gaji "+nama+" adalah Rp "+totalGaji
  }else{
    return "Total gaji "+nama+" adalah Rp "+gajiPokok
  }
}

var absensiFirst = [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]
console.log(hitungGaji('Hannah', absensiFirst, 3000000))
// Total gaji Hannah adalah Rp 3250000

var absensiSecond = [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0]
console.log(hitungGaji('Yuki', absensiSecond, 6000000))
// Total gaji Yuki adalah Rp 6000000