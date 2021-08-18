# Angular project for SoftUni course 
Angular November 2020 / Retake Angular July 2021

# Техническа информация:
### Структура на проекта:

* клиентската част, изпълнена с Angular, се намира в директория: [Past_simple/client/](https://github.com/LoraKamenova/Past-Simple)
* сървърна част, изпълнена като Rest API с Node.js, се намира в директория: [Past_simple/client/server/](https://github.com/LoraKamenova/Past-Simple/tree/master/server)

### База данни:

Използвана е локална база данни MongoDb в комбинация с Mongoose

*Примерни данни в .json формат за попълване на таблиците в базата се намират в: [Past_simple/client/src/jsons]()

### Стартиране на проекта:

* инсталиране на зависимостите от package json за всяка от частите - клиентска и сървърна
    * `npm start` за сървърната част
    * `ng serve` за клиентската част

## Описание на сайта:

### Име
Минало свършено

### Предназначение:
Събрана на едно място информация за лайфстайла в България до 1989 г. - наличен снимков материали, събрани лозунги, куиз


### Карта на сайта:

#### За нелогнати потребители
* Начална (Index) страница
* Регистрация
* Вход

#### За логнати потребители:
* Начална (Home) страница
* Места (_включва страници с галерии_)
  * Пътуване
    * Море
    * Планина
    * Минерални бани
    * Къмпинг
    * Хотели
    * Градове
  * Заведения
    * Ресторанти
    * Ханчета
    * Сладкарници
  * Развлечения
    * Кино
    * Медии
    * Други забавления
* Преди и сега (_галерия на едни и същи места в различно време_)
* Лозунги (_колекция от най-безумните соц. лозунги_)
* Спомени (_спомени споделени от потребители_)
* Блог (_статии за някои от емблемите на социализма_)
* Тест (_куиз страница на тема социализъм - показва въпросите и резултат_)


* Моят профил - профил на потребителеля с данни и списък на неговите спомени
* Админ панел
  * всички снимки
  * всички спомени
  * всички статии
  * всички лозуниги
  * всички сравнения (преди и сега)
  
*в админ панела може да се види таблица с всички записи, като за всеки запис има фукционалност за редактиране и изтриване. За записите от тип снимки, спомени и снимки може да се види страница с детайли


### Права за създаване/редактиране/изтриване:
В БД пърият user e от тип Администратор (username: Admin, pass: Admin).
роля 'Admin' може да вижда Admin панела откъдето може да създава/редактира/изтрива Снимки, Сравнения, Лозунги, Спомени, Блог статии

Всички останали потребители са със статут на user:
роля 'user' може да създава Спомен и да редактира/изтрива само собствен Спомен. Може да разглежда всички спомени и всички други категории

### Допълнителна информация:
-използвани SVG и Angular Animations
