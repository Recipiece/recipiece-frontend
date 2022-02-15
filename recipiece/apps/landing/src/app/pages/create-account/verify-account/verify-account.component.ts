import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { StagedUsersService } from '@recipiece/api';
import { take } from 'rxjs';

@Component({
  selector: 'recipiece-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent implements OnInit {
  public token: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stagedUserService: StagedUsersService,
    private toaster: HotToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe({
      next: (params: Params) => {
        this.token = params['token'] || '';
      },
    });
  }

  public verifyAccount() {
    this.stagedUserService
      .confirmStagedUser(this.token)
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.toaster.success('Account Verified!');
          this.router.navigate(['landing', 'login']);
        },
        error: () => {
          this.toaster.error('Could not verify account');
        },
      });
  }
}
