import { NgModule } from '@angular/core';
import { InputControlComponent } from './input-control/input-control';
import { StatusComponent } from './status/status';
@NgModule({
	declarations: [
    InputControlComponent,
    StatusComponent],
	imports: [],
	exports: [
    InputControlComponent,
    StatusComponent]
})
export class ComponentsModule {}
