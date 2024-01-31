import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import '@capacitor-community/camera-preview';
// import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import { Camera, CameraResultType, CameraSource, CameraPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.page.html',
  styleUrls: ['./pokebola.page.scss'],
})
export class PokebolaPage implements OnInit {
  @ViewChild('camera', { static: true }) cameraElement!: ElementRef<HTMLImageElement>;

  pokemonId: string | null = null;
  picture: string | undefined = undefined;
  captured: boolean = false;

  // cameraPreviewOptions: CameraPreviewOptions = {
  //   x: 0,
  //   y: 0,
  //   width: window.screen.width,
  //   height: window.screen.height,
  //   toBack: true,
  //   storeToFile: false,
  //   position: 'rear',
  //   enableOpacity: true,
  // };

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['pokemonId']) {
        this.pokemonId = params['pokemonId'];
      }
    });

      // CameraPreview.start(this.cameraPreviewOptions).then(() => {
      //   console.log("Camera Started...");
      // }).catch((err) => {
      //   console.error(err);
    // });
    
    // Camera.requestPermissions();

    this.initCamera();

  }

  async initCamera() {

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
    
    this.picture = image.base64String;
    this.cameraElement.nativeElement.src = `data:image/jpeg;base64,${this.picture}`;
    this.captured = true;
    
  }

  async capturar() {
    await this.initCamera();
    this.showPokemon();
  }
  
  // capturar() {
  //   console.log("Trying to capture....");

  //   CameraPreview.capture(this.cameraPreviewOptions).then((imageData) => {

  //     this.picture = 'data:image/jpeg;base64,' + imageData;
  //     this.captured = true;

  //     this.showPokemon();

  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  private async showPokemon() {

    let alert = await this.alertCtrl.create({
      header: 'pokemon',
      message: `<img src="${this.picture}">`,
      buttons: [
        {
          text: 'ok',
        },
      ],
    });

    await alert.present();

  }
}