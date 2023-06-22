import { Component, OnInit } from '@angular/core';

import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Camera
    });

    console.log('test');
    console.log(image);
  }

}
