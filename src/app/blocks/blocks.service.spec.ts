/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlocksService } from './blocks.service';

describe('BlocksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlocksService]
    });
  });

  it('should ...', inject([BlocksService], (_service: BlocksService) => {
    expect(_service).toBeTruthy();
  }));
});
