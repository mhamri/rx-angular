import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './rx-swicht-poc.routes';
import { VisualizerModule } from '../../../../shared/debug-helper/visualizer';
import { LetModule, PushModule, UnpatchEventsModule } from '@rx-angular/template';
import { MatButtonModule } from '@angular/material/button';
import { RxSwitchPocComponent } from './rx-switch-poc.component';
import { DirtyChecksModule } from '../../../../shared/debug-helper/dirty-checks';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { RxIfModule, RxSwichModule } from '../../../../rx-angular-pocs/';
import { ValueProvidersModule } from '../../../../shared/debug-helper/value-provider';

@NgModule({
  declarations: [RxSwitchPocComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    VisualizerModule,
    UnpatchEventsModule,
    MatButtonModule,
    DirtyChecksModule,
    PushModule,
    LetModule,
    MatFormFieldModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatInputModule,
    RxIfModule,
    RxSwichModule,
    ValueProvidersModule,
  ],
})
export class RxSwichPocModule {}
