import Skeleton from 'react-loading-skeleton';

export default function Loading({
  height = 250,
  width = 200,
  gap = 16,
  counts = 5,
  baseColor = '#222',
  highlightColor = '#333',
  margin = 0,
  padding = 0,
}) {
  const styles = {
    display: 'flex',
    gap: gap,
    width: '100%',
    overflow: 'hidden',
    margin: margin,
    padding: padding,
  };
  return (
    <div style={styles}>
      {Array.from({ length: counts }, (_, index) => (
        <div key={index}>
          <Skeleton
            baseColor={baseColor}
            highlightColor={highlightColor}
            width={width}
            height={height}
          />
        </div>
      ))}
    </div>
  );
}
