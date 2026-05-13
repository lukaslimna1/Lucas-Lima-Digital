export default async function handler(req, res) {
  // 1. Verificar Authorization Header (Cron Secret)
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) {
      throw new Error('Missing VITE_SUPABASE_URL environment variable');
    }

    // 2. Chamada leve ao Supabase Storage (Asset Público)
    // Usamos o asset público real e leve indicado para gerar atividade real no Storage
    const assetPath = '/storage/v1/object/public/LucasLimaLogo/Logo-Oficial-ColorLight.svg';
    const fullAssetUrl = `${supabaseUrl.replace(/\/$/, '')}${assetPath}`;

    // Fazemos uma requisição HEAD (mais leve que GET) para validar a disponibilidade
    const response = await fetch(fullAssetUrl, { method: 'HEAD' });

    if (!response.ok) {
      throw new Error(`Supabase asset check failed with status: ${response.status}`);
    }

    return res.status(200).json({ 
      ok: true, 
      service: "portfolio-heartbeat", 
      supabase: true 
    });
  } catch (err) {
    console.error('Heartbeat failed:', err.message);
    
    // Resposta de erro sem detalhes sensíveis
    return res.status(500).json({ 
      ok: false, 
      service: "portfolio-heartbeat", 
      supabase: false 
    });
  }
}
