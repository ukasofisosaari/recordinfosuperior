import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
{ path: '/', redirectTo: 'main'},
{ path : '/main', component: MainComponent},
{ path : '/404', component: NotFoundComponent},
{ path : '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
