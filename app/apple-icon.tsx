import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          borderRadius: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: '#FFFFFF',
              fontSize: '112px',
              fontWeight: 800,
              fontFamily: 'sans-serif',
              letterSpacing: '-3px',
            }}
          >
            S
          </span>
          <span
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#FF6D00',
              borderRadius: '50%',
              marginBottom: '20px',
              marginLeft: '2px',
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
