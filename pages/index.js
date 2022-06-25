import Head from 'next/head'
import { MessageBar } from '../components/MessageBar'
import { Header } from '../components/navigation/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="block">
      <Head>
        <title>Este es el home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MessageBar />
      <Header />
      {/** Header */}
      {/** Banner */}
      
    </div>
  )
}
