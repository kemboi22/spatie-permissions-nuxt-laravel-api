# LARAVEL ROLES AND PERMISSIONS API
 
## CLONE REPO

```shell
git clone https://github.com/kemboi22/spatie-permissions-nuxt-laravel-api
```

## FRONT END
### NUXT PACKAGES USED
- @nuxt/tailwindcss
- @nuxt/pinia
- @nuxt/pinia-persisted-plugin
- shadcn-vue

```shell
cd frontend

pnpm install

pnpm run dev
```
NB: If you want to change the back end base url change it in the nuxt.config.ts

## BACKEND API
### PACKAGES USED
- [Spatie Roles And Permissions](https://spatie.be/docs/laravel-permission/v6/introduction)

- [Breeze](https://laravel.com/docs/10.x/starter-kits)
### Running Back End Application

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

You Api is running on port 8000

##### Open Browser and visit [http://localhost:3000](http://localhost:3000)

# CONTRIBUTING GUIDE
- You can contribute to this repo and help make better so that it can be a template
