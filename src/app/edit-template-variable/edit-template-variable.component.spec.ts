import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateVariableComponent } from './edit-template-variable.component';

describe('EditTemplateVariableComponent', () => {
  let component: EditTemplateVariableComponent;
  let fixture: ComponentFixture<EditTemplateVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTemplateVariableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
