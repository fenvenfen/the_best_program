import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { LibraryComponent } from "./library/library.component";

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'library', component: LibraryComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {

}