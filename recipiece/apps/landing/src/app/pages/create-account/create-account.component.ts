import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { StagedUsersService } from '@recipiece/api';
import { take } from 'rxjs';

@Component({
  selector: 'recipiece-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public loading: boolean = false;

  public valid(): boolean {
    return (
      this.password.length > 0 &&
      this.email.length > 0 &&
      this.confirmPassword.length > 0
    );
  }

  constructor(
    private stagedUserService: StagedUsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: HotToastService
  ) {}

  public stageUser() {
    if (this.password !== this.confirmPassword) {
      this.toaster.error('Passwords must match');
    } else if (this.password.length < 6) {
      this.toaster.error('Passwords must be at least 6 characters long');
    } else {
      this.stagedUserService
        .stageUser(this.email, this.password)
        .pipe(take(1))
        .subscribe({
          complete: () => {
            this.router.navigate(['./verify'], {relativeTo: this.activatedRoute});
          },
          error: () => {
            this.toaster.error('Username or email is already taken');
          },
        });
    }
  }
}
