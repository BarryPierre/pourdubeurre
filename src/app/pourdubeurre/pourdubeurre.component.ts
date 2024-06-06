import { Component } from '@angular/core';
import {
  LucideAngularModule
} from 'lucide-angular';
@Component({
  selector: 'app-pourdubeurre',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './pourdubeurre.component.html',
  styleUrl: './pourdubeurre.component.scss'
})
export class PourdubeurreComponent {
  year = new Date().getFullYear()
  Solutions = [
    {
      title: 'Search Engine Optimization',
      icon: 'newspaper',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Social Media Marketing',
      icon: 'folder-kanban',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'E-commerce Solutions',
      icon: 'clipboard-pen-line',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Pay-Per-Click Advertising',
      icon: 'store',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Branding Strategy',
      icon: 'contact-2',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Marketing Copywriting',
      icon: 'image',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
  ]
}
