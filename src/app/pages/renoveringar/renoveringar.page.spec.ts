import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenoveringarPage } from './renoveringar.page';

describe('RenoveringarPage', () => {
  let component: RenoveringarPage;
  let fixture: ComponentFixture<RenoveringarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenoveringarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenoveringarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
