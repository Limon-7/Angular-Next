import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMusicVideoComponent } from './artist-music-video.component';

describe('ArtistMusicVideoComponent', () => {
  let component: ArtistMusicVideoComponent;
  let fixture: ComponentFixture<ArtistMusicVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistMusicVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMusicVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
