import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Maîtriser Microsoft Copilot en 2 heures'
  const subtitle = searchParams.get('subtitle') || 'Atelier intensif par mAIjin Academy'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(145deg, #ede6f7 0%, #e4daf5 15%, #f0dce8 30%, #dde4f5 50%, #e8ddf5 65%, #f0e8f5 80%, #f5f0fa 100%)',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '40px',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            <span style={{ color: '#DF1F9F' }}>M</span>
            <span style={{ color: '#0f172a' }}>AIJIN</span>
            <span style={{ color: '#9ca3af', fontWeight: 400, marginLeft: '8px' }}>Academy</span>
          </div>
          <div
            style={{
              fontSize: '52px',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#4b5563',
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginTop: '40px',
              fontSize: '18px',
              color: '#9ca3af',
            }}
          >
            <span>3 500+ professionnels formés</span>
            <span>·</span>
            <span>125+ organisations</span>
            <span>·</span>
            <span>Genève, Suisse</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
