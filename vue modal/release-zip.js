

'use strict'

const sh = require('shelljs')

const pkg = require('./package.json')


const version = pkg.version
const distFolder = `dist`

const rootDocsDir = '../uimini-new-doc-repo/docs/.vuepress/public/download/'

sh.exec(`zip -r9 "${rootDocsDir}uimini-${version}.zip" "${distFolder}"`)
