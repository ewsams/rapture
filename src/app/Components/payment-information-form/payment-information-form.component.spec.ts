import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInformationFormComponent } from './payment-information-form.component';

describe('PaymentInformationFormComponent', () => {
  let component: PaymentInformationFormComponent;
  let fixture: ComponentFixture<PaymentInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PaymentInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
