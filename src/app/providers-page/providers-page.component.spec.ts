import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersPageComponent } from './providers-page.component';

describe('ProvidersPageComponent', () => {
  let component: ProvidersPageComponent;
  let fixture: ComponentFixture<ProvidersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvidersPageComponent]
    });
    fixture = TestBed.createComponent(ProvidersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
