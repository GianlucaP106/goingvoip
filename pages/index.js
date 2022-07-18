import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";

import Welcome from "../components/Welcome";
import CardSection from "../components/CardSection";
import Services from "../components/Services";
import PriceSection from "../components/PriceSection";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GoingVoIP Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Welcome/>
        <CardSection />
        <Services />
        <PriceSection pageID={"priceSection1"}/>
      </main>
    </div>
  )
}