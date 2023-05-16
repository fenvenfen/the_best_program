import { NgModule } from "@angular/core";
import { FilterPipe } from "./pipes/filter.pipe";
import { FilterByTagsPipe } from "./pipes/filter-by-tags.pipe";
import { ChangeSecondWordToStarsPipe } from './pipes/change-second-word-to-stars.pipe';

@NgModule({
    declarations: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe
    ],
    exports: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe
    ]
})
export class SharedModule {

}