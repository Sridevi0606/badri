import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Mycomponents/about/about.component';
import { BadridetailsComponent } from './Mycomponents/badridetails/badridetails.component';
import { BusinessComponent } from './Mycomponents/business/business.component';
import { CadetailsComponent } from './Mycomponents/cadetails/cadetails.component';
import { CareersComponent } from './Mycomponents/careers/careers.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { IndividualsComponent } from './Mycomponents/individuals/individuals.component';
import { InternsComponent } from './Mycomponents/interns/interns.component';
import { MainComponent } from './Mycomponents/main/main.component';
import { ServicessComponent } from './Mycomponents/servicess/servicess.component';

const routes: Routes = [
  {path:"" , component:MainComponent},
  {path:"about" , component:AboutComponent },
  {path:"contact" , component:ContactComponent},
  {path:"service" , component:ServicessComponent},
  {path:"career" , component:CareersComponent},
  {path:"DetailsOfCA" , component:BadridetailsComponent},
  {path:"about/MoreAboutCA" , component:CadetailsComponent},
  {path:"service/individuals", component:IndividualsComponent},
  {path:"service/business", component:BusinessComponent},
  {path:"individuals", component:IndividualsComponent},
  {path:"business", component:BusinessComponent},
  {path:"career/interns",component:InternsComponent},
  {path:"career/interns/contact" , component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
