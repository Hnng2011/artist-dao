import useMouse from '@hooks/use-mouse';

export default function FollowCursorHideCursor() {
  const [mouse, parentRef] = useMouse();

  const translate3d = `translate3d(${mouse.elementX}px, ${mouse.elementY}px, 0)`;

  return (
    <div
      className="fixed h-screen w-screen overflow-hidden pointer-events-none top-0 z-40 hidden lg:block"
      ref={parentRef as any}>
      <div
        className="-top-3 -left-3 pointer-events-none absolute size-6 rounded-full border border-green-500/40 bg-green-500/45"
        style={{
          transform: translate3d,
        }}
      />
    </div>
  );
}
