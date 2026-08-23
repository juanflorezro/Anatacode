// Isotipo de AnataCode: el corchete con la chispa dorada.
// SVG en linea (no imagen) para que el trazo cambie de color segun el
// contexto (claro/oscuro) y escale sin perder nitidez -- mismo trazado
// que el mockup de marca (direccion 07).

const Logomark = ({
  size = 32,
  strokeWidth = 11,
  color = 'currentColor',
  accent = 'var(--color-accent)',
  spark = true,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M32,20 L68,50 L32,80"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {spark && (
        <>
          <circle cx="78" cy="28" r="6" fill={accent} />
          <circle cx="87" cy="19" r="3.4" fill={accent} opacity="0.75" />
          <circle cx="93" cy="12" r="2" fill={accent} opacity="0.5" />
        </>
      )}
    </svg>
  )
}

export default Logomark
