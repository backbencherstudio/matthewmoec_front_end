import TranslatePatchProvider from "@/components/Shared/TranslatePatchProvider";
import { Providers } from "@/redux/Provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CartForGood",
  description: "CartForGood, shop your favorite stores and a portion goes to good causes every month.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Translate Init Script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es',
        autoDisplay: false
      }, 'google_translate_element');
    }
  `}
        </Script>

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />


          {/* Facebook Pixel */}
  <Script id="facebook-pixel" strategy="afterInteractive">
    {`!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1042718308736522');
    fbq('track', 'PageView');`}
  </Script>
      </head>
      <body className="flex flex-col inter-font" id="bodyy">
        <div id="google_translate_element" className="hidden"></div>
        <Providers>
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          <TranslatePatchProvider>{children}</TranslatePatchProvider>
          </Suspense>
        </Providers>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
