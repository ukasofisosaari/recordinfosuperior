import { MainComponent } from './main/main.component';
import { MainTableViewComponent } from './main-table-view/main-table-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
{ path: '', redirectTo: 'main', pathMatch: 'full'},
{ path : 'main', component: MainComponent},
{ path : 'mainTable', component: MainTableViewComponent},
{ path : '404', component: NotFoundComponent},
{ path : '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
