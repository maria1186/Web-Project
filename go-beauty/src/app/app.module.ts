import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ForProfessionalsComponent } from './for-professionals/for-professionals.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { BeautyGroupsComponent } from './beauty-groups/beauty-groups.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MassageComponent } from './massage/massage.component';
import { ManicureComponent } from './manicure/manicure.component';
import { HairDryerComponent } from './hair-dryer/hair-dryer.component';
import { MakeupComponent } from './makeup/makeup.component';
import { HomeComponent } from './home/home.component';
import { CosmeticsServicesComponent } from './cosmetics-services/cosmetics-services.component';


@NgModule({
  declarations: [
    AppComponent,
    ForProfessionalsComponent,
    ForCompaniesComponent,
    BeautyGroupsComponent,
    FooterComponent,
    HeaderComponent,
    MassageComponent,
    ManicureComponent,
    HairDryerComponent,
    MakeupComponent,
    HomeComponent,
    CosmeticsServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
