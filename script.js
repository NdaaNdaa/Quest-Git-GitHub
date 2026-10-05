
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
    kode: "14823153",
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
];

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

const tabelMataKuliah = document.getElementById("tabelMataKuliah");

function tampilkanMataKuliah(data) {
    tabelMataKuliah.innerHTML = "";

    data.forEach((matkul, index) => {
        const baris = document.createElement("tr");

        const kolomNo = document.createElement("td");
        kolomNo.textContent = index + 1;
        kolomNo.classList.add("text-center");

        const kolomKode = document.createElement("td");
        kolomKode.textContent = matkul.kode;
        kolomKode.classList.add("text-center");

        const kolomNama = document.createElement("td");
        kolomNama.textContent = matkul.nama;

        const kolomNilai = document.createElement("td");
        kolomNilai.textContent = matkul.nilai;
        kolomNilai.classList.add("text-center", "fw-bold");

        baris.appendChild(kolomNo);
        baris.appendChild(kolomKode);
        baris.appendChild(kolomNama);
        baris.appendChild(kolomNilai);

        tabelMataKuliah.appendChild(baris);
    });
}

tampilkanMataKuliah(daftarMataKuliah);

const inputCari = document.getElementById("inputCari");

inputCari.addEventListener("input", function () {
    const kataKunci = inputCari.value.toLowerCase();

    const hasilPencarian = daftarMataKuliah.filter(function (matkul) {
        return matkul.nama.toLowerCase().includes(kataKunci);
    });

    tampilkanMataKuliah(hasilPencarian);
});

const pesanHasil = document.getElementById("pesanHasil");

inputCari.addEventListener("input", function () {
    const kataKunci = inputCari.value.toLowerCase();

    const hasilPencarian = daftarMataKuliah.filter(function (matkul) {
        return matkul.nama.toLowerCase().includes(kataKunci);
    });

    tampilkanMataKuliah(hasilPencarian);

    if (hasilPencarian.length === 0) {
        pesanHasil.textContent = "Mata kuliah tidak ditemukan.";
        pesanHasil.classList.remove("d-none");
    } else {
        pesanHasil.classList.add("d-none");
    }
});

const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function () {
    tabelMataKuliah.classList.toggle("sembunyikan");

    if (tabelMataKuliah.classList.contains("sembunyikan")) {
        btnToggle.textContent = "Tampilkan Tabel";
    } else {
        btnToggle.textContent = "Sembunyikan Tabel";
    }
});

const formMatkul = document.getElementById("formMatkul");

const inputKode = document.getElementById("inputKode");
const inputNama = document.getElementById("inputNama");
const inputNilai = document.getElementById("inputNilai");

const pesanForm = document.getElementById("pesanForm");


formMatkul.addEventListener("submit", function (event) {

    event.preventDefault();

    const kode = inputKode.value.trim();
    const nama = inputNama.value.trim();
    const nilai = inputNilai.value;

    if (kode === "" || nama === "" || nilai === "") {

        pesanForm.textContent = "Semua data harus diisi.";
        pesanForm.classList.remove("d-none");
        pesanForm.classList.remove("pesan-sukses");
        pesanForm.classList.add("pesan-error");

        return;
    }

    const kodeSudahAda = daftarMataKuliah.some(function (matkul) {
        return matkul.kode === kode;
    });

    if (kodeSudahAda) {

        pesanForm.textContent = "Kode mata kuliah sudah digunakan.";
        pesanForm.classList.remove("d-none");
        pesanForm.classList.remove("pesan-sukses");
        pesanForm.classList.add("pesan-error");

        return;
    }

    const mataKuliahBaru = {
        kode: kode,
        nama: nama,
        nilai: nilai
    };

    daftarMataKuliah.push(mataKuliahBaru);

    tampilkanMataKuliah(daftarMataKuliah);

    pesanForm.textContent = "Mata kuliah berhasil ditambahkan!";
    pesanForm.classList.remove("d-none");
    pesanForm.classList.remove("pesan-error");
    pesanForm.classList.add("pesan-sukses");

    formMatkul.reset();
});

