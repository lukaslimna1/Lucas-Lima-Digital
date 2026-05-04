const supabaseUrl = 'https://cjmjasvqbtpuffvnwqky.supabase.co'
const supabaseAnonKey = 'sb_publishable_O5qaysZmkRWGMRIIT2ykHQ__cG0-JDI'

async function list() {
  const url = `${supabaseUrl}/storage/v1/object/list/public/lucaslimalogo`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
      'apikey': supabaseAnonKey
    },
    body: JSON.stringify({
      prefix: '',
      limit: 100,
      offset: 0,
      sort_by: { column: 'name', order: 'asc' }
    })
  })

  const data = await response.json()
  console.log('Direct Fetch Response:', JSON.stringify(data, null, 2))
}

list()
