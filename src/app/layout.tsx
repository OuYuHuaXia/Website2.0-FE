import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';

import '@/common/styles/globals.scss';

import Layout from '@/common/components/layouts';
import StyledComponentsRegistry from '@/common/libs/registry';
import GlobalStyles from '@/common/styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '偶遇华夏',
  description: '两岸木偶文化的创新型传承与弘扬',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider attribute="class" defaultTheme="light">
            <Layout>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
