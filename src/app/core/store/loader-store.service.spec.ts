import { TestBed } from '@angular/core/testing';
import { LoaderStoreService } from './loader-store.service';

describe('LoaderStoreService', () => {
  let service: LoaderStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderStoreService]
    });
    service = TestBed.inject(LoaderStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize isLoading as true', () => {
    expect(service.isLoading()).toBe(true);
  });

  it('should set isLoading to true when show() is called', () => {
    service.show();
    expect(service.isLoading()).toBe(true);
  });

  it('should set isLoading to false when hide() is called', () => {
    service.hide();
    expect(service.isLoading()).toBe(false);
  });
});