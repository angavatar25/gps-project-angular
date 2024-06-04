import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GpsSummaryComponent } from '../gps-summary/gps-summary.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginPageComponent,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'gps-summary', component: GpsSummaryComponent },
        ])
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a login button', () => {
    const loginButton = fixture.nativeElement.querySelector('#loginButton')
    expect(loginButton).toBeTruthy();
  })

  it('should redirect to gps summary page', () => {
    const loginFormUser: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelectorAll('input')[0];
    const loginFormPassword: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#loginForm').querySelectorAll('input')[1];

    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.nativeElement.querySelector('#loginButton')

    loginFormUser.value = 'moovd_test'
    loginFormPassword.value = 'moovd_password'

    loginFormUser.dispatchEvent(new Event('input'))
    loginFormPassword.dispatchEvent(new Event('input'))

    const isLoginFormValid = component.myForm.valid

    button.click();

    fixture.whenStable().then(() => {
      expect(isLoginFormValid).toBeTruthy()
      expect(navigateSpy).toHaveBeenCalledWith(['/gps-summary'])
    })
  })
});
