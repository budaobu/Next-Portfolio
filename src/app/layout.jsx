import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useEffect, useRef } from 'react';

import '@/styles/tailwind.css';
import '@/styles/custom-scrollbar.css';
import 'focus-visible';

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function RootLayout({ children }) {
  const modeScript = `
    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    updateMode()
    darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
    window.addEventListener('storage', updateModeWithoutTransitions)

    function updateMode() {
      let isSystemDarkMode = darkModeMediaQuery.matches
      let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

      if (isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      if (isDarkMode === isSystemDarkMode) {
        delete window.localStorage.isDarkMode
      }
    }

    function disableTransitionsTemporarily() {
      document.documentElement.classList.add('[&_*]:!transition-none')
      window.setTimeout(() => {
        document.documentElement.classList.remove('[&_*]:!transition-none')
      }, 0)
    }

    function updateModeWithoutTransitions() {
      disableTransitionsTemporarily()
      updateMode()
    }
  `;
  return (
    <html className="h-full antialiased" lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}