import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionDialogComponent} from './question-dialog/question-dialog.component';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [QuestionDialogComponent],
  exports: [QuestionDialogComponent]
})
export class DialogModule {
}
