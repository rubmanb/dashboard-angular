import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"/>

    <pre>{{frameworksAsSignal() | json}}</pre>
    <pre>{{frameworksAsProperty | json}}</pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworksAsSignal().name}`
  );

  public frameworksAsSignal = signal({
    name: 'Angular',
    releaseDate: 2020
  });

  public frameworksAsProperty = {
    name: 'Angular',
    releaseDate: 2020
  };


  constructor(){
    setTimeout( () => {
      // this.frameworksAsProperty.name = 'React'
      this.frameworksAsSignal.update( value => { value.name = 'React'; return {...value}  });
    },3000);
  }
}
