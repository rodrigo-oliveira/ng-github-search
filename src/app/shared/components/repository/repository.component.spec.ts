import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryComponent } from './repository.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryComponent, MatIconTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
