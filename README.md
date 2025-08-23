# FilmoPoisk

### [Ссылка](https://filmo-poisk.netlify.app/)

## Обзор
Интерактивное SPA на React для поиска, просмотра информации и подбора похожих фильмов/сериалов.

## Технологический стек
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)    ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)  ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

## Функционал

* 🔍 Поиск фильмов и сериалов с динамической подгрузкой
* 🔐 Авторизация: Google OAuth & Yandex OAuth
* ❤️ Избранное и история просмотров
* 📖 Похожие фильмы на основе "Избранного"
* 🎞️ Страница фильма: актёры, описание, факты, сиквелы/приквелы, похожие
* 👤 Страница актера: фильмография, факты, информация, супруг(а)
* 🗂️ Жанровые подборки с фильтрацией и сортировкой
* 🌙 Переключение темы (светлая/тёмная)
* ⭐ Оценки фильмов с цветовой индикацией
* 📱 Адаптивный интерфейс

## Скриншоты

<img width="1895" height="909" alt="image" src="https://github.com/user-attachments/assets/ae2c6b04-ac2a-4e59-9e89-b18eec68312b" />

***Главная***

<img width="1903" height="902" alt="image" src="https://github.com/user-attachments/assets/b22dd767-35a3-4f29-be0e-b343236e5d78" />

***Подборка и сериалов***

<img width="1906" height="904" alt="image" src="https://github.com/user-attachments/assets/b1faf5ce-d41a-4168-ac3d-154cda1c0c2e" />
<img width="1539" height="719" alt="image" src="https://github.com/user-attachments/assets/a6e48342-f07d-466a-8119-94184649e0b1" />
<img width="1518" height="799" alt="image" src="https://github.com/user-attachments/assets/ad2f16dc-4d65-4e2b-9dc5-8bc9a2303520" />

***Страница фильма***

<img width="1473" height="895" alt="image" src="https://github.com/user-attachments/assets/7174f78f-168f-4b9d-8aeb-1021afebecee" />

***Страница актера***

## Установка

1. Скачать исходный код
```bash
git clone https://github.com/tsukkuku/filmo-poisk
cd filmo-poisk
```

2. Установите зависимости
```bash
yarn install
```

3. Создайте .env файл и вставьте туда свой API ключ
```bash
VITE_API_KEY=API_KEY
```

## Запуск

1. Запуск на локальном сервере
```bash
yarn run dev
```

2. Сборка
```bash
yarn run build
```

**Собранные файлы будут в папке dist/**

3. Просмотр собранного проекта
```bash
yarn run preview
```
