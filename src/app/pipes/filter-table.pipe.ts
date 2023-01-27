import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interface/employee';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
  transform(list: Employee[], filter: Employee) {
    const keys = Object.keys(filter).filter((key) => filter[key]);
    console.log(keys);

    const filterUser = (user) =>
      keys.every((key) => onMatch(user[key]).includes(onMatch(filter[key])));
    function onMatch(value) {
      return value.toString().toLowerCase();
    }

    return keys.length ? list.filter(filterUser) : list;

    // const resault = list.filter((item: Employee) => {
    //   if (
    //     (filter.name && item.name.includes(filter.name)) ||
    //     filter.employment == item.employment ||
    //     filter.department == item.department ||
    //     filter.salary == item.salary ||
    //     filter.experience == item.experience
    //   ) {
    //     return true;
    //   }
    //   return false;
    // });
    // return !resault.length ? list : resault;
  }
}
