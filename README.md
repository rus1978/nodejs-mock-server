# NodeJs mock server

 Позволяет создавать rest api из данных имеющихся в локальных файлах json.
 Используется в качестве тестового сервера для проекта [интернет магазин](https://github.com/rus1978/online-store-on-angular) на ангуляре.  
 
### Установка

npm init

npm install --save express

### Старт

node index.js

### Доступны эндпоинты
[get] http://localhost:4201/api/v1/category/sushi файл category/sushi.json

[get] http://localhost:4201/api/v1/all файл all.json