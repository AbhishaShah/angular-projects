import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() userName = '';

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
    console.log('input:', this.userName);
  }

  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  ngDoCheck() {
    console.log('ngDoCheck triggered from the child component');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
    console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy triggered');
  }
}
