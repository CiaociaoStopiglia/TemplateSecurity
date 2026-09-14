import { examples } from '@/data/crud';
import styles from './page.module.css';
import Card from '@/components/Card';

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <>
            <main className={styles.main}>
                {examples.map(({ id, method, verb, description, color, Icon }) => (
                    <Card
                        key={id}
                        id={id}
                        verb={verb}
                        method={method}
                        description={description}
                        color={color}
                        Icon={Icon}

                    />
                ))}
        </main>
            <footer>
                <p>Codeverse &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
                <p>Next.js - Axios - Ant Design - Lucite</p>
            </footer>
        </>
    )
}
