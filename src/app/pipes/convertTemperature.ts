import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertTemp'
})
export class ConvertTemperaturePipe implements PipeTransform {

    transform(value: number, unit: string): string {
        let temp = 0;
        if (unit === 'c') {
            temp = (value - 32) / 1.8;
        } else if (unit === 'f') {
            temp = (value * 1.8) + 32;
        }

        return temp.toFixed(0);
    }

}