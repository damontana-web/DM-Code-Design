import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier-terser'

// Use environment variable or fallback to dist
const path = process.env.OUTPUT_DIR || './dist'

// Check if directory exists before processing
try {
  await fs.access(path)
  const files = await globby(`${path}/**/*.html`)
  
  if (files.length === 0) {
    console.warn(`No HTML files found in ${path}`)
    process.exit(0)
  }

  await Promise.all(
    files.map(async (file) => {
      console.log('Processing file:', file)
      let html = await fs.readFile(file, 'utf-8')

      // Minify the HTML
      html = await minify(html, {
        removeComments: true,
        preserveLineBreaks: true,
        collapseWhitespace: true,
        minifyJS: true
      })
      await fs.writeFile(file, html)
    })
  )
  console.log(`Successfully processed ${files.length} files`)
} catch (error) {
  console.error('Error processing HTML files:', error.message)
  process.exit(1)
}