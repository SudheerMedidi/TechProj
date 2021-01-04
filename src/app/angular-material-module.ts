import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule} from "@angular/core";
import {  MatNativeDateModule} from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
    imports: [
        PdfViewerModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        PdfViewerModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatExpansionModule,
        MatFormFieldModule,
    ],
    providers: [     
    ]
})


export class AngularMaterial { }
