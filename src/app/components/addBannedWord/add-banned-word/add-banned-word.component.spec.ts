import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBannedWordComponent } from './add-banned-word.component';

describe('AddBannedWordComponent', () => {
  let component: AddBannedWordComponent;
  let fixture: ComponentFixture<AddBannedWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBannedWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBannedWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
