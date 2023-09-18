import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFourComponent } from './content-four.component';

describe('ContentFourComponent', () => {
  let component: ContentFourComponent;
  let fixture: ComponentFixture<ContentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
