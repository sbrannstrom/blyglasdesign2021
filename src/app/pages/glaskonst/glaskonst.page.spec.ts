import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlaskonstPage } from './glaskonst.page';

describe('GlaskonstPage', () => {
  let component: GlaskonstPage;
  let fixture: ComponentFixture<GlaskonstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlaskonstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlaskonstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
