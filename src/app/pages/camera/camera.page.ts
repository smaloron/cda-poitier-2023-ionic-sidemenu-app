import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public imageData: string | undefined;
  public imageUrl: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Camera,
      width: 500,
      saveToGallery: true
    });

    this.imageData = image.base64String;
  }

  async takePicture2() {
    const image = await Camera.getPhoto({
      quality: 75,
      resultType: CameraResultType.Uri,
      width: 500,
      saveToGallery: true
    });

    this.imageUrl = image.webPath;
    console.log(image.webPath);
    console.log(image)
  }


}
