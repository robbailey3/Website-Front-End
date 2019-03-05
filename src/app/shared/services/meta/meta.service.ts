import { Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private meta: Meta, private title: Title) {
    console.log(this);
  }
  public setTitle(title: string): void {
    this.title.setTitle(title);
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
}
