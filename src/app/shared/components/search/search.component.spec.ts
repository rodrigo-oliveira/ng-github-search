import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SearchComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute onSubmit method and emit submitSearch event if form is valid', () => {
    const searchValue = 'a';

    spyOn(component.submitSearch, 'emit');
    component.searchForm.controls.user.setValue(searchValue);
    component.onSubmit();
    expect(component.submitSearch.emit).toHaveBeenCalledWith(searchValue);
  });
});
