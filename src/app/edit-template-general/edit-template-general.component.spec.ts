import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateGeneralComponent } from './edit-template-general.component';

describe('EditTemplateGeneralComponent', () => {
  let component: EditTemplateGeneralComponent;
  let fixture: ComponentFixture<EditTemplateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTemplateGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTemplateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
