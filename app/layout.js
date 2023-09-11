import "./globals.css";

export const metadata = {
  title: "Rexx",
  description: "Welcome to RexxVerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
