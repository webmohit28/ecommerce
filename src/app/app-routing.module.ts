import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryComponent } from './category/category.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';
import { TeamsComponent } from './teams/teams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/:id', component: CategoryDetailComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
