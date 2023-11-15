import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesreactsComponent } from './moviesreacts.component';

describe('MoviesreactsComponent', () => {
  let component: MoviesreactsComponent;
  let fixture: ComponentFixture<MoviesreactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesreactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesreactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
