import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-validacao-costura',
  templateUrl: './validacao-costura.page.html',
  styleUrls: ['./validacao-costura.page.scss'],
})

export class ValidacaoCosturaPage{
  feedbackImagem: { titulo: string; mensagem: string } | null = null;
  feedbackTexto: { titulo: string; mensagem: string } | null = null;
  preCorteImage: string | null = null;
  posCorteDetalhes: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if(params['preCorteImage']) {
        this.preCorteImage = params['preCorteImage'];
        this.validarCosturaImagem(this.preCorteImage);
      }
      if(params['posCorteDetalhes']) {
        this.posCorteDetalhes = params['posCorteDetalhes'];
        this.validarCosturaTexto(this.posCorteDetalhes);
      }
    });
  }

  // Função para capturar a foto
  async capturarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

    } catch (error) {
      console.error('Erro ao capturar foto', error);
      this.feedbackImagem = {
        titulo: 'Erro',
        mensagem: 'Não foi possível capturar a foto. Tente novamente!'
      };
    }
  }

  // Função para validar a imagem da costura
  validarCosturaImagem(foto: string | null) {
    if (!foto) {
      // Lógica para lidar com o caso de 'foto' ser null
      this.feedbackImagem = {
        titulo: 'Imagem Não Recebida',
        mensagem: 'Por favor, anexe uma imagem para validação.'
      };
      return;
    }
  
    // Simulação da análise automática da imagem
    const resultadoAprovado = Math.random() < 0.7;
  
    if (resultadoAprovado) {
      this.feedbackImagem = {
        titulo: 'Costura Aprovada',
        mensagem: 'A costura está dentro dos padrões de qualidade e sustentabilidade.'
      };
    } else {
      this.feedbackImagem = {
        titulo: 'Costura Reprovada',
        mensagem: 'A costura não atende aos padrões. Ajuste os pontos e a linha para melhorar a qualidade.'
      };
    }
  }

   // Função para validar o texto dos detalhes da Pós Corte
   validarCosturaTexto(detalhes: string | null) {
    if (!detalhes) {
      this.feedbackTexto = {
        titulo: 'Detalhes Não Recebidos',
        mensagem: 'Por favor, forneça detalhes sobre a costura.'
      };
      return;
    }
  
    // Simulação da validação do texto
    this.feedbackTexto = {
      titulo: 'Detalhes Recebidos',
      mensagem: 'Os detalhes foram recebidos e estão prontos para análise.'
    };
  }
}
