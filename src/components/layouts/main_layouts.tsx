import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router";
import React from "react";
export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
        <main className="p-6" style={{ flex: '1' }}>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}