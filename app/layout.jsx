import '@styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
