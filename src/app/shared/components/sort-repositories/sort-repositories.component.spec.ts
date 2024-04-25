import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SortRepositoriesComponent } from './sort-repositories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectChange } from '@angular/material/select';
import { SORT_OPTION_UPDATED } from '../../../core/constants/sort-options.constant';

describe('SortRepositoriesComponent', () => {
  let component: SortRepositoriesComponent;
  let fixture: ComponentFixture<SortRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SortRepositoriesComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onSelectionChange method and emit selectionChange event', () => {
    spyOn(component.selectionChange, 'emit');
    component.onSelectionChange({
        value: SORT_OPTION_UPDATED
    } as MatSelectChange);
    expect(component.selectionChange.emit).toHaveBeenCalledWith(SORT_OPTION_UPDATED);
  });
});
