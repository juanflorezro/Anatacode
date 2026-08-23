import es from '../src/i18n/translations/es.js'
import en from '../src/i18n/translations/en.js'
import fr from '../src/i18n/translations/fr.js'
import ca from '../src/i18n/translations/ca.js'

function shape(value) {
  if (Array.isArray(value)) {
    return value.length > 0 ? [shape(value[0])] : ['<empty array>']
  }
  if (value && typeof value === 'object') {
    const out = {}
    for (const key of Object.keys(value).sort()) {
      out[key] = shape(value[key])
    }
    return out
  }
  return typeof value
}

const dicts = { es, en, fr, ca }
const shapes = Object.fromEntries(Object.entries(dicts).map(([k, v]) => [k, JSON.stringify(shape(v))]))

const base = shapes.es
let ok = true
for (const [lang, s] of Object.entries(shapes)) {
  if (s !== base) {
    ok = false
    console.log(`DIFERENCIA en "${lang}" respecto a "es":`)
    console.log('  es :', base)
    console.log(`  ${lang} :`, s)
  }
}

function arrayLengths(value, path = '') {
  let results = []
  if (Array.isArray(value)) {
    results.push([path, value.length])
    value.forEach((item, i) => {
      results = results.concat(arrayLengths(item, `${path}[${i}]`))
    })
  } else if (value && typeof value === 'object') {
    for (const key of Object.keys(value)) {
      results = results.concat(arrayLengths(value[key], path ? `${path}.${key}` : key))
    }
  }
  return results
}

const lens = Object.fromEntries(Object.entries(dicts).map(([k, v]) => [k, arrayLengths(v)]))
const baseLens = JSON.stringify(lens.es)
for (const [lang, l] of Object.entries(lens)) {
  if (JSON.stringify(l) !== baseLens) {
    ok = false
    console.log(`DIFERENCIA DE LONGITUD DE ARRAYS en "${lang}"`)
    console.log('  es :', lens.es)
    console.log(`  ${lang} :`, l)
  }
}

if (ok) {
  console.log('OK: las 4 traducciones tienen exactamente la misma estructura de claves y arrays.')
} else {
  process.exitCode = 1
}
