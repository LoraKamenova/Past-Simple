import {Component, DoCheck, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, DoCheck {
  questions: any;
  @Input() questionIndex: number;
  currentQuestion: string;
  currentOptions: string[];
  userAnswer;
  correctAnswer;
  @Output() answers =
    new EventEmitter<{user_answer: string, correct_answer: string}>();
  @Output() totalQuestions = new EventEmitter<number>();


  ngOnInit(): void {
    this.questions = [
      {
        question: 'Кой курорт е носил името "Мичурин" в периода 1950-1991 г.?',
        options: ['Созопол', 'Равда', 'Царево', 'Лозенец'],
        answer: 'Царево'
      },
      {
        question: 'В кой курорт започва да се провежда фестивалът "Златният Орфей"?',
        options: ['Несебър', 'Варна', 'Албена', 'Слънчев бряг'],
        answer: 'Слънчев бряг'
      },
      {
        question: 'Какво име е носил к.к. Св. св. Константин и Елена от 1957 до 1992 г.?',
        options: ['Мичурин', 'Дружба', 'Аполония', 'Василико'],
        answer: 'Дружба'
      },
      {
        question: 'През коя година напочва строителстовото на к.к. Слънчев бряг?',
        options: ['1965', '1970', '1958', '1962'],
        answer: '1958'
      },
      {
        question: 'Кой днешен софийски парк е носил името "Парк на дружбата"?',
        options: ['Западен парк', 'Северен парк', 'Борисовата градина', 'Южен парк'],
        answer: 'Борисовата градина'
      },
      {
        question: 'През коя година е открит Мостът на дружбата?',
        options: ['1960', '1954', '1950', '1946'],
        answer: '1954'
      },
      {
        question: 'Кой днешен софийски булевард е носил името "В. И. Ленин“"?',
        options: ['бул. Цариградско шосе', 'бул. Цар Освободител', 'бул. България', 'бул. Сливница'],
        answer: 'бул. Цариградско шосе'
      },
      {
        question: 'Какво означава съкръщанието ММЦ Приморско?',
        options: ['Международнен младежки център Приморско', 'Морски младежки център Приморско', 'Международен морски център Приморско', 'Международен музикален център Приморско'],
        answer: 'Международнен младежки център Приморско'
      },
      {
        question: 'В кой курорт е имало хотели с имена "Дoбpoтицa", "Бaлик", "Kapвyнa", "Дopocтop"?',
        options: ['Златни пясъци', 'Слънчев бряг', 'Алебна', 'Дюни'],
        answer: 'Алебна'
      },
      {
        question: 'Кой планински курорт между 1950 и 1989 г. се е наричал „Васил Коларов“?',
        options: ['Банско', 'Боровец', 'Чепеларе', 'Пампорово'],
        answer: 'Пампорово'
      },
      {
        question: 'През коя година изгаря сградата на софийския цирк?',
        options: ['1978', '1989', '1980', '1983'],
        answer: '1983'
      },
      {
        question: 'Какво са били "Москва", "Благоев", "Македония", "Аура", "Левски", "Изток", "Сердика"?:',
        options: ['площади', 'кина', 'хотели', 'булеварди'],
        answer: 'кина'
      },
      {
        question: 'Кой хотел се е приемал за емблема на курорта Албена?',
        options: ['Гергана', 'Нона', 'Добруджа', 'Боряна'],
        answer: 'Добруджа'
      },
      {
        question: 'Какво име е носила Варна в годините от 1949 до 1956 г.?',
        options: ['Сталин', 'Сталинград', 'Ленин', 'Ленинград'],
        answer: 'Сталин'
      },
      {
        question: 'Какво е първото предаване на Българската национална телевизия на 7 ноември 1959 г.?',
        options: ['манифестация', 'празничен концерт', 'новини', 'съветски филм'],
        answer: 'манифестация'
      },
      {
        question: 'От кой филм е репликата "И ние пушим цигари Кент и ядем бонбонки Тик-Так!"?',
        options: ['Баш Майсторът на море', 'Оркестър без име', 'Вилна зона', 'Топло'],
        answer: 'Оркестър без име'
      },
      {
        question: 'Кои са първите морски ваканционни селища в България?',
        options: ['Дюни, Елените, Русалка', 'Св. Влас, Елените, Русалка', 'Дюни, Лозенец, Русалка', 'Дюни, Елените, Албена'],
        answer: 'Дюни, Елените, Русалка'
      },
      {
        question: 'Какво има на гърба на социалистическата банкнота от два лева, емисия 1962 г.?',
        options: ['паметника на Шипка', 'розоберачка', 'гроздоберачка', 'портрет на Георги Димитров'],
        answer: 'гроздоберачка'
      },
      {
        question: 'Какво е ВМТ "Орбита"?',
        options: ['хотел', 'самолетен превозвач', 'завод', 'туроператор'],
        answer: 'туроператор'
      },
      {
        question: 'Коя марка автомобили е известна като съветският Ролс-ройс?',
        options: ['Шкода', 'Волга', 'Чайка', 'Лада'],
        answer: 'Чайка'
      },
    ].sort(() => Math.random() - Math.random()).slice(0, 10);
    this.totalQuestions.emit(this.questions.length);
  }

  ngDoCheck(): void {
    this.currentQuestion = this.questions[this.questionIndex].question;
    this.currentOptions = this.questions[this.questionIndex].options;
  }

  setUserAnswer(option: string) {
    this.userAnswer = option;
    this.correctAnswer = this.questions[this.questionIndex].answer;
    this.answers.emit(
      {user_answer: this.userAnswer, correct_answer: this.correctAnswer});
  }
}
