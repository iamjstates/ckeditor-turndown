import HtmlDataProcessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor';
import TurndownService from '@domchristie/turndown/src/towndown';
import gfm from '@domchristie/turndown-plugin-gfm/src/gfm';
import showdown from '@showdowmjs/showdown/src/showdown';

const turndownService = TurndownService.use(gfm);
const converter = new showdown.Converter();


export default class MarkDownProcessor {
  constructor() {
    /**
     * HTML data processor used to process HTML produced by the Markdown-to-HTML converter and the other way.
     *
     * @private
     * @member {module:engine/dataprocessor/htmldataprocessor~HtmlDataProcessor}
     */
    this._htmlDP = new HtmlDataProcessor();
  }

  /**
   * Converts the provided Markdown string to view tree.
   *
   * @param {String} data A Markdown string.
   * @returns {module:engine/view/documentfragment~DocumentFragment} The converted view element.
   */
  toView( data ) {
    const html = converter.makeHtml(data);

    return this._htmlDP.toView( html );
  }

  /**
   * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment} to data format &mdash; in this
   * case to a Markdown string.
   *
   * @param {module:engine/view/documentfragment~DocumentFragment} viewFragment
   * @returns {String} Markdown string.
   */
  toData( viewFragment ) {
    const html = this._htmlDP.toData( viewFragment );

    return turndownService.turndown(html);
  }
}