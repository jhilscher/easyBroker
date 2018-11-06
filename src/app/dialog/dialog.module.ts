import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuestionDialogComponent],
  exports: [QuestionDialogComponent]
})
export class DialogModule { }
