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
        options: ['Несебър', 'Созопол', 'Албена', 'Слънчев бряг'],
        answer: 'Слънчев бряг'
      },
      {
        question: 'Who is PM of India?',
        options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
        answer: 'Mordi'
      }
    ];
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