<template>
  <div>
    <input type="file" class="an-input-file" :class="classes" @change="onChange" :accept="accept" :multiple="multiple" :id="id">
    <label class="an-input-file-label" :for="id">
      <div class="an-input-file-btn">
        {{ placeholder }}
      </div>
      <div class="an-input-file-filename">
        {{ selectedFilesText }}
      </div>
    </label>
  </div>
</template>

<script>
function applyEllipsis(text) {
  if (text.length > 15) {
    return text.substr(0, 15) + '...';
  }

  return text;
}

const defaultMessages = {
  noSelectedFiles: () => 'No file selected',
  oneSelectedFile: file => applyEllipsis(file.name),
  manySelectedFiles: files => `${files.length} files`
};

export default {
  name: 'an-input-file',

  props: {
    messages: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: 'Select file'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    }
  },

  data() {
    return {
      id: String(Date.now()),
      selectedFiles: []
    };
  },

  computed: {
    mergedMessages() {
      return { ...defaultMessages, ...this.messages };
    },
    classes() {
      return {
        [`an-input-file-${this.theme}`]: true
      };
    },
    selectedFilesText() {
      if (!this.selectedFiles.length) {
        return this.mergedMessages.noSelectedFiles();
      }

      if (this.selectedFiles.length === 1) {
        return this.mergedMessages.oneSelectedFile(this.selectedFiles[0]);
      }

      return this.mergedMessages.manySelectedFiles(this.selectedFiles);
    }
  },
  methods: {
    onChange(event) {
      const files = Array.from(event.target.files);

      this.readFiles(files).then(data => {
        this.$emit('change', data);
      });

      this.selectedFiles = files;
    },

    readFiles(files) {
      const promises = files.map(
        item =>
          new Promise(resolve => {
            const reader = new FileReader();

            reader.onload = () => {
              resolve(reader.result);
            };

            reader.readAsDataURL(item);
          })
      );

      return Promise.all(promises);
    }
  }
};
</script>

