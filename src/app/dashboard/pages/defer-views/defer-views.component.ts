import { Component } from '@angular/core';
import { HeavyLoadersLowComponent } from '../../../shared/heavy-loaders/heavy-loaders-low.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersLowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
