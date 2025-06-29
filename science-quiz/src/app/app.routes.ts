import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Question } from './question/question';
import { Results } from './results/results';

export const routes: Routes = [
    {
        path: '',
        component: Home
        
    },
    {
        path: 'question/:id', 
        component: Question
    },
    {
        path: 'results', 
        component: Results
    }
];
