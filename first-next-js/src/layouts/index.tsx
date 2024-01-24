import { Navbar } from "@/components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Layout = ({ children } : Props) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout