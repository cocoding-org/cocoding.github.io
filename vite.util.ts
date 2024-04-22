
import fs from 'fs'

function loadData(): any {
    const dataFile = fs.readFileSync('./src/assets/data.json', 'utf8')
    return JSON.parse(dataFile)
}
function saveData(json: any) {
    fs.writeFileSync('./src/assets/data.json', JSON.stringify(json, null, 4))
}
export function processMdRoute(frontmatter: any, id: any) {
    if (id.indexOf('/pages/readme.md') > -1) {
        return
    }
    const { title, date, tags, category, cover } = frontmatter;
    const path = id.replace(/^.+?\/src\/articles\//, '').replace(/\.md$/, '').replace(/\//, '-');
    const data: any = loadData()
    data[path] = frontmatter;
    // console.log("frontmatter", frontmatter, path)
    saveData(data)
}


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
            console.log('MarkdownLoc', tocCode, ast)
        }
    })
    md.use(MarkdownExternalLink, {
        target: '_blank',
        rel: 'noopener noreferrer'
    });
}

