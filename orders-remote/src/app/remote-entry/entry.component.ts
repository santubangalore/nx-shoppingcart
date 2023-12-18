import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'netquest-orders-remote-entry',
  template: `<netquest-nx-welcome></netquest-nx-welcome>`,
})
export class RemoteEntryComponent {}
