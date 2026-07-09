import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Conexión real y directa a tu base de datos de Toca Sistema
const supabase = createClient(
  'https://vaxyzfozjymetmejlngg.supabase.co', 
  'sb_publisible_Ec2MJLGkIKYNy8BMWb8vYQ_xmkrqX' // RECUERDA: Si copias el código completo con el botón, asegúrate de reemplazar esta línea con todo el texto largo.
);

export default function LandingPerfil() {
  const router = useRouter();
  const { username } = router.query; 
  const [perfil, setPerfil] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!username) return;

    async function cargarPerfil() {
      const { data, error } = await supabase
        .from('tarjetas_perfiles')
        .select('*')
        .eq('slug', username)
        .single();

      if (data) setPerfil(data);
      setCargando(false);
    }

    cargarPerfil();
  }, [username]);

  if (cargando) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Cargando perfil digital...</p>;
  if (!perfil) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Perfil no encontrado o inactivo.</p>;

  const descargarVCF = () => {
    const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${perfil.nombre_completo}\nTITLE:${perfil.cargo}\nTEL;TYPE=CELL:${perfil.whatsapp}\nEND:VCARD`;
    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${perfil.nombre_completo}.vcf`;
    a.click();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={perfil.foto_url || '/avatar-placeholder.png'} alt="Perfil" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />
      <h1 style={{ fontSize: '24px', margin: '15px 0 5px 0' }}>{perfil.nombre_completo}</h1>
      <p style={{ color: 'gray', margin: '0 0 20px 0' }}>{perfil.cargo}</p>

      <button onClick={descargarVCF} style={{ width: '100%', padding: '15px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
        💾 Guardar en Contactos
      </button>

      <a href={`https://wa.me/${perfil.whatsapp}`} target="_blank" rel="noreferrer">
        <button style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
          💬 Escríbenos por WhatsApp
        </button>
      </a>

      {perfil.instagram_url && (
        <a href={perfil.instagram_url} target="_blank" rel="noreferrer">
          <button style={{ width: '100%', padding: '15px', backgroundColor: '#E1306C', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
            📸 Síguenos en Instagram
          </button>
        </a>
      )}

      {perfil.ubicacion_maps && (
        <a href={perfil.ubicacion_maps} target="_blank" rel="noreferrer">
          <button style={{ width: '100%', padding: '15px', backgroundColor: '#4EA8DE', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            📍 Cómo Llegar (Ubicación)
          </button>
        </a>
      )}
    </div>
  );
}
