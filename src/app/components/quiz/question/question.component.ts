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
        question: 'Кой днешен курорт е носил името "Мичурин"?',
        options: ['Созопол', 'Равда', 'Царево', 'Лозенец'],
        answer: 'Царево'
      },
      {
        question: 'В кой курорт започва да се провежда "Златният Орфей"?',
        options: ['Несебър', 'Варна', 'Албена', 'Слънчев бряг'],
        answer: 'Слънчев бряг'
      },
      {
        question: 'Какво е старото име на к.к. Свети Константин и Елена?',
        options: ['Мичурин', 'Дружба', 'Аполония', 'Месемврия'],
        answer: 'Дружба'
      },
      {
        question: 'През коя година напочва строителстовото на к.к. Слънчев бряг?',
        options: ['1965', '1970', '1958', '1962'],
        answer: '1958'
      },
      {
        question: 'Кой днешен софийски парк е носил името "Парк на дружбата"?',
        options: ['Западен парк', 'Северен парк', 'Борисовата градина', 'Врана'],
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
        options: ['Международният младежки център', 'Морски младежки център', 'Международен морски център', 'Междунатоден музикален център'],
        answer: 'Цариградско шосе'
      },
      {
        question: 'В кой курорт хотелите са носили имена Дoбpoтицa, Бaлиĸ, Kapвyнa, Дopocтop?',
        options: ['Златни пясъци', 'Слънчев бряг', 'Алебна', 'Дюни'],
        answer: 'Алебна'
      },
      {
        question: 'Кой планински курорт между 1950 и 1989 г. в носил името „Васил Коларов“?',
        options: ['Банско', 'Боровец', 'Чепеларе', 'Пампорово'],
        answer: 'Пампорово'
      },
      {
        question: 'През коя година изгаря сградата на софийския цирк?',
        options: ['1978', '1989', '1980', '1983'],
        answer: '1983'
      },
      {
        question: '"Москва", "Благоев", "Македония", "Аура", "Левски", "Изток", "Сердика" са били:',
        options: ['Площади', 'Кина', 'Хотели', 'Булеварди'],
        answer: 'Кина'
      },
      {
        question: 'Кой хотел се е приемал за емблема на курорта Албена?',
        options: ['Гергана', 'Нона', 'Добруджа', 'Боряна'],
        answer: 'Добруджа'
      },
      {
        question: 'Какво име е носила Варна през периода 1949 и 1956 г.?',
        options: ['Сталин', 'Сталинград', 'Ленин', 'Ленинград'],
        answer: 'Сталин'
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
