import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfflineComponent } from './offline.component';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('OfflineComponent', () => {
  let component: OfflineComponent;
  let fixture: ComponentFixture<OfflineComponent>;
  let matSnackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfflineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfflineComponent);
    matSnackBar = TestBed.inject(MatSnackBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute setOffline method and call openSnackBar method', () => {
    spyOn(component, 'openSnackBar');
    component.setOffline();
    expect(component.openSnackBar).toHaveBeenCalledWith('You are offline');
  });

  it('should execute setOnline method and call openSnackBar method', () => {
    spyOn(component, 'openSnackBar');
    component.setOnline();
    expect(component.openSnackBar).toHaveBeenCalledWith('Your connection is back');
  });

  it('should execute openSnackBar method and call open method of MatSnackBar', () => {
    const message = 'Message';

    spyOn(matSnackBar, 'open');
    component.openSnackBar(message);
    expect(matSnackBar.open).toHaveBeenCalledWith(message, 'Ok', { verticalPosition: 'top' });
  });
});
