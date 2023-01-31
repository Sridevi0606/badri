import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Mycomponents/main/main.component';
import { HeaderComponent } from './Mycomponents/header/header.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { CareersComponent } from './Mycomponents/careers/careers.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { ServicessComponent } from './Mycomponents/servicess/servicess.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {SwiperModule} from 'swiper/angular';
import  {MatButtonModule} from '@angular/material/button';
import { BadridetailsComponent } from './Mycomponents/badridetails/badridetails.component';
import { CadetailsComponent } from './Mycomponents/cadetails/cadetails.component';
import { IndividualsComponent } from './Mycomponents/individuals/individuals.component';
import { BusinessComponent } from './Mycomponents/business/business.component';
import { InternsComponent } from './Mycomponents/interns/interns.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    ServicessComponent,
    BadridetailsComponent,
    CadetailsComponent,
    IndividualsComponent,
    BusinessComponent,
    InternsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    SwiperModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
