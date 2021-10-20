import { Component, Pipe } from '@angular/core';

@Pipe({
  name: "phone"
})

export class PhonePipe {
  transform(rawNum:string) {
    const area = rawNum.slice(0,3);
    const mid = rawNum.slice(3,6);
    const last = rawNum.slice(6);

    return `${area} ${mid} ${last}`
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'CRUD';
}
