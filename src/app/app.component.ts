import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    { firstName: 'Muhammed', lastName: 'Kaipov', age: 20 },
    { firstName: 'Nurhamid', lastName: 'Nazarov', age: 18 },
    { firstName: 'Bob', lastName: 'Smith', age: 30 },
    { firstName: 'Ali', lastName: 'Johnson', age: 22 },
    { firstName: 'Charlie', lastName: 'Brown', age: 19 }
  ];

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      emails: ['', [Validators.required, Validators.minLength(8), Validators.email]],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.users.push(newUser);
      this.userForm.reset();
    } else {
      console.error('Form validation failed');
      Object.keys(this.userForm.controls).forEach(key => {
        const control = this.userForm.get(key);

        if (control?.invalid) {
          console.error(`- ${key}:`);

          Object.keys(control.errors || {}).forEach(errorKey => {
            console.error(`  - ${this.getErrorMessage(key, errorKey)}`);
          });
        }
      });
    }
  }

  getErrorMessage(controlName: string, errorKey: string): string {
    const errorMessages = {
      'required': `${controlName} is required.`,
      'minlength': `${controlName} must be at least 3 characters.`,
      'email': 'Invalid email address.',
      'phoneNumber': 'Phone number must be at least 9 characters.',
    };
  
    // Use type assertion here
    return (errorMessages as any)[errorKey] || 'Invalid input.';
  }
  
  }

