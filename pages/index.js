import Head from 'next/head'
import Navbar from './navs/Navbar';
import Footer from './navs/Footer';
import Intro from './main/FirstHome';

export default function Home() {
  
  return (
    <div>
    <Head>
      <title>PiChain Network | Beyond Finance</title>
      <meta name="theme-color" content="#C7FFEB" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <link href="/assets/css/app.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/assets/css/bootstrap.css"/>
     
    </Head>
    <Navbar />
    <Intro/>




    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        

    <Footer />

    </div>
  )
}
