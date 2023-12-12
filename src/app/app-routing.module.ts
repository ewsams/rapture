import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TermsOfServiceComponent } from './Components/terms-of-service/terms-of-service.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DisplayBlogComponent } from './Components/display-blog/display-blog.component';
import { ReadyKitComponent } from './Components/ready-kit/ready-kit.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'terms-of-service', component: TermsOfServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  {
    path: 'blog/:id',
    component: DisplayBlogComponent,
  },
  {
    path: 'ready-kit',
    component: ReadyKitComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
