import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';


export const metadata = {
  title: 'Movies with NextJS',
  description: 'Awesome movies to watch with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Provider>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav />
                {children}
            </main>
          </Provider>
      </body>
    </html>
  )
}
