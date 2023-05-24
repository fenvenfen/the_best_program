import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LibraryComponent } from "./library/library.component";
import { DetailBookComponent } from "./detail-book/detail-book.component";
import { UnavailableComponent } from "./unavailable/unavailable.component";
import { IsAdultGuard } from "./shared/isAdult.guard";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'library/shelves/:id', component: DetailBookComponent, canActivate: [IsAdultGuard]},
    {path: 'library/books/:id', component: DetailBookComponent, canActivate: [IsAdultGuard]},
    {path: 'library/unavailable', component: UnavailableComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}