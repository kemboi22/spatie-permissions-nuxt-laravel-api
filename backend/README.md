# LARAVEL ROLES AND PERMISSIONS API

### PACKAGES USED

[Spatie Roles And Permissions](https://spatie.be/docs/laravel-permission/v6/introduction)

[Breeze](https://laravel.com/docs/10.x/starter-kits) To scanfold Laravel API

### Running Application

```shell
cd backend
composer install
```
### Create SQLITE Database
```shell
cp .env.example .env
touch database/database.sqlite
```
### Running Migrations

- Configure the database in the .env file

```shell
php artisan migrate

php artisan permission:create-permission-routes

php artisan db:seed

php artisan serve
```

### Application Running

You application is running on port 8000
