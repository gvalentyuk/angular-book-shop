import { Injectable } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class MatchPasswords implements Validator {
    validate(formGroup: FormGroup):any{
        const { password, confirmPassword } = formGroup.value;

        if(password === confirmPassword){
            return null;
        } else {
            return {passwordsDontMatch: true}
        }
    }
}
