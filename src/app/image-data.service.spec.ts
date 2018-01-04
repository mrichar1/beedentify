import { TestBed, inject } from '@angular/core/testing';

import { ImageDataService } from './image-data.service';

describe('ImageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageDataService]
    });
  });

  it('should be created', inject([ImageDataService], (service: ImageDataService) => {
    expect(service).toBeTruthy();
  }));
});
