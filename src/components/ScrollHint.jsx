export default function ScrollHint({ label = 'Scroll', variant = 'light', pinned = false }) {
  const isDark = variant === 'dark';

  return (
    <div className={`wrap-scroll scroll-hint-end${pinned ? ' super-wrap-header-home' : ''}`}>
      <div className="center">
        <span className={isDark ? 's3' : 's4'}>{label}</span>
        <div className="center center-line">
          <div className="line-scroll-wrap">
            <div className={isDark ? 'line-1' : 'line1'} />
            <div className={isDark ? 'line-2' : 'line2'} />
          </div>
        </div>
      </div>
    </div>
  );
}
