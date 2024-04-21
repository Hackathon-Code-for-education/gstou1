# gstou1

/ Backend 

скачать php8.1
скачать композер
в папке backend скопировать файл .env.example и назвать его .env 

прописать composer update 
прописать composer install 
задать там в DB_PORT, DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
порт бд, хост бд, название бд, имя пользователя бд, пароль соответственно
прописать php artisan generate:key
прописать php artisan migrate
прописать php artisan load:uni
прописать php artisan db:seed --class=RoleSeeder
создать админа прописав php artisan admin:create name surname email password

/ Frontend

npm i --force 

npm start

