import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(statusId?: number): string {
    if (statusId) {
      if (statusId == 1) {
        return "orange";
      } else if (statusId == 2) {
        return "green";
      } else if (statusId == 3) {
        return "red";
      }
      else {
        return "";
      }
    }
    else {
      return ""
    }
  }

}
