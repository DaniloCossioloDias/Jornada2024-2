import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-validacao-costura',
  templateUrl: './validacao-costura.page.html',
  styleUrls: ['./validacao-costura.page.scss'],
})
export class ValidacaoCosturaPage{
  feedback: { titulo: string; mensagem: string} | null = null;

  constructor() {}

  // Função para capturar a foto
  async capturarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource. Camera
      });

      // Simulação da análise automática da imagem
      this.validarCostura(image.base64String);
    } catch (error) {
      console.error('Erro ao capturar foto', error);
      this.feedback = {
        titulo: 'Erro',
        mensagem: 'Não foi possível capturar a foto. Tente novamente!'
      };
    }
  }

  // Função para validar a costura (simulação)
  validarCostura(foto: string | undefined) {
    const resultadoAprovado = Math.random() < 0.7;

    if(resultadoAprovado) {
      this.feedback = {
        titulo: 'Costura Aprovada',
        mensagem: 'A costura está dentro dos padrões de qualidade e sustentabilidade.'
      };
    } else {
      this.feedback = {
        titulo: 'Costura Reprovada',
        mensagem: 'A costura não atende aos padrões. Ajuste os pontos e a linha para melhorar a qualidade.'
      }
    }
  }
}
