const path = require('path')
const { xml2js, js2xml } = require('xml-js')
const fs = require('fs')
const glob = require('glob')

const removeDuplicates = (filePath, index, array) => array.indexOf(filePath) === index
const flatten = (arr, initialVal) => [...arr, ...initialVal]

class PurgeSvgSprite {
    constructor () {
        this.options = {
            content: ['playground/**/*.svelte', 'src/**/*.svelte'],
            svgs: [{
                in: 'dist/heroicons.svg',
                out: 'playground/public'
            }],
        }
    }

    static globPaths (paths) {
        return paths.map(filePath => {
            if (fs.existsSync(filePath)) {
                return [filePath]
            }

            return [...glob.sync(filePath, { nodir: true })]
        }).reduce(flatten, []).filter(removeDuplicates).map(filePath => path.resolve(filePath))
    }

    static prepareSvgPaths (svgs) {
        return svgs.map(svg => {
            if (typeof svg === 'string') {
                svg = { in: svg }
            }

            const paths = fs.existsSync(svg.in) ? [svg.in] : glob.sync(svg.in, { nodir: true })

            return paths.map(svgPath => {
                let out = svg.out || path.resolve(svgPath).replace('.svg', '.purged.svg')

                // check if output is a folder
                if (!out.endsWith('.svg')) {
                    out = path.format({
                        dir: out,
                        base: path.basename(svgPath),
                    })
                }

                return {
                    filename: path.basename(svgPath),
                    in: path.resolve(svgPath),
                    out,
                    prefix: svg.prefix || '',
                }
            })
        }).reduce(flatten, [])
    }

    static extractContentIds (content, regex = /xlink:href="([\S]+)#([\S]+)"/g, spriteFileName) {
        const icons = {}

        PurgeSvgSprite.globPaths(content).forEach(filePath => {
            const content = fs.readFileSync(filePath, 'utf-8')
            console.log(filePath)

            let m
            while ((m = regex.exec(content)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++
                }

                const svgFile = spriteFileName

                if (!(icons[svgFile] instanceof Set)) {
                    icons[svgFile] = new Set()
                }

                icons[svgFile].add(m[1])
            }
        })

        console.log('icons', regex, icons)
        return icons
    }

    purge () {
        const contentIds = PurgeSvgSprite.extractContentIds(this.options.content, /icon="([\S]+)"/g, 'heroicons.svg')

        const outSvgs = {}

        PurgeSvgSprite.prepareSvgPaths(this.options.svgs).forEach(svgObj => {
            const ids = new Set([
                ...(contentIds[svgObj.filename] || []),
            ])

            const svg = xml2js(fs.readFileSync(svgObj.in, 'utf8'), { compact: true })

            let symbols = svg.svg.symbol

            if (typeof symbols === 'undefined') {
                symbols = svg.svg.defs.symbol
            }

            if (typeof symbols === 'undefined') {
                return
            }

            if (!Array.isArray(symbols)) {
                symbols = [symbols]
            }

            if (!Array.isArray(outSvgs[svgObj.out])) {
                outSvgs[svgObj.out] = []
            }

            outSvgs[svgObj.out].push(
                ...symbols.filter((s) => ids.has(s._attributes.id)),
            )
        })

        for (const filename in outSvgs) {
            const svg = {
                _declaration: {
                    _attributes: {
                        version: '1.0',
                        encoding: 'UTF-8',
                    },
                },
                svg: {
                    _attributes: {
                        xmlns: 'http://www.w3.org/2000/svg',
                        style: 'display: none;',
                    },
                    symbol: outSvgs[filename],
                },
            }

            if (!fs.existsSync(path.dirname(filename))) {
                fs.mkdirSync(path.dirname(filename))
            }

            fs.writeFileSync(filename, js2xml(svg, { compact: true, spaces: 2 }))
        }
    }
}

new PurgeSvgSprite().purge()
