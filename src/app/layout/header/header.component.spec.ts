import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let _snackBar: MatSnackBar;
  let _router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderModule
      ],
      providers: [
        {
          provide: MatSnackBar,
          useValue: {
            open: jest.fn()
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn()
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    _snackBar = TestBed.inject(MatSnackBar);
    _router = TestBed.inject(Router);
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('#logout',()=>{
    it('should display logout successfully toast message and redirect to home page after 3s', fakeAsync(() => {
      const mockDuration = 3000;
      const snackBarOpenSpy = jest.spyOn(_snackBar, 'open');
      const routerNavigateSpy = jest.spyOn(_router, 'navigate');
      component.logout();

      tick(mockDuration);
      expect(snackBarOpenSpy).toHaveBeenCalledWith('Logout Successfully. Will automatically Redirect to home page', 'Ok', { duration: mockDuration });
      expect(routerNavigateSpy).toHaveBeenCalledWith(['home']);
    }));
  });
});