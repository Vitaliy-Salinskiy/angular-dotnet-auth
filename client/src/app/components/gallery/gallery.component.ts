import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [RouterLink, ButtonComponent, NgOptimizedImage],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {}
