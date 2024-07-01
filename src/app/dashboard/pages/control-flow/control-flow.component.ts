import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {


  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Quik', 'React']);
  public frameworks2 = signal([]);

  toogleContent() {
    this.showContent.update(value => !value);
  }

}
