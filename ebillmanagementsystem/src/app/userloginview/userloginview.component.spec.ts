import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginviewComponent } from './userloginview.component';

describe('UserloginviewComponent', () => {
  let component: UserloginviewComponent;
  let fixture: ComponentFixture<UserloginviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserloginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
