document.querySelector('.sortAsc').addEventListener('click', function() {
    sortProducts(true);
    
});

document.querySelector('.sortDesc').addEventListener('click', function() {
    sortProducts(false);
});

function sortProducts(asc) {
    const container = document.querySelector('.grid-container');
    const products = Array.from(container.querySelectorAll('.product'));

    // Lấy giá tiền của từng sản phẩm và chuyển sang dạng số
    products.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.product__price').textContent.replace(/[^\d]/g, ''));
        const priceB = parseInt(b.querySelector('.product__price').textContent.replace(/[^\d]/g, ''));
        return asc ? priceA - priceB : priceB - priceA;
    });

    // Xóa các sản phẩm cũ và chèn lại theo thứ tự đã sắp xếp
    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
}