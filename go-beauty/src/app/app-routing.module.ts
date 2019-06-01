import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForProfessionalsComponent } from './for-professionals/for-professionals.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { BeautyGroupsComponent } from './beauty-groups/beauty-groups.component';
import { MassageComponent } from './massage/massage.component';
import { ManicureComponent } from './manicure/manicure.component';
import { HairDryerComponent } from './hair-dryer/hair-dryer.component';
import { MakeupComponent } from './makeup/makeup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'ForProfessionals', component: ForProfessionalsComponent },
  { path: 'ForCompanies', component: ForCompaniesComponent },
  { path: 'ForBeautyGroups', component: BeautyGroupsComponent },
  { path: 'Massage', component: MassageComponent },
  { path: 'Manicure', component: ManicureComponent },
  { path: 'Hair-dryer', component: HairDryerComponent },
  { path: 'Makeup', component: MakeupComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
