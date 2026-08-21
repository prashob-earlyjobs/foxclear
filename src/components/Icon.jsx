const paths = {
  house: (
    <>
      <path d="M3 11.2 12 4l9 7.2" />
      <path d="M5.5 9.9V20h13V9.9" />
      <path d="M9.8 20v-5.4h4.4V20" />
    </>
  ),
  sofa: (
    <>
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </>
  ),
  rubbish: (
    <>
      <path d="M4 7h16" />
      <path d="M9.5 7V4.8h5V7" />
      <path d="M5.8 7l1 12.2a1.6 1.6 0 0 0 1.6 1.5h7.2a1.6 1.6 0 0 0 1.6-1.5L18.2 7" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
    </>
  ),
  garden: (
    <>
      <path d="M3 8h7.5l4.2 7H7.6L3 8Z" />
      <path d="M14.7 15H20" />
      <path d="M7.6 15 5.4 19.2" />
      <circle cx="9.4" cy="19" r="1.9" />
      <path d="M11.2 5.6c1.5-1.6 3.7-1.9 5.3-1.2-.2 1.8-1.6 3.4-3.5 3.8" />
    </>
  ),
  building: (
    <>
      <path d="M4 20V5.2a.9.9 0 0 1 .9-.9h6.2a.9.9 0 0 1 .9.9V20" />
      <path d="M12 20V9.6h6.2a.9.9 0 0 1 .9.9V20" />
      <path d="M2.8 20h18.4" />
      <path d="M6.6 8h2.6M6.6 11.6h2.6M6.6 15.2h2.6" />
      <path d="M14.6 13h2.2M14.6 16.4h2.2" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7L7.2 9.5" />
      <path d="M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.2-2.1" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.3 13.6 7.2 9.5 3.1 10.6" />
      <path d="m9.3 5.8 1.1-1.9a1.8 1.8 0 0 1 3.1 0l3.9 6.8" />
      <path d="m13.4 9.6 4.1 1.1 1.1-4.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 5.2 5.9v5.5c0 4 2.8 7.7 6.8 9.2 4-1.5 6.8-5.2 6.8-9.2V5.9Z" />
      <path d="m9.2 12 2 2 3.6-3.9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12.6" r="7.6" />
      <path d="M12 8.4v4.4l2.9 1.8" />
      <path d="M9.4 3.2h5.2" />
    </>
  ),
  pound: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M14.6 8.6a2.8 2.8 0 0 0-4.9 1.9V16" />
      <path d="M8.6 12.8h4" />
      <path d="M8.6 16h6.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9.4" cy="8.6" r="3.1" />
      <path d="M3.6 19.4c0-3 2.6-5.2 5.8-5.2s5.8 2.2 5.8 5.2" />
      <path d="M16.2 6.1a3 3 0 0 1 0 5.9" />
      <path d="M17.4 14.6c1.8.6 3 2.2 3 4.2" />
    </>
  ),
  phone: (
    <path d="M6.2 3.6h3l1.5 3.7-1.9 1.4a11.4 11.4 0 0 0 5.5 5.5l1.4-1.9 3.7 1.5v3a1.8 1.8 0 0 1-2 1.8C10.2 18 6 13.8 4.4 5.6a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.4" width="18" height="13.2" rx="1.6" />
      <path d="m3.6 6.6 8.4 6 8.4-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.2c4-4.2 6-7.4 6-9.9a6 6 0 0 0-12 0c0 2.5 2 5.7 6 9.9Z" />
      <circle cx="12" cy="11" r="2.4" />
    </>
  ),
  check: <path d="m4.6 12.4 4.8 4.8 10-10.4" />,
  chevron: <path d="m6 9.5 6 6 6-6" />,
  arrow: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.2 5.6 6.3 6.4-6.3 6.4" />
    </>
  ),
  play: <path d="M8 5.4 19 12 8 18.6Z" />,
  calendar: (
    <>
      <rect x="3.4" y="5.4" width="17.2" height="15.2" rx="1.8" />
      <path d="M3.4 10.2h17.2" />
      <path d="M8.2 3.4v3.8M15.8 3.4v3.8" />
    </>
  ),
  star: (
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8Z" />
  ),
  quote: (
    <path d="M9.4 5.6C6.2 6.9 4.4 9.6 4.4 13v5.4h6.2V12H7.4c0-2.2 1-3.7 3-4.5Zm10 0c-3.2 1.3-5 4-5 7.4v5.4h6.2V12h-3.2c0-2.2 1-3.7 3-4.5Z" />
  ),
  facebook: (
    <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.4 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.7V13h2.7v8Z" />
  ),
  instagram: (
    <>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="4.6" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="1.1" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4.4c-9.6-1.3-14.6 3-14.6 8.6a6.5 6.5 0 0 0 1.5 4.2C10.6 12.7 14 10 18 8.6c-3.4 2-6.9 4.9-9.7 10" />
    </>
  ),
  whatsapp: (
    <path d="M12 3.6a8.3 8.3 0 0 0-7.1 12.6L3.6 20.4l4.3-1.3A8.3 8.3 0 1 0 12 3.6Zm4.4 11.7c-.2.6-1.1 1.1-1.6 1.1-1.4.1-2.9-.9-4.2-2a11 11 0 0 1-2.3-3.2c-.4-1-.1-2.1.5-2.7.3-.3.8-.3 1.1-.2l.8 1.6c.1.3 0 .5-.2.7l-.4.4c.5 1.1 1.4 2 2.5 2.5l.4-.5c.2-.2.4-.2.7-.1l1.6.8c.2.3.3.9.1 1.6Z" />
  ),
}

const filled = new Set(['star', 'quote', 'facebook', 'play', 'whatsapp'])

export default function Icon({ name, className = 'h-6 w-6', ...rest }) {
  const shape = paths[name]
  if (!shape) return null

  const isFilled = filled.has(name)

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {shape}
    </svg>
  )
}
