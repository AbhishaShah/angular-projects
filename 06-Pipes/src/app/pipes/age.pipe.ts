import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: Date, capitalize?: boolean, withEmojis?: boolean): string {
    const currentYear = new Date().getFullYear();

    const dobYear = value.getFullYear();
    const age = currentYear - dobYear;

    let text = ' years old';

    if (withEmojis) {
      text += ' 🍰🥳';
    }

    if (capitalize) {
      text = text.toUpperCase();
    }

    return age + text;
  }
}
