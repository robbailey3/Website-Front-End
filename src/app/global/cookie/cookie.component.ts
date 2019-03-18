import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { fadeInLeft } from 'src/app/shared/animations';

@Component({
  selector: 'rb-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInLeft]
})
export class CookieComponent implements OnInit {
  cookieInput: string;
  readonly DEFAULT_CONSOLE_TEXT = `> Cookies are used on this site for the purposes of monitoring site usage.
    By continuing to use this site, you agree to the these cookies.
    Enter 'close' or 'exit' to close this window.
    Enter 'help' to see available commands.`;
  readonly AVAILABLE_COMMANDS = [
    {
      command: 'help | ?',
      description: 'Lists the available commands.'
    },
    {
      command: 'contact',
      description: 'Shows some contact information.'
    },
    {
      command: 'clear',
      description: 'Clears the console.'
    },
    {
      command: 'close | exit',
      description: 'Agrees to the use of cookies and closes the console window.'
    },
    {
      command: 'info',
      description: 'Shows some information about the use of cookies.'
    }
  ];
  showConsole = true;
  @ViewChild('cookieConsole') cookieConsole: ElementRef;
  constructor() {}

  ngOnInit() {
    this.showConsole = this.checkConsent();
  }
  consoleEnter() {
    if (
      this.cookieInput === '' ||
      this.cookieInput === undefined ||
      this.cookieInput === null
    ) {
      return;
    }
    this.addTextToConsole(`$ ${this.cookieInput}`);
    switch (this.cookieInput.toLowerCase()) {
      case 'help':
      case '?':
        this.addTextToConsole('Available commands are:');
        this.AVAILABLE_COMMANDS.forEach(cmd => {
          this.addTextToConsole(`${cmd.command}\n${cmd.description}\n\n`);
        });
        break;
      case 'contact':
        this.addTextToConsole(
          'The easiest way to contact me is by email. My email address is rob.bailey3@gmail.com.'
        );
        break;
      case 'info':
        this.addTextToConsole(
          'Cookies are used on this site for Google Tag Manager.'
        );
        break;
      case 'clear':
        this.clearConsole();
        this.addTextToConsole(this.DEFAULT_CONSOLE_TEXT);
        break;
      case 'close':
      case 'exit':
        this.acceptCookies();
        this.showConsole = false;
        break;
      default:
        this.addTextToConsole(
          `Command '${
            this.cookieInput
          }' not found. Type 'help' to see all commands.`
        );
        break;
    }
    this.cookieInput = '';
  }
  clearConsole() {
    this.cookieConsole.nativeElement.innerHTML = '';
  }
  addTextToConsole(text: string) {
    const div = document.createElement('div');
    const pre = document.createElement('pre');
    div.append(pre);
    pre.textContent = text;
    this.cookieConsole.nativeElement.append(div);
    this.cookieConsole.nativeElement.scrollTop = this.cookieConsole.nativeElement.scrollHeight;
  }
  acceptCookies() {
    const consent = {
      timestamp: new Date().getTime()
    };
    if ('localStorage' in window) {
      localStorage.setItem('cookieconsent', JSON.stringify(consent));
    }
  }
  checkConsent(): boolean {
    if ('localStorage' in window) {
      const consent = JSON.parse(localStorage.getItem('cookieconsent'));
      if (consent) {
        return !this.consentIsValid(consent);
      }
    }
    return true;
  }
  consentIsValid(consent): boolean {
    const now = new Date().getTime();
    const then = Date.parse(consent.timestamp);
    const dateDifference = Math.round((now - then) / (1000 * 60 * 60 * 24));
    if (dateDifference > 30) {
      return false;
    }
    return true;
  }
}
