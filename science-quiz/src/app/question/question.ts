import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question-service';
import { CommonModule } from '@angular/common'; // IMPORTANTE

@Component({
  selector: 'app-question',
  imports: [CommonModule], // IMPORTANTE
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
  questionIndex: number = 0;
  question: any;
  selectedOption: string | null = null;
  showFeedback = false;
  correct = false;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.questionIndex = +params['id'];
      this.question = this.questionService.getQuestion(this.questionIndex);

      //resetear el estado de la pregunta
      this.selectedOption = null;
      this.showFeedback = false;
      this.correct = false;
    });
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.correct = this.selectedOption === this.question.correctAnswer;
    this.showFeedback = true;
  }

  nextQuestion() {
    const nextIndex = this.questionIndex + 1;
    if (nextIndex < this.questionService.getTotalQuestions()) {
      this.router.navigate(['/question', nextIndex]);
    } else {
      this.router.navigate(['/results']);
    }
  }
}
