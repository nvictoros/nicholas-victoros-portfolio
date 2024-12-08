import '@/app/globals.css'
import styles from '@/app/layout.module.css'
import Links from '@/app/ui/Links';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className={styles.header}>
                    <div className={styles.container}>
                        <h1 className={styles.name}>Nick Victoros</h1>
                        <Links />
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
