import { TestBed } from '@angular/core/testing';

import { ImageResolver } from './image.resolver';

describe('ImageResolver', () => {
  let resolver: ImageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ImageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
