import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService, UserService } from '@recipiece/api';
import { filter, take } from 'rxjs';

@Component({
  selector: 'recipiece-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private userService: UserService
  ) {}

  public get showDrawer(): boolean {
    return this.sessionService.hasSession;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        if (e.url === '/') {
          if (this.sessionService.hasSession) {
            this.router.navigateByUrl('dashboard');
          } else {
            this.router.navigateByUrl('landing');
          }
        }
      });
  }

  public logout() {
    this.userService
      .logoutUser()
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.router.navigateByUrl('landing');
        },
      });
  }
}
