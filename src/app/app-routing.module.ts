import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxTutorialComponent } from './flexbox-tutorial/flexbox-tutorial.component';


const routes: Routes = [
  { path: '**', component: FlexboxTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
