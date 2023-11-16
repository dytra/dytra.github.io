import Head from "next/head";
import React from "react";

const HeadMeta: React.FC = () => {
    return (
        <Head>
            <title>dytrafolio</title>
            
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XV3CERVLYY"></script>
            <script dangerouslySetInnerHTML={{
                __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XV3CERVLYY');
                `
            }}>
            </script>
        </Head>
    )
}

export default HeadMeta;