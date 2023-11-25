import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string): void {
    this.translate.switchLanguage('en')
  }}


