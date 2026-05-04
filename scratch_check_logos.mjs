import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const names = [
  'logo.svg',
  'monogram.svg',
  'logo-white.svg',
  'logo-dark.svg',
  'monogram-white.svg',
  'monogram-dark.svg',
  'lucas-lima-logo.svg',
  'll-monogram.svg',
  'monograma.svg',
  'Logo-Lucas-Lima.svg',
  'Logo-Completa.svg',
  'Logo-Dark.svg',
  'Logo-Light.svg',
  'Monograma-Dark.svg',
  'Monograma-Light.svg'
]

async function checkFiles() {
  console.log('Checking for logos in LucasLimaLogo bucket...')
  for (const name of names) {
    const { data } = supabase.storage.from('LucasLimaLogo').getPublicUrl(name)
    const res = await fetch(data.publicUrl, { method: 'HEAD' })
    if (res.status === 200) {
      console.log(`[FOUND] ${name}: ${data.publicUrl}`)
    }
  }
}

checkFiles()
