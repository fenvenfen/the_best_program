import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
    { path: '', redirectTo: '/library', pathMatch: 'full' },
    { path: 'library', component: LibraryComponent},
    { path: 'library/books/:id', component: DetailBookComponent, data: { isBooskOrShelves: 'books' } },
    { path: 'library/shelves/:id', component: DetailBookComponent, data: { isBooskOrShelves: 'shelves' } },
    // { path: '**', component: "<p>Page not founded</p>" },
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
