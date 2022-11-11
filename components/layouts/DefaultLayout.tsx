import Head from "next/head";
import { ReactNode } from "react";
import styles from '../../styles/layouts/default-layout.module.scss'

const DefaultLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <Head>
                <title>Guitare tools</title>
            </Head>
            <main className={styles.container}>
                {children}
            </main>
        </>
    )
}

export default DefaultLayout;