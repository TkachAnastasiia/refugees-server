# Сервер для проєкту "Знайди прихисток"
Сервіс для допомоги з пошуком та наданням прихистку для біженців

## Як запустити проєкт

У папці проєкту запустити команду:

### `npm start-server-mongo`

Сервер буде доступний за адресою [http://localhost:3000](http://localhost:3000) що би переглянути його в браузері.

## Функціонал сервера

- Url post `/user/login` отримує дані про логін та пароль і повертає токен
- Url post `/user/create` отримує дані про користувача та записує його в базу даних і повертає токен
- Url post `/shelter/create` отримує дані про житло та записує його в базу даних
- Url get `/shelter/shelter/get-own/:userId` отримує інтедефікатор користувача та повертає список зареєстрованого ним житла
- Url get `/shelter/get-by-city/:city` отримує інтедефікатор міста та повертає список житла зареєстрованого у цьому місті
- Url get `/shelter/:shelterId` отримує інтедефікатор житла та повертає з бази даних
- Url post `/shelter/message` отримує повідомлення від користувача та зберіга його у параметрах житла яке власник може прочитати
## Структура файлів

#### Проєкт написаний за допомогою фреймворка express.js [https://expressjs.com/](https://expressjs.com/)
- папка `configs` містить конфігурацію зʼєднання з базою даних та секретний ключ для генерації токена
- папка `controllers` містить файли-контролери які обробляють вхідний запит та передають у файли-сервіси для подальшої обробки
- папка `routes` містить файли у яких розписано адреси та медоти передачі даних
- папка `schemas` містить опис схем-обʼєктів (структури обʼєктів) для бази даних
- папка `services` містить файли для беспосередньої роботи з базою даних
- папка `index.js` точка входу для сервера
