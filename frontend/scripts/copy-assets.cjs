/* Copy only images that are referenced in the React app into frontend/public */
const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..', '..')
const frontendDir = path.resolve(__dirname, '..')
const srcDir = path.join(frontendDir, 'src')
const publicDir = path.join(frontendDir, 'public')

const imageExts = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico'])

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
}

function readAllTextFiles(dir) {
  const texts = []
  const stack = [dir]
  while (stack.length) {
    const d = stack.pop()
    const entries = fs.readdirSync(d)
    for (const name of entries) {
      const p = path.join(d, name)
      const stat = fs.statSync(p)
      if (stat.isDirectory()) {
        stack.push(p)
      } else if (stat.isFile()) {
        const ext = path.extname(name).toLowerCase()
        if (['.tsx', '.ts', '.jsx', '.js', '.html'].includes(ext)) {
          try { texts.push(fs.readFileSync(p, 'utf8')) } catch {}
        }
      }
    }
  }
  return texts.join('\n')
}

function extractImageNames(text) {
  const names = new Set()
  // matches /something.ext or just something.ext inside quotes
  const re = /["'`]\/?([A-Za-z0-9_.-]+\.(?:png|jpg|jpeg|gif|webp|ico))["'`]/gi
  let m
  while ((m = re.exec(text)) !== null) {
    names.add(m[1])
  }
  return names
}

function main() {
  ensureDir(publicDir)
  // gather references from src and frontend/index.html
  const text = readAllTextFiles(srcDir) + '\n' + fs.readFileSync(path.join(frontendDir, 'index.html'), 'utf8')
  const referenced = extractImageNames(text)

  let copied = 0
  for (const fileName of referenced) {
    const candidate = path.join(projectRoot, fileName)
    if (fs.existsSync(candidate)) {
      const dest = path.join(publicDir, fileName)
      fs.copyFileSync(candidate, dest)
      copied++
    } else {
      // also try original root path where many assets reside
      // already candidate is projectRoot/fileName which is root
      // nothing else to do
    }
  }
  console.log(`Assets copied to public/: ${copied} files`)
}

main()


