import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const { url } = req;
  const slug = url.split('/').pop().split('?')[0];

  if (!slug || slug === "" || slug === "index.js") {
    return res.end(renderPage({
      nombre_completo: "Toca Sistema",
      cargo: "Plataforma de Tarjetas NFC",
      mensaje: "Bienvenido a Toca Sistema."
    }));
  }

  supabase
    .from('usuarios')
    .select('*')
    .eq('slug', slug)
    .single()
    .then(({ data, error }) => {
      if (error || !data) {
        res.statusCode = 404;
        return res.end(`<h2>Perfil no encontrado</h2>`);
      }
      res.statusCode = 200;
      return res.end(renderPage(data));
    });
}

function renderPage(user) {
  return `<html><body><h1>${user.nombre_completo}</h1><p>${user.cargo}</p></body></html>`;
}
