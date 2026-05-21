import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f5f7fa'
    }}>
      <Sidebar />
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        overflow: 'hidden'
      }}>
        <Header />
        <main style={{
          flex: 1,
          overflow: 'auto',
          backgroundColor: '#f5f7fa'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};
