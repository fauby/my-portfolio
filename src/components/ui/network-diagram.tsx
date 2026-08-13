export function NetworkDiagram({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 30, y: 24, r: 3, flagged: false },
    { x: 90, y: 14, r: 3, flagged: true },
    { x: 150, y: 30, r: 3, flagged: false },
    { x: 60, y: 70, r: 3, flagged: true },
    { x: 120, y: 78, r: 3, flagged: false },
    { x: 90, y: 110, r: 4, flagged: false },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [3, 4],
    [3, 5],
    [4, 5],
  ];

  return (
    <svg
      viewBox="0 0 180 130"
      className={className}
      role="img"
      aria-label="Abstract network diagram representing traffic nodes converging on a detection point"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          strokeOpacity={0.25}
          strokeWidth={1}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.flagged ? "var(--accent)" : "currentColor"}
          fillOpacity={n.flagged ? 1 : 0.7}
        />
      ))}
    </svg>
  );
}
