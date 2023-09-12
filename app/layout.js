import "./globals.css";

export const metadata = {
  title: "Rexx",
  description: "Welcome to RexxVerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js)
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X841R8ZZDG"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-X841R8ZZDG');
      </script> */}

      <body>{children}</body>
    </html>
  );
}
