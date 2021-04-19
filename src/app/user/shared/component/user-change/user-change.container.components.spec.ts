import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {UserChangeContainerComponent} from './user-change.container.component';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store/state/app.state';

describe('UserChangeContainerComponent', () => {
  let router: Router;
  let store: Store<AppState>;
  let fixture: ComponentFixture<UserChangeContainerComponent>;
  let component: UserChangeContainerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [UserChangeContainerComponent],
    }).compileComponents().then(() => {
      router = TestBed.inject(Router);
      store = TestBed.inject(Store);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChangeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
