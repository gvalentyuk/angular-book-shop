import {FormControl} from '@angular/forms';

export class DateFormControl extends FormControl {
    setValue(value: string, options: any) {
        if (value.match(/[^0-9|\-]/gi)) {
          super.setValue(this.value, {...options, emitModelToViewChange: true});
          return;
        }
    
        if (value.length > 10) {
          super.setValue(this.value, {...options, emitModelToViewChange: true});
          return;
        }
    
        if(value.length === 4 && this.value.length === 5 || value.length === 7 && this.value.length===8){
          super.setValue(value, {...options, emitModelToViewChange: true});
          return;
        }
    
        if (value.length === 4 || value.length===7) {
          super.setValue(value + '-', {...options, emitModelToViewChange: true});
          return;
        }
        super.setValue(value, {...options, emitModelToViewChange: true});
      }
}
