import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [QuizComponent, QuizResultComponent, QuestionComponent],
  imports: [
    CommonModule
  ]
})
export class QuizModule { }
