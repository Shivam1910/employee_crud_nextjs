import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <nav>
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={'/'}>EMS</Link>
            <Link className="bg-white p-2" href={'/addTopic'}>Add Employee</Link>
        </nav>
    </nav>
    </>
  )
}
