import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateFormControl } from '../date-form-control';
import { MatchPasswords } from '../validators/match-passwords';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      dateOfBirthday: new DateFormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private matchPassword: MatchPasswords
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.authService.signup(this.formGroup.getRawValue()).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
