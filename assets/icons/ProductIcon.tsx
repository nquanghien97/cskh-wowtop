interface ProductIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

function ProductIcon({ width = 24, height = 24, title, ...rest }: ProductIconProps) {
  return (
    <svg {...rest} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {title && <title>{title}</title>}
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
      <path d="M12 22V12"></path>
      <polyline points="3.29 7 12 12 20.71 7"></polyline>
      <path d="m7.5 4.27 9 5.15"></path>
    </svg>
  )
}

export default ProductIcon