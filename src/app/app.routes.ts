import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './services/auth.service';
import { DemoComponent } from './componentes/demo/demo.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path:'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'demo', component: DemoComponent}
];

// bootstrapApplication(DestaquesComponent, {
//   providers: [provideRouter(routes)],
// });

