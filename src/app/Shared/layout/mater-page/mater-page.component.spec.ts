import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterPageComponent } from './mater-page.component';

describe('MaterPageComponent', () => {
  let component: MaterPageComponent;
  let fixture: ComponentFixture<MaterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
