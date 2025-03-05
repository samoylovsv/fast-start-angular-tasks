# 001 Homework

## 1. Install the CLI using the npm package manager:

```
npm install -g npm@9.6.7

npm install -g @angular/cli
```

## 2. Create, build, and serve a new, basic Angular project:

```
ng new hot-cakes

cd hot-cakes

ng serve

netstat -ano | findstr :4200

taskkill /PID <PID> /F

ng build

```

## 3. Setup ESLint settings.

### Установка ESLint

```
ng add @angular-eslint/schematics
```

### Добавляем правила стайл гайдов AirBnB

AirBnB - самый популярный и строгий из трёх (AirBnB, Google, StandartJS), 
обязательные замыкающие запятые и точки с запятыми.

```
npm install eslint-plugin-import eslint-config-airbnb-typescript --save-dev
```

А также в свойстве «overrides» добавим правила стайл гайда AirBnB в блок 
с правилами для файлов с расширением "*.ts":

```
{
...
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        // Стайл гайд AirBnB
        "airbnb-typescript/base"
      ],
      ...
    }
  ]
}
```

## 4. Настройка Prettier

### Установить Prettier

Чтобы добавить Prettier в нашу конфигурацию, 
нам надо установить сам Prettier, плагин с правилами Prettier, 
а также конфиг, который отключит все правила, 
которые могут конфликтовать с Prettier:

```
npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

В «overrides» в блоке с правилами файлов с расширением *.ts в свойство «extends» 
в самый низ добавьте правила и настройки Prettier:

```
      extends: [
        "plugin:@angular-eslint/recommended",
        // Стайл гайд AirBnB
	'airbnb-typescript/base',
	// Настройки для Prettier
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
      ],
```

Конфигурация для Prettier всегда должна быть в самом низу списка, 
чтобы перезаписать все правила, которые могут конфликтовать с Prettier.


`prettier/@typescript-eslint` отключает правила `@typescript-eslint`, 
которые могут конфликтовать с Prettier, а `plugin:prettier/recommended` 
делает три вещи:

- включает eslint-plugin-prettier,
- выводит в консоль ошибки правил prettier/prettier как  «error»,
- добавляет правила форматирования Prettier eslint-config-prettier.

### Конфиг для Prettier с AirBnB

Prettier умеет форматировать код без всяких настроек, 
но для соответствия стайл гайду AirBnB необходимо добавить некоторые настройки. 
Создайте файл `.prettierrc.json` в корне приложения:

```
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "printWidth": 100
}
```

## 5. Настройка Git хуков

С помощью них, мы можем запускать линтинг кода при создании коммита, 
чтобы в пул реквесты попадало меньше ошибок.

```
npm i husky lint-staged --save-dev
```

Добавим настройки для этих плагинов в package.json:

```
"scripts": {
  ...
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged --relative"
  }
},
"lint-staged": {
  "*.{js,ts}": [
     "eslint --fix"
  ]
},
```

lint-staged передаёт в вызываемую команду массив изменённых файлов. 
Команда ng lint не умеет принимать массив файлов, 
и для её использования надо писать дополнительный скрипт-обработчик. 
А можно просто вызвать ESLint, как в этом примере. 
Такое решение можно использовать для прекоммитов, 
а ng lint запускать для линтинга всего проекта, например в CI пайплайне.

## 6. Создайте структуру проекта
```shell
ng generate m modules/core
ng generate m modules/courses
ng generate m modules/login
ng g c modules/login/components/login-page
```
## 7. Создайте компоненты header, footer, logo
```shell
ng g c modules/core/components/header
ng g c modules/core/components/footer
ng g c modules/core/components/logo
ng g c modules/core/components/breadcrumbs
ng g c modules/core/components/section
```
## 8. Создайте страницу курсов. (Без имплементации)
```shell
ng g c modules/courses/components/courses-list
ng g c modules/courses/components/course-page
```
## 9. Создайте интерфейсы курсов и пользователей.
```shell
ng generate interface domain/courses/course
```
```typescript
export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}
```
```shell
ng generate i domain/login/user
```
```typescript
export interface User {
  id: number;
  firstName: string;
  lastName: string;
}
```
## 10. Компоновка модулей.

```shell
ng generate m modules/layout
ng g c modules/layout/components/layout-entry-pc
ng g c modules/layout/components/layout-site-pc
ng g c modules/layout/components/layout-entry-app
ng g c modules/layout/components/layout-site-app

ng g c modules/courses/components/course-item
```
___

#### Источники:

[angular.io - Documentation](https://angular.io/cli)

[https://habr.com/ru/articles/501830/](https://habr.com/ru/articles/501830/)

[https://angular.io/tutorial/first-app/first-app-lesson-04](https://angular.io/tutorial/first-app/first-app-lesson-04)

layout:


