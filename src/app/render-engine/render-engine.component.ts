import { Component, ElementRef, ViewChild } from '@angular/core';
import { RenderEngineService } from './render-engine.service';

@Component({
  selector: 'app-render-engine',
  templateUrl: './render-engine.component.html',
  styleUrls: ['./render-engine.component.scss'],
})
export class RenderEngineComponent {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: RenderEngineService) {}

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }
}
