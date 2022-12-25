import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvAngularTreeUiComponent } from './sv-angular-tree-ui.component';

describe('SvAngularTreeUiComponent', () => {
  let component: SvAngularTreeUiComponent;
  let fixture: ComponentFixture<SvAngularTreeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvAngularTreeUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvAngularTreeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
