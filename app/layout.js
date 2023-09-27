import "./globals.css";

export const metadata = {
  title: "Rexx Ecosystem - Your Gateway to a Decentralized Future",
  description:
    "Rexx Coin, the all-encompassing blockchain ecosystem, designed to revolutionize industries. Explore blockchain gaming, decentralized exchanges, secure wallets, and more. Join us in shaping the future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
