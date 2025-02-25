import { ComponentFixture, TestBed } from '@angular/core/testing';//import testing

import { AComponent } from './a.component';

describe('AComponent', () => {
  let component: AComponent;// veriables to hold the component instance
  let fixture: ComponentFixture<AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//test case cheacks if the component is crated succesfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
