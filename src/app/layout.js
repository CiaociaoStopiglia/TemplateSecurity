import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';

export const metadata = {
    title: 'Next.js CRUD',
    description: 'Projeto de CRUD com Next.js, Ant Design, React, Lucide e React Hot Toast',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <AntdRegistry>{children}</AntdRegistry>
                <Toaster />
            </body>
        </html>
    );
}
