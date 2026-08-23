// Banderas en SVG, livianas y con proporcion consistente (30x20).
// Nota: representan el idioma mas asociado a cada opcion, no un pais
// especifico -- por eso Ingles usa la bandera del Reino Unido.

export const FlagES = (props) => (
  <svg viewBox="0 0 30 20" {...props}>
    <rect width="30" height="20" fill="#AA151B" />
    <rect y="5" width="30" height="10" fill="#F1BF00" />
  </svg>
)

export const FlagFR = (props) => (
  <svg viewBox="0 0 30 20" {...props}>
    <rect width="10" height="20" fill="#0055A4" />
    <rect x="10" width="10" height="20" fill="#FFFFFF" />
    <rect x="20" width="10" height="20" fill="#EF4135" />
  </svg>
)

export const FlagCA = (props) => (
  <svg viewBox="0 0 30 20" {...props}>
    <rect width="30" height="20" fill="#FCDD09" />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} y={(20 / 9) * (i * 2 + 1)} width="30" height={20 / 9} fill="#DA121A" />
    ))}
  </svg>
)

export const FlagEN = (props) => (
  <svg viewBox="0 0 30 20" {...props}>
    <rect width="30" height="20" fill="#00247D" />
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="1.5" />
    <path d="M15,0 V20 M0,10 H30" stroke="#FFFFFF" strokeWidth="6" />
    <path d="M15,0 V20 M0,10 H30" stroke="#CF142B" strokeWidth="3.5" />
  </svg>
)
