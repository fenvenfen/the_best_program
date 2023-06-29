import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdultGuardService } from './servises/adult.guard';
import { AuthGuardService } from './servises/auth.guard ';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';
import { PageNotFounedComponent } from './components/page-not-founed/page-not-founed.component';
import { ForbiddenForChildrenComponent } from './components/forbidden-for-children/forbidden-for-children.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: AuthFormComponent },
    { path: 'admin', component: AdminPageComponent }, 
    { 
        path: 'library', 
        children: [
            {
                path: '', 
                component: LibraryComponent,
            },
            { 
                path: 'books/:id', 
                canActivate: [AdultGuardService],
                component: DetailBookComponent, 
                data: { isBooskOrShelves: 'Books' } 
            },
            { 
                path: 'shelves/:id', 
                canActivate: [AdultGuardService], 
                component: DetailBookComponent, 
                data: { isBooskOrShelves: 'Shelves' } 
            },
            { path: 'forbidden', component: ForbiddenForChildrenComponent },
        ]
    },
    { path: '**', component: PageNotFounedComponent },
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    providers: [AdultGuardService],

})
export class AppRoutingModule { }
