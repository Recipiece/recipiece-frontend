import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from '@recipiece/api';
import { catchError, take, tap } from 'rxjs';

@Component({
  selector: 'recipiece-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public remember: boolean = false;
  public loading: boolean = false;

  public get valid(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private toaster: HotToastService
  ) {}

  public loginUser() {
    this.loading = true;
    this.userService
      .loginUser(this.username, this.password, this.remember)
      .pipe(
        take(1),
      )
      .subscribe({
        complete: () => {
          this.loading = false;
          this.router.navigate(['/dashboard']);
        },
        error: () => {
          this.loading = false;
          this.toaster.error('Invalid Username or Password');
        },
      });
  }

  public showError(message: string) {
    this.toaster.error(message);
  }
}
