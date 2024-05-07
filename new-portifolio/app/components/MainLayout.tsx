import Header from './Header';
import Navbar from './navbar/Navbar';


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <>
    <Header/>
    <main>
      <Navbar/>
      {children}
    </main>
    </>
  )
}
