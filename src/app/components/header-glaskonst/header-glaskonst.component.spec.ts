import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderGlaskonstComponent } from './header-glaskonst.component';

describe('HeaderGlaskonstComponent', () => {
  let component: HeaderGlaskonstComponent;
  let fixture: ComponentFixture<HeaderGlaskonstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGlaskonstComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderGlaskonstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
