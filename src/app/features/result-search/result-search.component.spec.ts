import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultSearchComponent } from './result-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultSearchFacade } from './result-search.facade';
import { HttpClientModule } from '@angular/common/http';

describe('ResultSearchComponent', () => {
  let component: ResultSearchComponent;
  let fixture: ComponentFixture<ResultSearchComponent>;
  let facade: ResultSearchFacade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        ResultSearchComponent
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultSearchComponent);
    facade = TestBed.inject(ResultSearchFacade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnit method and call load method', () => {
    spyOn(facade, 'load');
    component.ngOnInit();
    expect(facade.load).toHaveBeenCalled();
  });

});
