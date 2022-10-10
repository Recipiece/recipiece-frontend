import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookbooksService, ICookbook } from '@recipiece/api';
import { ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'recipiece-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit, OnDestroy {
  public loadingCookbooks: boolean;
  public $cookbooks: Subject<ICookbook[]>;
  @Output() logoutRequested: EventEmitter<void>;

  private loadBooksSubscription: Subscription;

  constructor(
    private coobookService: CookbooksService,
    private router: Router,
  ) { 
    this.logoutRequested = new EventEmitter();
    this.$cookbooks = new ReplaySubject();
  }

  ngOnInit(): void {
    this.loadingCookbooks = true;
    this.loadBooksSubscription = this.coobookService.list()
      .subscribe({
        next: (results) => {
          this.$cookbooks.next(results.data);
          this.loadingCookbooks = false;
        },
        error: (err) => {
          this.loadingCookbooks = false;
        }
      })
  }

  ngOnDestroy(): void {
    this.loadBooksSubscription?.unsubscribe();
  }

  public logout() {
    this.logoutRequested.emit();
  }

  public navigateToCookbook(bookId: string) {
    this.router.navigate(['dashboard', 'cookbook', bookId]);
  }

}
