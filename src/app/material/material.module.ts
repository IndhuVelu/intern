import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatTabsModule } from '@angular/material/tabs'
import {MatDatepickerModule} from '@angular/material/datepicker';

const Material = [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatTabsModule,MatSelectModule,MatDatepickerModule]  

@NgModule({
 
  imports: [Material],
  exports:[Material]

})
export class MaterialModule { }
