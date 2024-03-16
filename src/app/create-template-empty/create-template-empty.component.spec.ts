import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTemplateEmptyComponent } from './create-template-empty.component';

describe('CreateTemplateEmptyComponent', () => {
  let component: CreateTemplateEmptyComponent;
  let fixture: ComponentFixture<CreateTemplateEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTemplateEmptyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTemplateEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
