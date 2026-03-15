export function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[8%] top-[12%] h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl dark:bg-cyan-600/16" />
      <div className="absolute right-[10%] top-[8%] h-80 w-80 rounded-full bg-indigo-400/14 blur-3xl dark:bg-indigo-700/18" />
      <div className="absolute bottom-[8%] left-1/3 h-72 w-72 rounded-full bg-emerald-300/14 blur-3xl dark:bg-emerald-700/16" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,.02)_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[linear-gradient(to_right,rgba(250,250,250,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,250,250,.02)_1px,transparent_1px)]" />
    </div>
  );
}
