import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * A pipe to bypass Angular's build in HTML sanitization.
 */
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  /**
   * This method converts a HTML string into a
   * trusted HTML string (i.e. it keeps in any dodgy
   * HTML which could be a securit risk).
   * ! Caution: use with care
   * @returns Returns the transformed value
   */
  public transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
