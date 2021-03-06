import { Directive, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { IStatus, Status } from '../../interfaces/status';

/**
 * Generated class for the ItemStatusControllerDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[item-status-controller]', // Attribute selector
  exportAs: 'item-status-controller'
})
export class ItemStatusControllerDirective {

  @Output('all-finished') allFinished = new EventEmitter();
  @Output('all-unfinished') allUnfinished = new EventEmitter();
  @ContentChildren('status') private queryListOfItems: QueryList<IStatus>;
  private listOfItems: Array<IStatus>;
  private currentControlIndex: number;

  constructor() {
    this.currentControlIndex = 0;
  }

  ngAfterViewInit() {
    this.listOfItems = this.queryListOfItems.toArray();
    //setTimeout(() => this.initChildren()); //https://stackoverflow.com/questions/38763248/angular-2-life-cycle-hook-after-all-children-are-initialized?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    this.initChildren();
  }


  private initChildren() {
    for (let i = this.listOfItems.length - 1; i >= 1; i--)
      this.listOfItems[i].setStatus(Status.NotActive);
    this.listOfItems[0].setStatus(Status.Active);

    this.focusCurrent();
  }

  /**
   * Set the current control, show errors if exist
   * return true if there were no errors
   *
   * 
   * @param errors an Array of strings that contains the messages of the errors
   *
   * TODO: errors should be an instance of a new class that contains only 1 element: the messages of errors
   */
  evaluateErrors(errors: Array<string>) {
    this.listOfItems[this.currentControlIndex].setErrors(errors);
    if (errors.length === 0) { //ha nincs error
      this.nextControl();
      return true;
    }
    else {
      this.focusCurrent();
      return false;
    }
  }

  nextControl() {

      if (this.currentControlIndex < this.listOfItems.length) { //ha a mostani még benne van a listába
        this.listOfItems[this.currentControlIndex].setStatus(Status.Ready); //akkor azt ready-zzük
        if (++this.currentControlIndex != this.listOfItems.length) {             //ha nem értünk a lista végére
          this.listOfItems[this.currentControlIndex].setStatus(Status.Active);
          this.focusCurrent();
        } //akkor a következőt vesszük
        else {
          this.allFinished.emit();
        }
      }
  }

  previousControl() {

    if (this.currentControlIndex!=0) {

      if (this.currentControlIndex < this.listOfItems.length) {   //ha listán belül vagyunk
        this.listOfItems[this.currentControlIndex].setStatus(Status.NotActive);
        this.listOfItems[--this.currentControlIndex].setStatus(Status.Active);
      }

      else { //ha listán kívül vagyunk
        this.listOfItems[--this.currentControlIndex].setStatus(Status.Active);
        this.allUnfinished.emit();
      }
    }
    this.focusCurrent();

  }

  focusCurrent() {
    this.listOfItems[this.currentControlIndex].focus(); 
  }
}
