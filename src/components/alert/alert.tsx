import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'an-alert'
})
export class alert {

    @Element() element: HTMLElement;

    @Prop() theme: string = 'primary';

    @Prop() closeable: boolean = false;

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
        this.element.classList.add('an-alert', `an-alert-${this.theme}`);

        if(this.closeable) {
            return [
                <slot />,
                <a class="an-alert-close" onClick={() => this.close()}>X</a>
            ]
        }

        this.element.classList.add('an-alert-center-text');

        return [
            <slot />
        ];
    }
}