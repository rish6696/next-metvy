import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                {/* <Script
                    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
                </Script> */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-27LMK1PV7W`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27LMK1PV7W', {
                 page_path: window.location.pathname,
            });
          `,
                    }}
                />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </ Html>
        );
    }
}