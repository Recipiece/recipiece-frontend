import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recipiece-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'shell';

  constructor(
    private router: Router,
  ) {

  }

  ngAfterViewInit(): void {
    this.router.navigateByUrl('landing');
  }
}
