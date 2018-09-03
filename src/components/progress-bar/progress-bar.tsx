import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'an-progress-bar'
})
export class AnProgressBar {

  @Prop() value: number = 0;
  @Prop() theme: string = 'primary';

  render() {
    const classes = [
      'an-progress-bar',
      `an-progress-bar-${this.theme}`
    ].join(' ');

    return (
      <div class={classes}>
        <div class="an-progress-bar-value" style={ { width: `${this.value}%` } }></div> 
      </div>
    );
  }
}
