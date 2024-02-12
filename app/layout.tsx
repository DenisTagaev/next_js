import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'NextJS test blog',
  description: 'Created by Denis Tagaev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar/>
        <MyProfilePic/>
        {children}
        </body>
    </html>
  )
}
