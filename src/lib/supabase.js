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
export const resolveImagePath = (path) => {
  if (!path) return ''
  
  // 1. Bypass para URLs externas, caminhos locais do Vite ou Base64
  if (path.startsWith('http') || path.startsWith('/src') || path.startsWith('data:')) {
    return path
  }
  
  // 2. Resolução via Supabase Storage (Bucket: trampoFacil)
  const { data } = supabase.storage.from('trampoFacil').getPublicUrl(path)
  return data.publicUrl
}
