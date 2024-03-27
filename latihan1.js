function kategoriTinggiBadan(tinggi) {
    if (tinggi < 125) {
        return "Kategori Pendek";
    } else if (tinggi >= 125 && tinggi <= 170) {
        return "Kategori Sedang";
    } else {
        return "Kategori Tinggi";
    }
}

// Contoh penggunaan
console.log(kategoriTinggiBadan(124)); // Output: Kategori Pendek
console.log(kategoriTinggiBadan(140)); // Output: Kategori Sedang
console.log(kategoriTinggiBadan(171)); // Output: Kategori Tinggi