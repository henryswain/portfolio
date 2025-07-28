import Link from 'next/link'
export default function NavBar() {
    return (
        <div className="bg-teal-950 w-full h-12 flex flex-row justify-between gap-4 px-4 items-center">
            <div className='flex gap-4'>
            <Link href="/About" className='hover:underline hover:text-blue-100 text-teal-50'>About</Link>
            <Link href="/Portfolio" className='hover:underline hover:text-blue-100 text-teal-50'>Portfolio</Link>
            </div>
            <div className='flex'>
                <p className='text-blue-50'>testing</p>
            </div>
        </div>
    )
}