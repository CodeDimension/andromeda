import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'an-alert'
})
export class alert {

    @Element() element: HTMLElement;

    @Prop() theme: string = 'primary';

    @Event({ eventName: 'onclose' })
    onClose: EventEmitter;

    close() {
        this.onClose.emit();
        this.destroyNode();
    }

    destroyNode() {
        this.element.parentElement.removeChild(this.element);
    }

    render() {
        const classes = [
            'an-alert',
            `an-alert-${this.theme}`
        ].join(' ');

        return (
            <div class={classes}>
                <slot />
                <a class="an-alert-close" onClick={() => this.close()}>X</a>
            </div>
        );
    }
}