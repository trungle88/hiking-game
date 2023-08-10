import { Component, ElementRef, ViewChild } from '@angular/core';
import scenesData from '../../assets/scenes.json';
import { Scene } from '../interfaces/scene';

@Component({
  selector: 'app-hiking-game',
  templateUrl: './hiking-game.component.html',
  styleUrls: ['./hiking-game.component.scss'],
})
export class HikingGameComponent {
  @ViewChild('gameContainer', { static: true }) gameContainer!: ElementRef<any>;

  scenes: Scene[] = scenesData.scenes;
  currentScene: Scene | null = this.scenes[0];

  scrollAmount: number = 0;
  scrollStep: number = 10;

  handleZoneClick(goto: number): void {
    const newScene = this.scenes.find(scene => scene.id === goto);
    if (newScene) {
      this.currentScene = newScene;
    }
  }

  scrollTo(direction: 'left' | 'right'): void {
    if (this.gameContainer) {
      const container = this.gameContainer.nativeElement;
      const scrollWidth = direction === 'left' ? -this.scrollStep : this.scrollStep;
      this.scrollAmount = Math.max(0, this.scrollAmount + scrollWidth);
      container.scrollTo({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }
  walkTo(zone: any): void {
    const newScene = this.scenes.find(scene => scene.id === zone.goto);
    if (newScene) {
      this.currentScene = newScene;
    }
  }
}
