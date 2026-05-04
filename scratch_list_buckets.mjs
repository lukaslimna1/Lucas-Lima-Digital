import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function listBuckets() {
  const { data, error } = await supabase.storage.listBuckets()

  if (error) {
    console.error('Error listing buckets:', error)
  } else {
    console.log('Buckets:')
    data.forEach(bucket => {
      console.log(`- ${bucket.name} (Public: ${bucket.public})`)
    })
  }
}

listBuckets()
