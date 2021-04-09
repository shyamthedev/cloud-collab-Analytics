import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClieneditComponent } from './clienedit.component';

describe('ClieneditComponent', () => {
  let component: ClieneditComponent;
  let fixture: ComponentFixture<ClieneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClieneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClieneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
