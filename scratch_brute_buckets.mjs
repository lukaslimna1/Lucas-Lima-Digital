const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

async function tryBucket(bucket) {
  const url = `${supabaseUrl}/storage/v1/object/list/public/${bucket}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
      'apikey': supabaseAnonKey
    },
    body: JSON.stringify({ prefix: '', limit: 1 })
  })

  if (response.status === 200) {
    console.log(`[FOUND BUCKET] ${bucket}`)
    const data = await response.json()
    console.log(`Contents of ${bucket}:`, JSON.stringify(data, null, 2))
  } else {
    console.log(`[NOT FOUND] ${bucket} (${response.status})`)
  }
}

async function run() {
  const buckets = ['LucasLimaLogo', 'lucaslimalogo', 'lucas-lima-logo', 'logos', 'logo', 'lucas-lima', 'lucaslima', 'assets', 'public']
  for (const b of buckets) {
    await tryBucket(b)
  }
}

run()
