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
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PaymentEffects, reducers, UserEffects } from './Store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, PaymentEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
