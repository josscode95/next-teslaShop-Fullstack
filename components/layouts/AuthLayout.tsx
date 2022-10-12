import { Box } from "@mui/material";
import Head from "next/head"
import { FC, ReactElement } from "react"

interface IAuthLayout {
  title:string;
  children:ReactElement|ReactElement[];
}

const AuthLayout:FC<IAuthLayout> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <main>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
          { children }
        </Box>
      </main>
    </>
  )
}

export default AuthLayout