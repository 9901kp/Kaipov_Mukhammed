import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  displayUsers(users: any[]){
    console.log('Array is displayed', users);
  }
}
