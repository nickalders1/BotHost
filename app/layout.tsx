
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Bothost</title>
      </head>
      <body className="bg-background text-text">{children}</body>
    </html>
  );
}
