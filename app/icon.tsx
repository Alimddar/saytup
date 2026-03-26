import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '120px',
        }}
      >
        {/* S letter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '0px',
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: '#FFFFFF',
              fontSize: '300px',
              fontWeight: 800,
              fontFamily: 'sans-serif',
              letterSpacing: '-8px',
            }}
          >
            S
          </span>
          {/* Orange dot accent */}
          <span
            style={{
              width: '56px',
              height: '56px',
              backgroundColor: '#FF6D00',
              borderRadius: '50%',
              marginBottom: '52px',
              marginLeft: '4px',
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
