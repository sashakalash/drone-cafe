##Demo
Интерфейс клиента https://fast-woodland-85967.herokuapp.com   
Интерфейс повара https://fast-woodland-85967.herokuapp.com/#!/kitchen  
 
##Архитектура
###Серверная часть
REST API приложения построено на Node.js с использованием фреймворка Express.js. Для хранения данных приложение 
использует MongoDB и модуль Mongoose.       

```/app.js``` - основной файл приложения, осуществляющий подключение модулей необходимых для функционирования 
сервера.    
```/server/controllers/``` - модули, выполняющие основную логику приложения   
```/server/lib/``` - дополнительные модули (подключение к базе данных и веб-сокетам)     
```/server/models/``` - модели БД (реализовано 3 модели: ```User``` - пользователи приложения, ```Order``` - заказы 
пользователей, ```Dish``` - блюда, доступные для заказа)   
```/server/routes/``` - роуты, обрабатываемые сервером   
```/server/config.js``` - настройки сервера   

###Клиентская часть
Представляет собой Single Page Application и реализована с использованием фреймворка AngularJs.   
Структура клиентской части представляет собой набор компонент и сервисов, размещенных в ```/public/src/```.   

Роутинг настроен с помощью модуля ```ui.router```:   
- ```/``` - главная страница пользователя   
- ```/dishes``` - раздел со списком блюд   
- ```/login``` - страница авторизации пользователя   
- ```/kitchen``` - интерфейс повара   

После перехода на страницы ```/``` и ```/dishes``` система проверяет авторизацию пользователя. В случае, если 
пользователь не авторизован, приложение отправляет на ```/login```

Для входа в интерфейс повара авторизация не требуется.   

Взаимодействие клиента и сервера в режиме реального времени осуществляется с помощью библиотеки Socket.io 