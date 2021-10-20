import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSBoardComponent } from './cmsboard.component';

describe('CMSBoardComponent', () => {
  let component: CMSBoardComponent;
  let fixture: ComponentFixture<CMSBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
