import { Component } from '@angular/core';
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Clipboard, WriteOptions } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textDetection: any[] = []
  arr: any = []
  textareaContent: any = ""
  imgPath: any
  isImageExist: boolean = false

  constructor(private toastController: ToastController) {
  }

  copy() {
    var options: WriteOptions = {
      string: this.textareaContent
    }
    Clipboard.write(options).then(async () => {
      const toast = await this.toastController.create({
        message: 'Message copied!',
        duration: 2000,// Duration in milliseconds
        cssClass: 'colorful-toast'
      });
      toast.present();
    })
  }

  async scanNow() {
    this.textareaContent = ""
    this.arr = []
    this.textDetection = []
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: false,
    });
    this.imgPath = photo.webPath;
    if (this.imgPath) {
      this.isImageExist = true
    } else this.isImageExist = false


    const data: TextDetections = await Ocr.detectText({
      filename: photo.path!,
    });
    this.textDetection = data.textDetections;
    this.textDetection.forEach(element => {
      this.arr.push(element.text+ '\n'+'\n');

    });
    this.textareaContent = this.arr.join(" ").toString()
  }

}


