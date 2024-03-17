import { Component, ElementRef, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef;
  isPlay: boolean = false;
  icon: string = 'pi pi-caret-right';

  clickPlay() {
    if (this.isPlay == false) {
      this.videoPlayer.nativeElement.play();
      this.isPlay = true;
      this.icon = 'pi pi-pause';
    } else {
      this.videoPlayer.nativeElement.pause();
      this.isPlay = false;
      this.icon = 'pi pi-caret-right';
    }
  }

  refresh() {
    this.videoPlayer.nativeElement.currentTime = 0;
  }

  fastBackward() {
    this.videoPlayer.nativeElement.currentTime -= 10;
  }

  fastForward() {
    this.videoPlayer.nativeElement.currentTime += 10;
  }
}
