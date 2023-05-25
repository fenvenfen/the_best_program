import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
    { path: '', redirectTo: '/library', pathMatch: 'full' },
    { path: 'library', component: LibraryComponent},
    { path: 'library/books/:id', component: DetailBookComponent, data: { isBooskOrShelves: 'Books' } },
    { path: 'library/shelves/:id', component: DetailBookComponent, data: { isBooskOrShelves: 'Shelves' } },
    // { path: '**', component: "<p>Page not founded</p>" },
];


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
