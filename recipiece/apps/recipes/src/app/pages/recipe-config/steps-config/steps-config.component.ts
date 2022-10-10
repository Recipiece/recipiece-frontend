import { Component, OnInit } from '@angular/core';
import { ConfigListComponent } from '../config-list-component';

export type StepTimeUnit = 's' | 'm' | 'h' | 'd';

@Component({
  selector: 'recipiece-steps-config',
  templateUrl: './steps-config.component.html',
  styleUrls: ['./steps-config.component.scss'],
})
export class StepsConfigComponent extends ConfigListComponent implements OnInit {
  ngOnInit(): void {
    
  }

  public addStep(sectionIndex: number) {
    this.recipe.sections[sectionIndex].steps.push({
      ordinal: this.recipe.sections[sectionIndex].steps.length,
      content: '',
      time_ms: undefined,
    });
  }

  public getTimeDisplay(section: number, step: number): { time: number; unit: StepTimeUnit } | undefined {
    const recipeStep = this.recipe.sections[section].steps[step];
    if(recipeStep.time_ms) {
      const factors = [1000, 60, 60, 24];
      const timeUnits: StepTimeUnit[] = ['s', 'm', 'h', 'd'];

      let time = recipeStep.time_ms;
      let unit;
      let lidx = 0;

      do {
        const newTime = time / factors[lidx];
        unit = timeUnits[lidx];
        if(newTime < 1) {
          break;
        }
        time = newTime;
        lidx++;
      } while(time > 1);

      return {time, unit};
    }
    return undefined;
  }

  public setTimeDisplay(section: number, step: number, time: number, unit: string) {
    const factors = [1000, 1000 * 60, 1000 * 60 * 60, 1000* 60 * 60 * 24];
    const timeUnits: StepTimeUnit[] = ['s', 'm', 'h', 'd'];

    const idx = timeUnits.indexOf(unit as StepTimeUnit);
    const recipeStep = this.recipe.sections[section].steps[step];
    recipeStep.time_ms = time * factors[idx];
  }
}
