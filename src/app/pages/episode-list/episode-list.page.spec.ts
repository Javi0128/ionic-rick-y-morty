import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodeListPage } from './episode-list.page';

describe('EpisodeListPage', () => {
  let component: EpisodeListPage;
  let fixture: ComponentFixture<EpisodeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
