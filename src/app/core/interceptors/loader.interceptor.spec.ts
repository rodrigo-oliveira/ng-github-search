import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { LoaderStoreService } from '../store/loader-store.service';
import { loaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loaderStoreService: LoaderStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoaderStoreService,
        provideHttpClient(withInterceptors([loaderInterceptor])),
        provideHttpClientTesting()
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loaderStoreService = TestBed.inject(LoaderStoreService);
  });

  it('should show loader when making HTTP request', () => {
    spyOn(loaderStoreService, 'show');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    expect(loaderStoreService.show).toHaveBeenCalled();

    req.flush({});
  });

  it('should hide loader after HTTP request completes', () => {
    spyOn(loaderStoreService, 'hide');

    httpClient.get('/test').subscribe();

    const req = httpTestingController.expectOne('/test');
    expect(req.request.method).toEqual('GET');

    req.flush({});

    expect(loaderStoreService.hide).toHaveBeenCalled();
  });
});