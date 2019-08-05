import { Injectable, EventEmitter } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  public $title: EventEmitter<string> = new EventEmitter();
  constructor(private meta: Meta, private title: Title) {}
  public setTitle(title: string, emit: boolean = true): void {
    this.title.setTitle(title);
    if (emit) {
      this.$title.emit(title);
    }
  }
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
  public getTitle(): string {
    return this.title.getTitle();
  }
}
