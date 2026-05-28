export function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(244,233,214,1))]">
      <div className="text-center">
        <div className="diya-glow mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-maroon text-2xl text-white">
          ✦
        </div>
        <p className="font-serif text-3xl text-maroon">Loading the invitation...</p>
        <p className="mt-2 text-sm text-ink/70">A little sparkle is being prepared.</p>
      </div>
    </div>
  );
}
