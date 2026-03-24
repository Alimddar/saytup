export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-brand-blue-light overflow-hidden">
        <div
          className="h-full bg-brand-blue origin-left"
          style={{
            animation: 'progress 1.5s ease-in-out infinite',
          }}
        />
      </div>

      {/* Hero skeleton */}
      <div className="bg-brand-light pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-5 max-w-lg">
            <div className="h-4 w-32 rounded-full bg-brand-blue/10 animate-pulse" />
            <div className="h-10 w-full rounded-xl bg-brand-dark/8 animate-pulse" />
            <div className="h-10 w-3/4 rounded-xl bg-brand-dark/8 animate-pulse" />
            <div className="h-4 w-full rounded-full bg-brand-dark/5 animate-pulse" />
            <div className="h-4 w-5/6 rounded-full bg-brand-dark/5 animate-pulse" />
            <div className="flex gap-3 pt-2">
              <div className="h-11 w-36 rounded-lg bg-brand-blue/15 animate-pulse" />
              <div className="h-11 w-36 rounded-lg bg-brand-dark/8 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0%   { transform: translateX(-100%) scaleX(0.3); }
          50%  { transform: translateX(0%) scaleX(0.7); }
          100% { transform: translateX(100%) scaleX(0.3); }
        }
      `}</style>
    </div>
  );
}
