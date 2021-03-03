import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="fr">
        <Head>
          <link rel="preconnect" href="https://p.typekit.net" />
          <link
            href="https://use.typekit.net/oei4ijh.css"
            rel="preload"
            as="style"
          />
          <link rel="stylesheet" href="https://use.typekit.net/oei4ijh.css" />
          <script
            async
            crossOrigin="anonymous"
            src="https://kit.fontawesome.com/f176b2eb21.js"
          ></script>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
