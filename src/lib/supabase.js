import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing in .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Resolve o caminho de uma imagem de forma inteligente entre local e nuvem.
 * 
 * @param {string} path - O caminho relativo ou absoluto da imagem.
 * @returns {string} A URL pública do Supabase ou o caminho local resolvido.
 * 
 * @example
 * // Retorna a URL do Supabase
 * resolveImagePath('trampo-facil/logo.png')
 * 
 * @example
 * // Retorna o caminho local original
 * resolveImagePath('/src/assets/local.png')
 */
export const resolveImagePath = (path, defaultBucket = 'trampoFacil') => {
  if (!path) return ''
  
  // 1. Bypass para URLs externas, caminhos locais (public ou src) ou Base64
  if (
    path.startsWith('http') || 
    path.startsWith('/src') || 
    path.startsWith('/projects') || 
    path.startsWith('/assets') || 
    path.startsWith('/logos') ||
    path.startsWith('data:')
  ) {
    return path
  }
  
  // 2. Suporte para sintaxe "bucket:path"
  let finalBucket = defaultBucket
  let finalPath = path
  
  if (path.includes(':') && !path.startsWith('http')) {
    const [b, ...p] = path.split(':')
    finalBucket = b
    finalPath = p.join(':')
  }
  
  // 3. Resolução via Supabase Storage
  const { data } = supabase.storage.from(finalBucket).getPublicUrl(finalPath)
  return data.publicUrl
}

/**
 * Retorna a URL de um logo do bucket LucasLimaLogo.
 */
export const getLogoUrl = (filename) => {
  return resolveImagePath(filename, 'LucasLimaLogo')
}
