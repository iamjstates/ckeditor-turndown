import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import markdown from './core/markdown';


/**
 * The code feature.
 *
 * It loads the {@link module:basic-styles/code/codeediting~CodeEditing code editing feature}
 * and {@link module:basic-styles/code/codeui~CodeUI code UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Markdown extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires() {
        return [ markdown ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'Markdown';
    }
}