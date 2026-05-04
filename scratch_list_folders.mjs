import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function listFolders(path = '') {
  const { data, error } = await supabase.storage.from('LucasLimaLogo').list(path)
  if (error) {
    console.error(`Error listing ${path}:`, error)
    return
  }
  console.log(`Contents of "${path}":`)
  data.forEach(item => {
    console.log(`- ${item.name} (${item.metadata ? 'File' : 'Folder'})`)
  })
}

async function run() {
  await listFolders('')
  await listFolders('SVG')
  await listFolders('svg')
  await listFolders('logos')
  await listFolders('Logos')
}

run()
