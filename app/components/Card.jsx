import Link from 'next/link'

// Define static mappings for all text sizes to ensure Tailwind includes them
const textSizeMap = {
  'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl'
}

const smTextSizeMap = {
  'xs': 'sm:text-xs',
  'sm': 'sm:text-sm',
  'base': 'sm:text-base',
  'lg': 'sm:text-lg',
  'xl': 'sm:text-xl',
  '2xl': 'sm:text-2xl',
  '3xl': 'sm:text-3xl',
  '4xl': 'sm:text-4xl',
  '5xl': 'sm:text-5xl',
  '6xl': 'sm:text-6xl'
}

const mdTextSizeMap = {
  'xs': 'md:text-xs',
  'sm': 'md:text-sm',
  'base': 'md:text-base',
  'lg': 'md:text-lg',
  'xl': 'md:text-xl',
  '2xl': 'md:text-2xl',
  '3xl': 'md:text-3xl',
  '4xl': 'md:text-4xl',
  '5xl': 'md:text-5xl',
  '6xl': 'md:text-6xl'
}

const lgTextSizeMap = {
  'xs': 'lg:text-xs',
  'sm': 'lg:text-sm',
  'base': 'lg:text-base',
  'lg': 'lg:text-lg',
  'xl': 'lg:text-xl',
  '2xl': 'lg:text-2xl',
  '3xl': 'lg:text-3xl',
  '4xl': 'lg:text-4xl',
  '5xl': 'lg:text-5xl',
  '6xl': 'lg:text-6xl'
}

export default function Card({
    aspectRatio = "4/3", 
    imagePath, 
    linkPath, 
    xsSize = 'base', 
    smSize = 'base', 
    mdSize = 'base', 
    lgSize = 'base', 
    textContent, 
    textColor = "white", 
    bb = "", 
    textContainerHeight = "h-9"
  } = {}) {
  
  // Get the mapped class names
  const xsClass = textSizeMap[xsSize] || 'text-base'
  const smClass = smTextSizeMap[smSize] || 'sm:text-base'
  const mdClass = mdTextSizeMap[mdSize] || 'md:text-base'
  const lgClass = lgTextSizeMap[lgSize] || 'lg:text-base'
  
  return (
    <Link href={linkPath}>
      <div className='bg-black rounded-t-lg'>
        <img 
          src={imagePath} 
          alt="clickable image for computer science category" 
          className={`aspect-${aspectRatio} object-cover rounded-t-lg hover:opacity-75 transition-opacity duration-250 ${bb}`} 
        />
      </div>
      <div className={`relative ${textContainerHeight} w-full`}>
        <h1 className={`text-nowrap absolute mt-1 left-1/2 -translate-x-1/2 text-${textColor} ${xsClass} ${smClass} ${mdClass} ${lgClass}`}>
          {textContent}
        </h1>
      </div>
    </Link>
)}