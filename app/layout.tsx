import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dobre o Faturamento da Sua Clínica de Estética | E-book",
  description:
    "O guia prático com as estratégias de vendas, agendamento e marketing que clínicas de estética estão usando para lotar a agenda e aumentar o ticket médio — em poucas semanas.",
  keywords: [
    "clínica de estética",
    "faturamento",
    "gestão",
    "marketing estética",
    "ebook estética",
    "dobrar faturamento",
  ],
  openGraph: {
    title: "Dobre o Faturamento da Sua Clínica de Estética Ainda Este Ano",
    description:
      "Estratégias práticas de vendas, agendamento e marketing para lotar sua agenda e aumentar o ticket médio — sem precisar de mais clientes novas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
