import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-pill',
  templateUrl: './social-pill.component.html',
  styleUrl: './social-pill.component.scss'
})
export class SocialPillComponent {

  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() descripcion: string = '';
  constructor() { }

  ngOnInit(): void {
  }
}
