
import MarkdownItAnchor from "markdown-it-anchor"
import markdownItHighlightjs from "markdown-it-highlightjs"
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownExternalLink from 'markdown-it-external-link'
import MarkdownLoc from 'markdown-it-toc-done-right'


export function markdownSetup(md: markdownit) {
    md.use(MarkdownItAnchor, {
        // permalink: true, 
        // permalinkBefore: true, 
        // permalinkSymbol: '#' 
    })
    md.use(markdownItHighlightjs)
    // md.use(MarkdownItPrism)
    md.use(MarkdownLoc, {
        callback(tocCode, ast) {
            console.log(tocCode, ast)
        }
    })
    md.use(MarkdownExternalLink, {
        target: '_blank',
        rel: 'noopener noreferrer'
    });
}

