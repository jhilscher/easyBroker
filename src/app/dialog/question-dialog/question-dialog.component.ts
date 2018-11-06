import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.css']
})
export class QuestionDialogComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  logoRef: string;

  constructor() { }

  ngOnInit() {
  }

}
