import { Component, Prop, Event, EventEmitter, State, Watch } from '@stencil/core';

const selectedFilesMessageFn = files => {
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
}

const defaultConfig = {
    selectedFilesMessageFn
};

@Component({
    tag: 'an-input-file'
})
export class InputFile {

    id = String(Date.now());

    internalConfig = defaultConfig;

    @State() state: File[] = [];

    @Prop() placeholder: string = 'Select file';

    @Prop() theme: string = 'primary';

    @Prop() multiple: boolean = false;

    @Prop() accept: string;

    @Prop() config;

    @Watch('config')
    onConfigChange(newValue) {

        if (!newValue) {
            return;
        }

        this.internalConfig = { ...defaultConfig, ...newValue };
    }

    @Event({ eventName: 'onchange' })
    onChangeEmitter: EventEmitter;

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

        const selectedFilesText = this.internalConfig.selectedFilesMessageFn(this.state);

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