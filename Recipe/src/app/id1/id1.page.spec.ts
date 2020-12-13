import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Id1Page } from './id1.page';

describe('Id1Page', () => {
  let component: Id1Page;
  let fixture: ComponentFixture<Id1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Id1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
