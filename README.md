# Test Artemis

## Структура

### app

- **app/** - Папка с исходным кодом. Вся разработка ведется в этой папке.
- **../scss/style.scss** - Основной файл со стилями, почти все делается в этом файле.
- **../scss/_fonts.scss** - Файл с подключением шрифтов.
- **../scss/_global.scss** и **_reset.scss** - Файлы со стилями глобальных блоков/элементов.
- **../scss/_libs.scss** - Файл с подключением стилей сторонних библиотек.
- **../scss/_vars.scss** - Файл с переменными для основных цветов и шрифтов.
- **../css/style.min.css** - Минифицированный файл из **../scss/style.scss** и подключаемый в **index.html**.
- **../js/** - Содержит основной .js файл для разработки, а также .min.js для подключения в html. Файл .min.js - минифицированный из .js и  содержит сторонние библиотеки.
- **../img/** - картинки.

### dist

Готовый проект построенный из папки **app**. Кроме img cодержит только *.min.css(js) файлы.
