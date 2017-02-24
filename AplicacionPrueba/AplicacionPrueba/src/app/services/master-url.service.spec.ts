import { TestBed, inject } from '@angular/core/testing';
import { MasterURlService } from './master-url.service';

describe('MasterURlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterURlService]
    });
  });

  it('should ...', inject([MasterURlService], (service: MasterURlService) => {
    expect(service).toBeTruthy();
  }));
});
