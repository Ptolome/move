1. В проекте используются функциональные компоненты c хуками.
2. Есть четкое разделение на умные и глупые компоненты.
3. Есть рендеринг списков в компонентах. (минимум в 2).:Реализовано в компонентах src/pages/MainPage.jsx, src/pages/Favorite.jsx,src/components/Pagination.jsx
4. Реализованы формы в компонентах. (минимуи в 1).:src/components/TextField.jsx
5. Есть применение React Контекст API. добавил фичу подсчет количества нажатий на кнопки src/context
6. Есть применение предохранителя.src/components/ErrorBoundary.jsx в App.jsx
7. Есть кастомные хуки (минимум 1). src/hooks/useSignUpForm.jsx выполняет проверку на валидность 
8. Используется PropTypes (для проектов без TS) (минимум в 3 компонентах). src/components/Cart.jsx,src/components/Pagination.jsx,src/components/TextField.jsx
9. Есть кейс с применение Debounce. в компоненте MainPage.jsx для отсрочки поиска фильма в функции handleSearch
10. Есть применение lazy + Suspense. в компоненте App.jsx для ленивой подгрузки компонента PageMove.jsx
11. В проекте используется Redux Toolkit.состояние авторизации isAuth и имя пользователя fullName
12. В проекте используется RTK Query. src/store/moveAPI.js
13. В проекте есть кастомная мидлвара (минимум 1). src/store/moveAPI.js  redirectMiddleware для повторной отправки запроса при ошибках 
14. Регистрация пользователей в приложении осуществляется через LocalStorage.