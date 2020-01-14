import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxTutorialComponent } from './flexbox-tutorial.component';

describe('FlexboxTutorialComponent', () => {
  let component: FlexboxTutorialComponent;
  let fixture: ComponentFixture<FlexboxTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
