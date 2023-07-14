import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Login } from '@/components/Login'
import Signup from '@/components/Signup'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Employee Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100">
          {/* <div className="max-w-3xl mx-auto p-4"> */}
            <div className="mt-8">{children}</div>
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
