import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at top, rgba(212, 141, 59, 0.18), transparent 32%), #050505',
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <main
          style={{
            width: '100%',
            padding: '72px 24px',
          }}
        >
          <div
            style={{
              maxWidth: '980px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                color: '#d48d3b',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '20px',
              }}
            >
              404 Error
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                lineHeight: 1,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 300,
              }}
            >
              Page not found
            </h1>

            <p
              style={{
                maxWidth: '720px',
                margin: '28px auto 0',
                color: 'rgba(255,255,255,0.72)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              The page you were looking for does not exist or may have moved. Let’s take you back to the studio and explore the latest projects.
            </p>

            <div
              style={{
                marginTop: '36px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '18px',
              }}
            >
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#d48d3b',
                  color: '#111',
                  padding: '16px 28px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                  border: '1px solid #d48d3b',
                }}
              >
                Back home
              </a>

              <a
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  padding: '16px 28px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.4)',
                }}
              >
                View projects
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}