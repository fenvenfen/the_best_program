import { NgModule } from "@angular/core";
import { FilterPipe } from "./pipes/filter.pipe";
import { FilterByTagsPipe } from "./pipes/filter-by-tags.pipe";
import { ChangeSecondWordToStarsPipe } from './pipes/change-second-word-to-stars.pipe';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
    declarations: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe,
        BorderColorDirective
    ],
    exports: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe,
        BorderColorDirective
    ]
})
export class SharedModule {

}