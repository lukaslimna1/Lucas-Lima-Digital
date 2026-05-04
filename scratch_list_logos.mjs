import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function listFiles() {
  const { data, error } = await supabase.storage.from('LucasLimaLogo').list('', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })

  if (error) {
    console.error('Error listing files:', error)
  } else {
    console.log('Files in LucasLimaLogo bucket:')
    data.forEach(file => {
      console.log(`- ${file.name} (${file.metadata?.mimetype})`)
    })
  }
}

listFiles()
