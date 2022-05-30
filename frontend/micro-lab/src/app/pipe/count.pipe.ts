import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count',
})
export class CountPipe<T> implements PipeTransform {
  transform(value: T[] | null): T[] | null {
    if (!Array.isArray(value)) {
      return value;
    }
    const hossza: any = value.length;
    return hossza;
  }
}
