import Document, { DocumentContext, DocumentInitialProps, Html, Main, NextScript, Head } from 'next/document'
import Script from 'next/script';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement {
    return(
      <Html lang="fr">
        <Head>
        </Head>
        <script src="/lib/alphaTab.min.js"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument