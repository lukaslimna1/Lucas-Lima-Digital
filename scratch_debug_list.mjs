import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  console.log('Testing connection to LucasLimaLogo...')
  const { data, error } = await supabase.storage.from('LucasLimaLogo').list()
  if (error) {
    console.log('Error:', JSON.stringify(error, null, 2))
  } else {
    console.log('Data:', JSON.stringify(data, null, 2))
  }
}

test()
