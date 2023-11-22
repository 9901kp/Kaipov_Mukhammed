import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DisplayService } from '../display.service';
import { ParentUser } from '../parent-user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() users: any[] = [];
  //@Output() emitUsers: EventEmitter<any> = new EventEmitter<any[]>();
  //dataPassed = 'Array from parent component';

  // childUser: any[] = [
  //   {id: 1, firstName: 'Child', lastName: 'User', age: 10},
  //   {id: 2, firstName: 'Kid', lastName: 'Test', age: 15},
  //   {id: 3, firstName: 'Junior', lastName: 'Dev', age: 12},
  // ];

  // passDataToParent(){
  //   this.emitUsers.emit(this.childUers);
  // }

  constructor(private displayService: DisplayService) { }

  passDataToParent(){
    this.displayService.displayUsers(this.users);
  }
}