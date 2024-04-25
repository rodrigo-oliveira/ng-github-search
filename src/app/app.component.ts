import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { DomSanitizer } from '@angular/platform-browser';
import { IconResolver, MatIconRegistry } from '@angular/material/icon';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { OfflineComponent } from './shared/components/offline/offline/offline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet,
    HeaderComponent,
    LoaderComponent,
    OfflineComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) {
    const resolver: IconResolver = (name) =>
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`);
      iconRegistry.addSvgIconResolver(resolver);
  }
}
