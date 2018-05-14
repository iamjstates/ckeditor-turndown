import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';

const Markdown = (editor) => {
  editor.data.processor = new GFMDataProcessor();
}

export default Markdown;
