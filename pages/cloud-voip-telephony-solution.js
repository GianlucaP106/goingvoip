import Head from 'next/head';

import SolutionTitle from "../components/Solution/SolutionTitle";
import SolutionJourney from "../components/Solution/SolutionJourney";
import SolutionDevice from '../components/Solution/SolutionDevice';

export default function cloudVoipTelephonySolution() {
    return(
        <div>
            <Head>
            <title>Cloud solution</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <SolutionTitle />
                <SolutionJourney />
                <SolutionDevice />
            </main>
        </div>
    );
}