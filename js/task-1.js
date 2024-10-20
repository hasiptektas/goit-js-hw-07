// ul#categories elementini seç
const categoriesList = document.getElementById('categories');

// Tüm li.item öğelerini seç
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

// Her bir kategori için işlemleri yap
categoryItems.forEach(item => {
  // Kategori başlığını al
  const categoryTitle = item.querySelector('h2').textContent;

  // Kategori içindeki tüm li öğelerini seç (alt kategoriler)
  const subItems = item.querySelectorAll('li');

  // Kategori içindeki öğe sayısını al
  const subItemCount = subItems.length;

  // Sonucu konsola yazdır
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItemCount}`);
});

