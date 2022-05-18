import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  HostListener,
  SimpleChanges,
} from '@angular/core';

/**
 * Simple directive that creates and maintains custom CSS properties for custom slider input.
 *
 * This directive applies to all `input` of type `range` that has the `qf-slider` class.
 *
 * It is requires to be able to have effective double-color slider track on Chrome,
 * and this works hand in hand with the CSS part for Chrome.
 */
@Directive({
  selector: '[type=range].range-slider',
})
export class RangeSliderDirective implements OnChanges {
  /** Reference to input range element. */
  private inputRef: HTMLInputElement;

  @Input() max: number;

  constructor(elementRef: ElementRef) {
    this.inputRef = elementRef.nativeElement;
  }

  /**
   * When input is ready we create custom CSS properties to used to render the colored track in Chrome.
   */
  ngAfterViewInit(): void {
    // Define custom CSS properties for the slider track display in Chrome
    this.inputRef.style.setProperty('--min', this.inputRef.getAttribute('min'));
    this.inputRef.style.setProperty('--max', this.inputRef.getAttribute('max'));
    this.inputRef.style.setProperty('--val', this.inputRef.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.max) {
      this.inputRef.style.setProperty('--max', `${this.max}`);
    }
  }

  /**
   * Update the `--val` CSS property each time the range value is updated.
   *
   * This is needed by the Chrome CSS to update the gradient used to color the input track.
   */
  @HostListener('input')
  updateCssForTrackDisplay(): void {
    this.inputRef.style.setProperty('--val', this.inputRef.value);
  }
}
