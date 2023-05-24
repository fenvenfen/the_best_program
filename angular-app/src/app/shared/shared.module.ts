import { NgModule } from "@angular/core";
import { FilterPipe } from "./pipes/filter.pipe";
import { FilterByTagsPipe } from "./pipes/filter-by-tags.pipe";
import { ChangeSecondWordToStarsPipe } from './pipes/change-second-word-to-stars.pipe';
import { BorderColorDirective } from './directives/border-color.directive';
import { InputColorDirective } from './directives/input-color.directive';
import { ImageSizeDirective } from './directives/image-size.directive';

@NgModule({
    declarations: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe,
        BorderColorDirective,
        InputColorDirective,
        ImageSizeDirective,
    ],
    exports: [
        FilterPipe,
        FilterByTagsPipe,
        ChangeSecondWordToStarsPipe,
        BorderColorDirective,
        InputColorDirective,
        ImageSizeDirective,
    ]
})
export class SharedModule {

}