import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtofolioComponent } from './protofolio.component';

describe('ProtofolioComponent', () => {
  let component: ProtofolioComponent;
  let fixture: ComponentFixture<ProtofolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtofolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
