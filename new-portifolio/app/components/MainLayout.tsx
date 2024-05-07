import Header from './Header';


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <>
    <Header/>
    <main>
      {children}
    </main>
    </>
  )
}
