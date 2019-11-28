import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {
  @Input('married') isMarried : boolean = false;
  @Input('age') myAge : number;
  public txtFullName : string;
  @Output('txtFullName') onHandleFullName = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  //truyền dữ liệu giữa component con cho component cha
  onSubmitForm(){
    this.onHandleFullName.emit(this.txtFullName);

  }

}
