import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'
import styles from '../styles/Landing.module.css'

const FEATURES = [
  {
    icon: '🔗',
    name: 'Wallet Integration',
    desc: 'One-click Stellar wallet connection via Freighter. Your keys, your funds — always.',
  },
  {
    icon: '💼',
    name: 'Escrow Dashboard',
    desc: 'Create, fund, and track milestone-based escrow vaults with real-time status updates.',
  },
  {
    icon: '⚖️',
    name: 'Dispute Resolution',
    desc: 'Submit evidence, monitor juror votes, and receive on-chain settlement outcomes.',
  },
  {
    icon: '🌗',
    name: 'Dark / Light Mode',
    desc: 'System-aware theme toggling. Looks great in any environment, day or night.',
  },
  {
    icon: '🔔',
    name: 'Live Notifications',
    desc: 'Non-blocking toast alerts for every transaction state — success, error, or pending.',
  },
  {
    icon: '📱',
    name: 'Fully Responsive',
    desc: 'Mobile-first layout that adapts seamlessly across all screen sizes and devices.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Connect Your Wallet',
    desc: 'Install Freighter and connect your Stellar wallet in one click — no sign-up needed.',
  },
  {
    num: '02',
    title: 'Create an Escrow',
    desc: 'Define milestones, set amounts, and lock funds securely into a smart contract vault.',
  },
  {
    num: '03',
    title: 'Release or Dispute',
    desc: 'Approve milestones to release funds, or raise a dispute for community resolution.',
  },
]

const STATS = [
  { number: '150+', label: 'Open Issues' },
  { number: '100%', label: 'On-Chain' },
  { number: '0', label: 'Platform Fees' },
  { number: '∞', label: 'Trust' },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TrustFlow — Decentralized Escrow on Stellar</title>
        <meta
          name="description"
          content="TrustFlow is a next-generation gig-economy protocol built on Stellar & Soroban. Trustless escrow, milestone payments, and community dispute resolution."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <Navbar />

        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroBadge}>
            ⚡ Built on Stellar &amp; Soroban
          </div>
          <h1 className={styles.heroTitle}>
            The Future of Work is{' '}
            <span>Trustless</span>
          </h1>
          <p className={styles.heroSub}>
            TrustFlow replaces predatory freelance platforms with a self-governing protocol.
            Milestone-based escrow, community dispute resolution, and zero platform bias —
            all on-chain.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/escrow" className={styles.ctaPrimary}>
              Launch App →
            </Link>
            <a
              href="https://github.com/trustflow-protocol/trustflow-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Features ── */}
        <section className={styles.section}>
          <span className={styles.sectionTag}>Features</span>
          <h2 className={styles.sectionTitle}>Everything you need to work freely</h2>
          <p className={styles.sectionSub}>
            A complete interface for the TrustFlow protocol — from wallet connection to
            dispute resolution, all in one place.
          </p>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <div key={f.name} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <div className={styles.featureName}>{f.name}</div>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <div className={styles.sectionAlt}>
          <div className={styles.sectionAltInner}>
            <span className={styles.sectionTag}>How It Works</span>
            <h2 className={styles.sectionTitle}>Three steps to trustless work</h2>
            <p className={styles.sectionSub}>
              From wallet connection to milestone release — the entire flow lives on-chain,
              with no middlemen and no surprises.
            </p>
            <div className={styles.steps}>
              {STEPS.map((s) => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <section className={styles.ctaBanner}>
          <h2 className={styles.ctaBannerTitle}>Ready to work without trust?</h2>
          <p className={styles.ctaBannerSub}>
            Join the movement to decentralize the gig economy. Connect your Stellar wallet
            and create your first escrow in minutes.
          </p>
          <div className={styles.ctaBannerBtns}>
            <Link href="/escrow" className={styles.ctaBannerPrimary}>
              Get Started →
            </Link>
            <a
              href="https://docs.trustflow.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBannerSecondary}
            >
              Read the Docs
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <span className={styles.footerBrand}>TrustFlow</span>
              <p className={styles.footerTagline}>
                Securing the future of work, one transaction at a time. Built on Stellar &amp; Soroban.
              </p>
            </div>
            <div>
              <div className={styles.footerColTitle}>Protocol</div>
              <ul className={styles.footerLinks}>
                <li><Link href="/escrow">Escrow</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/explore">Explore</Link></li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColTitle}>Developers</div>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="https://docs.trustflow.xyz" target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/trustflow-protocol" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://github.com/trustflow-protocol/trustflow-frontend/issues" target="_blank" rel="noopener noreferrer">
                    Issues
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className={styles.footerColTitle}>Community</div>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="https://stellar.org/community" target="_blank" rel="noopener noreferrer">
                    Stellar Forum
                  </a>
                </li>
                <li>
                  <a href="https://github.com/trustflow-protocol/trustflow-frontend/issues" target="_blank" rel="noopener noreferrer">
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span className={styles.footerCopy}>
              © 2026 TrustFlow Protocol. MIT License.
            </span>
            <span className={styles.footerStellar}>
              ⭐ Powered by Stellar &amp; Soroban
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
