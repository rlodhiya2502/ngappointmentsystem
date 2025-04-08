import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { LearnersComponent } from './pages/learners/learners.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { MoreComponent } from './pages/more/more.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'learners', component: LearnersComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'finance', component: FinanceComponent },
    { path: 'more', component: MoreComponent },
];
