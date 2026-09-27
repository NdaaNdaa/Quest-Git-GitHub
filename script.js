
const daftarMataKuliah = [
    {
    kode: "14823393",
    nama: "Interaksi Manusia dan Komputer",
    nilai: "A"
},
{
    kode: "14823372",
    nama: "Statistika dan Probabilitas",
    nilai: "AB"
},
    {
    kode: "14823333",
    nama: "Algoritma dan Struktur Data",
    nilai: "A"
},
    {
    kode: "14823313",
    nama: "Sistem Basis Data",
    nilai: "A"
},
    {
    kode: "14823274",
    nama: "Pemrograman Berorientasi Objek",
    nilai: "A"
},
    {
    kode: "14823192",
    nama: "Arsitektur dan Organisasi Komputer",
    nilai: "A"
},
    {
    kode: "14823274",
    nama: "Teknologi Informasi dan Aplikasi Bisnis Berkembang",
    nilai: "AB"
},
    {
    kode: "14823342",
    nama: "Aljabar Linear",
    nilai: "AB"
},
    {
     kode: "14823012",
    nama: "Etika Pengembangan Teknologi Siber",
    nilai: "A"
},
    {
     kode: "14823323",
    nama: "Dasar Pemrograman**",
    nilai: "A"
},
    {
     kode: "14823532",
    nama: "Bahasa Inggris",
    nilai: "A"
},
    {
     kode: "14823362",
    nama: "Kalkulus",
    nilai: "B"
},
    {
     kode: "14823352",
    nama: "Matematika Diskrit",
    nilai: "AB"
},
    {
     kode: "14823202",
    nama: "Sistem Operasi",
    nilai: "AB"
},
    {
     kode: "14823103",
    nama: "Konsep dan Fondasi Sistem Informasi",
    nilai: "AB"
}
]

function hitungJumlahMatkul(data) {
    return data.length;
}

console.log(
    `Jumlah Mata Kuliah : ${hitungJumlahMatkul(daftarMataKuliah)}.`
);

function cariMataKuliah(data, kode) {
    for (const matkul of data) {
        if (matkul.kode === kode) {
            return matkul;
        }
    }
    return null;
}

console.log(cariMataKuliah(daftarMataKuliah, "14823274"));

function cariNilaiBagus(matkul) {
    if (matkul.nilai === "A" || matkul.nilai === "AB") {
        return "Nilai Bagus";
    }
    return "Perlu Diperbaiki";
}

const hasilCari = cariMataKuliah(daftarMataKuliah, "14823274")
console.log(cariNilaiBagus(hasilCari)); 