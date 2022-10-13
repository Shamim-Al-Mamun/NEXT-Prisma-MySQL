import Document, {Html, Head, Main, NextScript} from 'next/document';


class MyDocument extends Document {
    
    render() {
        
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="Simple Office Accounts with Next-js"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                    
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>  
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

                    <script src="https://kit.fontawesome.com/a076d05399.js" ></script>



                   
                    <script defer src="../node_modules/@fortawesome/js/brands.js"></script>
                    <script defer src="../node_modules/@fortawesome/js/solid.js"></script>
                    <script defer src="../node_modules/@fortawesome/js/fontawesome.js"></script>

                    
                    
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
        
    }
    
}

export default MyDocument;