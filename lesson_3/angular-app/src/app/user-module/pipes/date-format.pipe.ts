import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, format: any): any {
    // 1982-09-20 10:56:23 - приходит
    // DD-MM-YYYY HH:mm - надо
    const date = new Date(value);
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();

    const monthArr: Array<string> = [
      'January', 'February',
      'March', 'April', 'May',
      'June', 'July', 'August',
      'September', 'Oktober', 'November',
      'Desember'
    ];

    let resultFormat: string;
    if (format === 'short') {
      resultFormat = day + '/' + month + '/' + year;
    } else if (format === 'medium') {
      resultFormat = day + ' ' + monthArr[month] + ' ' + year;
    } else {
      resultFormat = day + ' ' + monthArr[month] + ' ' + year + ' ' + hour + ':' + minute;
    }

    return resultFormat;
  }

}
