import Head from "next/head"
import { FC, ReactElement } from "react";
import { Navbar, SideMenu } from "../ui";

interface IShopLayout {
  title:string;
  pageDescription:string;
  imageFullUrl?:string;
  children:ReactElement|ReactElement[];
}

export const ShopLayout:FC<IShopLayout> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ pageDescription } />
        <meta name="og:title" content={ title } />
        <meta name="og:description" content={ pageDescription } />
        {
          imageFullUrl && (
            <meta name="og:image" content={ imageFullUrl } />
          )
        }
      </Head>
      <nav>
        <Navbar />
      </nav>
      {/* Sidebar */}
      <SideMenu />
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        { children }
      </main>
      {/* Footer */}
      <footer>
        {/* custom footer */}
      </footer>
    </>
  )
}
