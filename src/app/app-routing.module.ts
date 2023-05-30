import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';
import { PageNotFounedComponent } from './components/page-not-founed/page-not-founed.component';
import { ForbiddenForChildrenComponent } from './components/forbidden-for-children/forbidden-for-children.component';
import { AdultGuardService } from './servises/adult.guard';

const routes: Routes = [
    { path: '', redirectTo: '/library', pathMatch: 'full' },
    { path: 'library', component: LibraryComponent},
    { 
        path: 'library/books/:id', 
        canActivate: [AdultGuardService],
        component: DetailBookComponent, 
        data: { isBooskOrShelves: 'Books' } 
    },
    { 
        path: 'library/shelves/:id', 
        canActivate: [AdultGuardService], 
        component: DetailBookComponent, 
        data: { isBooskOrShelves: 'Shelves' } 
    },
    { path: 'library/forbidden', component: ForbiddenForChildrenComponent },
    { path: '**', component: PageNotFounedComponent },
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    providers: [AdultGuardService],

})
export class AppRoutingModule { }
