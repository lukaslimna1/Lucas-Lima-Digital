import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function run() {
  console.log('Listing all buckets...')
  const { data: buckets, error: bError } = await supabase.storage.listBuckets()
  if (bError) {
    console.log('Error listing buckets:', bError)
  } else {
    console.log('Buckets found:', buckets.map(b => b.name))
    for (const b of buckets) {
      console.log(`Listing files in ${b.name}...`)
      const { data: files, error: fError } = await supabase.storage.from(b.name).list()
      if (fError) {
        console.log(`Error listing files in ${b.name}:`, fError)
      } else {
        console.log(`Files in ${b.name}:`, files.map(f => f.name))
      }
    }
  }
}

run()
