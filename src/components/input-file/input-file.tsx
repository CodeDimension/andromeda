import { Component, Prop, Event, EventEmitter, State, Method } from '@stencil/core';

@Component({
    tag: 'an-input-file'
})
export class InputFile {

    selectedFilesMessageFn: (files: File[]) => string = files => {
        if (!files.length) {
            return 'No file selected';
        }

        if (files.length === 1) {
            if (files[0].name.length > 15) {
                return files[0].name.substr(0, 15) + '...';
            }

            return files[0].name;
        }

        return `${files.length} files`;
    };

    id = String(Date.now());

    @State() state: File[] = [];

    @Prop() placeholder: string = 'Select file';

    @Prop() theme: string = 'primary';

    @Prop() multiple: boolean = false;

    @Prop() accept: string;

    @Event({ eventName: 'onchange' })
    onChangeEmitter: EventEmitter;

    @Method()
    setSelectedFilesMessage(fn: (files: File[]) => string) {
        this.selectedFilesMessageFn = fn;
        
        // re-render
        this.state = this.state.slice();
    }

    onChange(event) {
        const files = Array.from<File>(event.target.files);

        this.readFiles(files)
            .then(data => {
                this.onChangeEmitter.emit(data);
            });

        this.state = files;
    }

    readFiles(files: any[]) {
        const promises = files.map(item => new Promise(resolve => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            }

            reader.readAsDataURL(item);
        }));

        return Promise.all(promises);
    }

    render() {

        const classes = [
            'an-input-file',
            `an-input-file-${this.theme}`
        ].join(' ');

        const selectedFilesText = this.selectedFilesMessageFn(this.state);

        return [
            <input class={classes}
                type="file"
                onChange={this.onChange.bind(this)}
                accept={this.accept}
                id={this.id}
                multiple={this.multiple} />,

            <label class="an-input-file-label" htmlFor={this.id}>
                <div class="an-input-file-btn">
                    {this.placeholder}
                </div>
                <div class="an-input-file-filename">
                    {selectedFilesText}
                </div>
            </label>

        ];
    }
}