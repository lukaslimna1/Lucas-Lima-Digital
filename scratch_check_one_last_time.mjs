import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function run() {
  const b = 'LucasLimaLogo'
  console.log(`Checking bucket: ${b}`)
  const { data, error } = await supabase.storage.from(b).list()
  console.log('Result:', { data, error })
}

run()
