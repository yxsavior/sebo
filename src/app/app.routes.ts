import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { DemoComponent } from './componentes/demo/demo.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'graficos', component: GraficosComponent, canActivate: [AuthGuard] },
    { path: 'demo', component: DemoComponent},
];
