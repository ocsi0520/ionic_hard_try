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
  @ContentChildren('status') private queryListOfItems: QueryList<IStatus>;
  //@ContentChildren('status') listOfItems: QueryList<IStatus>;
  private listOfItems: Array<IStatus>;
  private currentControlIndex: number;
  private listOfResults: Array<any>=new Array<any>();

  constructor() {
    this.currentControlIndex = 0;
  }

  ngAfterViewInit() {
    this.listOfItems = this.queryListOfItems.toArray();
    //setTimeout(() => this.initChildren()); //https://stackoverflow.com/questions/38763248/angular-2-life-cycle-hook-after-all-children-are-initialized?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    this.initChildren();
  }

  private initChildren() {
    for (let i = this.listOfItems.length - 1; i >= 1; i--) {
      this.listOfItems[i].setStatus(Status.NotActive);
      this.listOfItems[i].done.subscribe((result) => this.controlDone(result));
    }
    this.listOfItems[0].setStatus(Status.Active);
    this.listOfItems[0].done.subscribe((result) => this.controlDone(result));
  }

  controlDone(res: any) {
    this.listOfResults.push(res);
    if (this.currentControlIndex < this.listOfItems.length)
      this.nextControl();
  }

  controlUndone(res: any) {
    this.listOfResults.pop(); //__change__ --> az utolsót kiveszi, de mi van, ha későbbiekben nem csak az utolsót szeretnénk kivenni (nem szekvenciális működés esetén)
    if (this.currentControlIndex > 0)
      this.previousControl();
  }

  private nextControl() {
    this.listOfItems[this.currentControlIndex].setStatus(Status.Ready);
    this.currentControlIndex++;
    if (this.currentControlIndex < this.listOfItems.length)
      this.listOfItems[this.currentControlIndex].setStatus(Status.Active);
    else
      this.allFinished.emit();
  }

  private previousControl() {
    if (this.currentControlIndex < this.listOfItems.length)
      this.listOfItems[this.currentControlIndex].setStatus(Status.NotActive);
    this.currentControlIndex--;
    if (this.currentControlIndex >= 0)
      this.listOfItems[this.currentControlIndex].setStatus(Status.Active);
  }

  //Alternatív megoldás, de kevésbé átlátható
  /*controlChange(isForward: boolean) {
    let stat: Status = isForward ? Status.Ready : Status.NotActive
    this.listOfItems[this.currentControlIndex].setStatus(stat);
    this.currentControlIndex += isForward ? 1 : -1;
    if (this.currentControlIndex < this.listOfItems.length && this.currentControlIndex>=0)
    this.listOfItems[this.currentControlIndex].setStatus(Status.Active);
  }*/

}
