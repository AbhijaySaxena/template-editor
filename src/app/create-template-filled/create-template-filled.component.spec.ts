import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemplateFilledComponent } from './create-template-filled.component';

describe('CreateTemplateFilledComponent', () => {
  let component: CreateTemplateFilledComponent;
  let fixture: ComponentFixture<CreateTemplateFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTemplateFilledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTemplateFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
