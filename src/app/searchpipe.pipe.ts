import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'searchpipe',
})
export class SearchpipePipe implements PipeTransform {
  transform(Users: any[], searchValue: any): any[] {
    if (!Users || !searchValue) {
      return Users;
    }
    return Users.filter(
      (user) =>
        user.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.contact
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.role.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
