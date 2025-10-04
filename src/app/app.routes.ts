import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { DestaquesComponent } from './componentes/destaques/destaques.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    // {
    //     path:'login', component: LoginComponent
    // },
    { path:'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path:'dashboard', component: DashboardComponent }
];

// bootstrapApplication(DestaquesComponent, {
//   providers: [provideRouter(routes)],
// });

