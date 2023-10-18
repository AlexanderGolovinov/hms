import {Component, OnDestroy, OnInit} from '@angular/core';
import {Sector} from "../../models/Sector";
import {Observable, Subscription, take, takeUntil} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SectorService} from "../../data-access/services/sector.service";
import {UserState} from "../../data-access/+state/user.reducer";
import {Store} from "@ngrx/store";
import {User} from "../../models/User";
import * as UserActions from '../../data-access/+state/user.actions';
import {selectCurrentUser} from "../../data-access/+state/user.selectors";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit, OnDestroy {
  sectors$: Observable<Sector[]>;
  userForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(
    private sectorService: SectorService,
    private store: Store<UserState>
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getSectors();
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      let user = this.toUser(this.userForm);
      const sub = this.store.select(selectCurrentUser).subscribe(currentUser => {
        if (currentUser) {
          user = { ...user, id: currentUser.id};
        }
      });
      this.subscriptions.push(sub);

      if (user.id) {
        this.store.dispatch(UserActions.updateUser({ user }));
      } else {
        this.store.dispatch(UserActions.saveUser({ user }));
      }
    }
  }

  compareSectors(s1: any, s2: any): boolean {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private initializeForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      sectors: new FormControl([], Validators.required),
      agreeToTerms: new FormControl(false, Validators.requiredTrue)
    });
  }

  private toUser(form: FormGroup): User {
    return {
      id: undefined,
      name: form.value.name,
      sectors: form.value.sectors,
      agreeToTerms: form.value.agreeToTerms
    };
  }

  private getSectors(): void {
    this.sectors$ = this.sectorService.getAllSectors();
  }
}
