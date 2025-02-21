import { Component, OnInit } from '@angular/core';
import { GeneradorService } from '../generador.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonText]
})
export class HomePage {
  prompt: string = '';
  idea: string = '';
  loading: boolean = false;
  constructor(private ideaService: GeneradorService) {}
  generarIdea() {
    if (!this.prompt.trim()) return;
    this.loading = true;
    this.ideaService.generateIdea(this.prompt).subscribe({
      next: (response: any) => {
        this.idea = response.choices[0].message.content;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error al generar idea:', error);
        this.loading = false;
      },
    });
  }
}

