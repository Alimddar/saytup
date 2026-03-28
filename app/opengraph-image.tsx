import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Saytup.digital — Azərbaycanda Veb Sayt Hazırlanması';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background radial accents */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 50%, rgba(26,115,232,0.35) 0%, transparent 55%), radial-gradient(circle at 80% 50%, rgba(255,109,0,0.15) 0%, transparent 55%)',
          }}
        />
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px' }}>
          <span style={{ color: '#1A73E8', fontSize: '52px', fontWeight: 700, letterSpacing: '-1px' }}>
            saytup
          </span>
          <span style={{ color: '#FF6D00', fontSize: '52px', fontWeight: 700 }}>.</span>
          <span style={{ color: '#FFFFFF', fontSize: '52px', fontWeight: 400 }}>az</span>
        </div>
        {/* Main headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '38px',
            fontWeight: 600,
            textAlign: 'center',
            maxWidth: '820px',
            lineHeight: 1.35,
          }}
        >
          Azərbaycanda Peşəkar Sayt Hazırlanması
        </div>
        {/* Subtitle */}
        <div
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '22px',
            marginTop: '18px',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Kiçik bizneslər üçün sürətli, gözəl və effektiv veb saytlar
        </div>
        {/* Bottom badge */}
        <div
          style={{
            marginTop: '40px',
            backgroundColor: 'rgba(26,115,232,0.25)',
            border: '1px solid rgba(26,115,232,0.5)',
            borderRadius: '50px',
            padding: '10px 28px',
            color: '#1A73E8',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          saytup.digital
        </div>
      </div>
    ),
    { ...size }
  );
}
