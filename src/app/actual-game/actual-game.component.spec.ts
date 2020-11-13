import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualGameComponent } from './actual-game.component';

describe('ActualGameComponent', () => {
  let component: ActualGameComponent;
  let fixture: ComponentFixture<ActualGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
