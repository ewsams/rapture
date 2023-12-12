import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyKitComponent } from './ready-kit.component';

describe('ReadyKitComponent', () => {
  let component: ReadyKitComponent;
  let fixture: ComponentFixture<ReadyKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReadyKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadyKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
