import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { of } from 'rxjs';

describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent> = null;
  let component: PhotoListComponent = null;
  let service: PhotoBoardService = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService);
  });

  it(`Should created`, () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data arrives`, () => {
    const photos = buildPhotoList();
    spyOn(service, `getPhotos`).and.returnValue(of(photos));
    fixture.detectChanges();
    const board: HTMLElement = fixture.nativeElement.querySelector(
      'app-photo-board'
    );
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).not.toBeNull('Should display board');
    expect(loader).toBeNull('Should not display loader');
  });

  it(`(D) Should display loader while waiting for data`, () => {
    spyOn(service, `getPhotos`).and.returnValue(of(null));
    fixture.detectChanges();
    const board: HTMLElement = fixture.nativeElement.querySelector(
      'app-photo-board'
    );
    const loader = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should not display board').toBeNull();
    expect(loader).withContext('Should display loader').not.toBeNull();
  });
});
