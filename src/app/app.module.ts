import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { TermsOfServiceComponent } from './Components/terms-of-service/terms-of-service.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { DisplayBlogComponent } from './Components/display-blog/display-blog.component';
import { ReadyKitComponent } from './Components/ready-kit/ready-kit.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TermsOfServiceComponent,
    AboutComponent,
    BlogComponent,
    DisplayBlogComponent,
    ReadyKitComponent,
    CheckoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
