import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassworsComponent } from './changepasswors.component';

describe('ChangepassworsComponent', () => {
  let component: ChangepassworsComponent;
  let fixture: ComponentFixture<ChangepassworsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangepassworsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangepassworsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
