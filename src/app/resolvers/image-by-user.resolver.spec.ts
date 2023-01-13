import { TestBed } from '@angular/core/testing';

import { ImageByUserResolver } from './image-by-user.resolver';

describe('ImageByUserResolver', () => {
  let resolver: ImageByUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ImageByUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
