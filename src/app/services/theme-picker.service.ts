import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer} from '@angular/cdk/overlay';
@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  themeState$: BehaviorSubject<string> = new BehaviorSubject('light-theme'); 
  
  constructor(private overlayContainer: OverlayContainer) { 
    overlayContainer.getContainerElement().classList.add('light-theme'); //Dialogues, Snackbars, etc.
  }
  getTheme() {
    return this.themeState$;
  }
  setTheme(theme: string){
    this.overlayContainer.getContainerElement().classList.forEach(css => {
      this.overlayContainer.getContainerElement().classList.remove(this.themeState$.getValue());
    });
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.themeState$.next(theme);
  }
}
