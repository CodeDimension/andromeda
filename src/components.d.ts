/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface AnAlert {
    'theme': string;
  }
  interface AnAlertAttributes extends StencilHTMLAttributes {
    'onOnclose'?: (event: CustomEvent) => void;
    'theme'?: string;
  }

  interface AnInputFile {
    'accept': string;
    'multiple': boolean;
    'placeholder': string;
    'setSelectedFilesMessage': (fn: (files: File[]) => string) => void;
    'theme': string;
  }
  interface AnInputFileAttributes extends StencilHTMLAttributes {
    'accept'?: string;
    'multiple'?: boolean;
    'onOnchange'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'theme'?: string;
  }

  interface AnProgressBar {
    'theme': string;
    'value': number;
  }
  interface AnProgressBarAttributes extends StencilHTMLAttributes {
    'theme'?: string;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AnAlert': Components.AnAlert;
    'AnInputFile': Components.AnInputFile;
    'AnProgressBar': Components.AnProgressBar;
  }

  interface StencilIntrinsicElements {
    'an-alert': Components.AnAlertAttributes;
    'an-input-file': Components.AnInputFileAttributes;
    'an-progress-bar': Components.AnProgressBarAttributes;
  }


  interface HTMLAnAlertElement extends Components.AnAlert, HTMLStencilElement {}
  var HTMLAnAlertElement: {
    prototype: HTMLAnAlertElement;
    new (): HTMLAnAlertElement;
  };

  interface HTMLAnInputFileElement extends Components.AnInputFile, HTMLStencilElement {}
  var HTMLAnInputFileElement: {
    prototype: HTMLAnInputFileElement;
    new (): HTMLAnInputFileElement;
  };

  interface HTMLAnProgressBarElement extends Components.AnProgressBar, HTMLStencilElement {}
  var HTMLAnProgressBarElement: {
    prototype: HTMLAnProgressBarElement;
    new (): HTMLAnProgressBarElement;
  };

  interface HTMLElementTagNameMap {
    'an-alert': HTMLAnAlertElement
    'an-input-file': HTMLAnInputFileElement
    'an-progress-bar': HTMLAnProgressBarElement
  }

  interface ElementTagNameMap {
    'an-alert': HTMLAnAlertElement;
    'an-input-file': HTMLAnInputFileElement;
    'an-progress-bar': HTMLAnProgressBarElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
