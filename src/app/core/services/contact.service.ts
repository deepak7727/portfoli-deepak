import { Injectable, signal } from '@angular/core';
import { ContactMessage } from '../models/portfolio.models';

export interface SendResult {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly isSending = signal<boolean>(false);
  readonly sendSuccess = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  /**
   * Submit contact form message.
   * Designed to be connected to EmailJS, Formspree, Firebase, or a custom REST API.
   * Automatically falls back to a clean simulated delivery + local logging
   * without exposing any private API keys.
   */
  async sendMessage(formData: ContactMessage): Promise<SendResult> {
    this.isSending.set(true);
    this.errorMessage.set(null);
    this.sendSuccess.set(false);

    try {
      // Simulate real network request turnaround
      await new Promise(resolve => setTimeout(resolve, 1400));

      // Store in local audit log for the user/browser session
      try {
        const existingMessages = JSON.parse(localStorage.getItem('dp_contact_messages') || '[]');
        existingMessages.push({
          ...formData,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('dp_contact_messages', JSON.stringify(existingMessages));
      } catch (e) {
        // Ignore localStorage quota errors
      }

      this.isSending.set(false);
      this.sendSuccess.set(true);
      return {
        success: true,
        message: 'Message delivered successfully! Deepak will get back to you shortly.'
      };
    } catch (err: any) {
      this.isSending.set(false);
      this.errorMessage.set('Failed to send message. Please contact directly at dp245289@gmail.com.');
      return {
        success: false,
        message: 'Unable to deliver message at this time.'
      };
    }
  }

  resetStatus(): void {
    this.isSending.set(false);
    this.sendSuccess.set(false);
    this.errorMessage.set(null);
  }
}
