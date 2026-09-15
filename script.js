// ===== РАСКРЫТИЕ/СКРЫТИЕ ВОДОЁМОВ И СБОРОК =====
document.addEventListener('DOMContentLoaded', function () {

    // Все блоки, которые можно раскрывать
    const items = document.querySelectorAll('.water-item, .build-item');

    items.forEach(function (item) {
        const header = item.querySelector('.water-header, .build-header');
        const content = item.querySelector('.water-content, .build-content');
        const toggle = item.querySelector('.toggle');

        header.addEventListener('click', function () {
            item.classList.toggle('open');
            if (item.classList.contains('open')) {
                toggle.textContent = '▲';
            } else {
                toggle.textContent = '▼';
            }
        });
    });

    // ===== ПОИСК ПО ВОДОЁМАМ =====
    const searchInput = document.getElementById('searchPoints');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            const waters = document.querySelectorAll('.water-item');
            waters.forEach(function (water) {
                const name = water.getAttribute('data-name');
                if (name.includes(query)) {
                    water.style.display = '';
                } else {
                    water.style.display = 'none';
                }
            });
        });
    }

});