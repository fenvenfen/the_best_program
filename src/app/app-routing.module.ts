import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
    { path: '', redirectTo: '/library', pathMatch: 'full' },
    { path: 'library', component: LibraryComponent},
    { path: 'library/books', component: DetailBookComponent, data: { title: 'Book' } },
    { path: 'library/shelfs', component: DetailBookComponent, data: { title: 'Shelf' } },
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
