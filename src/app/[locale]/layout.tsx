import { routing } from "@/I18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
 import "../globals.css"
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 

export default async function RootLayout({ children,params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}