import { EventEmitter, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * An injectable service for amending or retrieving meta tags
 */
@Injectable({
  providedIn: 'root'
})
export class MetaService {
  /**
   * An event emitter for the document title.
   * This emits a new value each time the page
   * title changes.
   *
   * ***Note***: Whether or not the new title is emitted
   * can be decided by the `emit` parameter of the `setTitle`
   * method.
   */
  public $title: EventEmitter<string> = new EventEmitter();

  constructor(private meta: Meta, private title: Title) {}

  /**
   * Changes the `<title>` element in the page head.
   * @param title The new page title
   * @param [emit=true] Whether or not to emit the new title.
   *  (Default is `true`).
   */
  public setTitle(title: string, emit: boolean = true): void {
    this.title.setTitle(title);
    if (emit) {
      this.$title.emit(title);
    }
  }

  /**
   * Sets the value of the meta description tag
   * TODO: Incorporate the og:description into this method too.
   *
   * @param description The new description
   */
  public setDescription(description: string): void {
    if (this.meta.getTag('name="description"')) {
      this.meta.updateTag({ content: description }, 'name="description"');
    } else {
      this.meta.addTag({
        name: 'description',
        content: description
      });
    }
  }
  /**
   * Get the title of the current HTML document.
   */
  public getTitle(): string {
    return this.title.getTitle();
  }
}
