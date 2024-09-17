import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ViewAllComponent } from './Component/view-all/view-all.component';
import { CreateComponent } from './Component/create/create.component';
import { EditComponent } from './Component/edit/edit.component';

export const routes: Routes = [
    { path : '' , component : HomeComponent},
    { path : 'view' , component : ViewAllComponent},
    { path : 'view/create' , component : CreateComponent},
    { path : 'view/edit/:id' , component : EditComponent},
];
