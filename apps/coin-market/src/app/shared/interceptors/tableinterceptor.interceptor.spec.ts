import { TestBed } from '@angular/core/testing';

import { TableinterceptorInterceptor } from './tableinterceptor.interceptor';

describe('TableinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TableinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TableinterceptorInterceptor = TestBed.inject(TableinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
