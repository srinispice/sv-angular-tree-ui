import { TestBed } from '@angular/core/testing';

import { SvAngularTreeUiService } from './sv-angular-tree-ui.service';

describe('SvAngularTreeUiService', () => {
  let service: SvAngularTreeUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvAngularTreeUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
