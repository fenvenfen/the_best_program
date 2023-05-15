import { NgModule } from "@angular/core";
import { FilterPipe } from "./pipes/filter.pipe";
import { FilterByTagsPipe } from "./pipes/filter-by-tags.pipe";

@NgModule({
    declarations: [
        FilterPipe,
        FilterByTagsPipe
    ],
    exports: [
        FilterPipe,
        FilterByTagsPipe
    ]
})
export class SharedModule {

}