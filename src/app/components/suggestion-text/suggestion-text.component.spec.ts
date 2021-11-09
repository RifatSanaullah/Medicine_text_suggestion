import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionTextComponent } from './suggestion-text.component';

describe('SuggestionTextComponent', () => {
  let component: SuggestionTextComponent;
  let fixture: ComponentFixture<SuggestionTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
