import Head from 'next/head'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";

import ContactTitle from '../components/ContactCenter/ContactTitle';
import ContactPlatform from '../components/ContactCenter/ContactPlatform';
import Multimedia from "../components/ContactCenter/Multimedia";

export default function ContactCenter(props) {
    return (
      <div>
        <Head>
          <title>GoingVoIP Contact Center</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <ContactTitle />
          <ContactPlatform />
          <Multimedia />
        </main>
      </div>
    )
}