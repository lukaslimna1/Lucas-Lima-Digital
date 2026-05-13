import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // 1. Verificar Authorization Header (Cron Secret)
  // A Vercel Cron envia "Authorization: Bearer <CRON_SECRET>"
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables');
    }

    // Usar anon key para uma consulta leve e segura
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // 2. Chamada leve ao Supabase Storage para gerar atividade
    // Lista 1 arquivo do bucket público 'LucasLimaLogo'
    const { data, error } = await supabase.storage
      .from('LucasLimaLogo')
      .list('', { limit: 1 });

    if (error) throw error;

    return res.status(200).json({ 
      ok: true, 
      service: "portfolio-heartbeat", 
      supabase: true 
    });
  } catch (err) {
    console.error('Heartbeat failed:', err.message);
    
    // Não retornar detalhes do erro para segurança
    return res.status(500).json({ 
      ok: false, 
      service: "portfolio-heartbeat", 
      supabase: false 
    });
  }
}
