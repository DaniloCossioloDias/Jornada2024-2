import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-pre-corte',
  templateUrl: './pre-corte.page.html',
  styleUrls: ['./pre-corte.page.scss'],
})
export class PreCortePage{
  selectedImage: string | null | undefined= null;
  
  constructor(private router: Router) {}

  // Função para manipular a seleção de arquivo
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Função para capturar foto com a câmera
  async capturePhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    this.selectedImage = image.dataUrl ?? null;
  }

  // Função de submissão (envio de validação)
  submitValidation(): void {
    if (this.selectedImage) {
      localStorage.setItem('preCorteImage', this.selectedImage);
      alert('Validação enviada com sucesso!');
      this.router.navigate(['pos-corte']);
    } else {
      alert('Por favor, selecione ou capture uma imagem antes de enviar.');
    }
  }
}
