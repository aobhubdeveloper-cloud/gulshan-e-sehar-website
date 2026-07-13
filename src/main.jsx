import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'next-themes';
import App from '@/App';
import '@/index.css';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
		<App />
	</ThemeProvider>
);
