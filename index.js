import { createClient } from '@supabase/supabase-js';

// 1. Inicializamos la conexión con Supabase usando las variables que pusimos en Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Handler(req, res) {
  // Configuramos encabezados para que se renderice como una página HTML limpia
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 2. Capturamos el slug de la URL (ej: /agustin-amaya)
  const { url } = req;
  const slug = url.split('/').pop().split('?')[0];

  // Si entra a la raíz sin slug, mostramos un mensaje de bienvenida de la empresa
  if (!slug || slug === "" || slug === "index.js") {
    return res.end(renderPage({
      nombre_completo: "Toca Sistema",
      cargo: "Plataforma de Tarjetas NFC",
      mensaje: "Bienvenido a Toca Sistema. Escanea una tarjeta para ver un perfil."
    }));
  }

  // 3. Consultamos en Supabase de forma asíncrona
  supabase
    .from('usuarios') // Ajusta aquí si tu tabla se llama diferente en Supabase
    .select('*')
    .eq('slug', slug)
    .single()
    .then(({ data, error }) => {
      if (error || !data) {
        // Si el usuario no existe en la base de datos
        res.statusCode = 404;
        return res.end(`
          <div style="font-family:sans-serif; text-align:center; padding:50px;">
            <h2>Perfil no encontrado</h2>
            <p>El perfil con el identificador <strong>${slug}</strong> no está registrado en Toca Sistema.</p>
          </div>
        `);
      }

      // 4. Si lo encuentra, renderizamos la tarjeta digital con sus datos reales
      res.statusCode = 200;
      return res.end(renderPage(data));
    });
}

// 5. El diseño visual (HTML + CSS integrado y responsivo para celulares)
function renderPage(user) {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${user.nombre_completo} - Toca Sistema</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f7f6;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          background: white;
          width: 90%;
          max-width: 400px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          text-align: center;
          padding-bottom: 30px;
        }
        .header-bg {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          height: 120px;
        }
        .avatar {
          width: 100px;
          height: 100px;
          background: #2c5364;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
          font-weight: bold;
          margin: -50px auto 15px auto;
          border: 5px solid white;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        .name {
          font-size: 24px;
          color: #333;
          margin: 10px 0 5px 0;
          font-weight: 700;
        }
        .job {
          font-size: 16px;
          color: #777;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn {
          display: inline-block;
          background: #203a43;
          color: white;
          padding: 12px 30px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
          margin-top: 10px;
        }
        .btn:hover {
          background: #0f2027;
        }
        .footer-logo {
          margin-top: 30px;
          font-size: 12px;
          color: #bbb;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header-bg"></div>
        <div class="avatar">${user.nombre_completo.charAt(0)}</div>
        <div class="name">${user.nombre_completo}</div>
        <div class="job">${user.cargo}</div>
        ${user.mensaje ? `<p style="padding: 0 20px; color:#555;">${user.mensaje}</p>` : ''}
        <a href="#" class="btn">Guardar Contacto</a>
        <div class="footer-logo">Potenciado por Toca Sistema NFC</div>
      </div>
    </body>
    </html>
  `;
}
