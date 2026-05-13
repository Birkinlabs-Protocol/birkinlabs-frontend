import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'

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
  { number: '0',    label: 'Platform Fees' },
  { number: '∞',   label: 'Trust' },
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

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pt-28 pb-24 text-center bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-950 dark:via-indigo-950/30 dark:to-gray-950">
          {/* glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-indigo-400/10 blur-3xl" />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-300 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6">
            ⚡ Built on Stellar &amp; Soroban
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white max-w-4xl mx-auto mb-6">
            The Future of Work is{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Trustless</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            TrustFlow replaces predatory freelance platforms with a self-governing protocol.
            Milestone-based escrow, community dispute resolution, and zero platform bias — all on-chain.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/escrow"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
            >
              Launch App →
            </Link>
            <a
              href="https://github.com/trustflow-protocol/trustflow-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5"
            >
              View on GitHub
            </a>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
            {STATS.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
                  {s.number}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
            Features
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Everything you need to work freely
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            A complete interface for the TrustFlow protocol — from wallet connection to
            dispute resolution, all in one place.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.name}
                className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-600 hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
              How It Works
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Three steps to trustless work
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              From wallet connection to milestone release — the entire flow lives on-chain,
              with no middlemen and no surprises.
            </p>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* connecting line — desktop only */}
              <div className="hidden md:block absolute top-8 left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-200 dark:to-indigo-900" />

              {STEPS.map((s) => (
                <div key={s.num} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-extrabold shadow-lg shadow-indigo-500/30 mb-5 relative z-10">
                    {s.num}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-700 px-6 py-24 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-5"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }}
          />
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to work without trust?
          </h2>
          <p className="relative text-lg text-indigo-100 max-w-md mx-auto mb-10 leading-relaxed">
            Connect your Stellar wallet and create your first escrow in minutes. No sign-up, no fees.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Link
              href="/escrow"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-indigo-600 font-bold rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Get Started →
            </Link>
            <a
              href="https://docs.trustflow.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl border border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all"
            >
              Read the Docs
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 pt-14 pb-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <span className="text-xl font-extrabold text-gray-900 dark:text-white block mb-3">
                TrustFlow
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[240px]">
                Securing the future of work, one transaction at a time. Built on Stellar &amp; Soroban.
              </p>
            </div>

            {[
              {
                title: 'Protocol',
                links: [
                  { label: 'Escrow', href: '/escrow' },
                  { label: 'Dashboard', href: '/dashboard' },
                  { label: 'Explore', href: '/explore' },
                ],
              },
              {
                title: 'Developers',
                links: [
                  { label: 'Documentation', href: 'https://docs.trustflow.xyz', external: true },
                  { label: 'GitHub', href: 'https://github.com/trustflow-protocol', external: true },
                  { label: 'Issues', href: 'https://github.com/trustflow-protocol/trustflow-frontend/issues', external: true },
                ],
              },
              {
                title: 'Community',
                links: [
                  { label: 'Stellar Forum', href: 'https://stellar.org/community', external: true },
                  { label: 'Contribute', href: 'https://github.com/trustflow-protocol/trustflow-frontend/issues', external: true },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap justify-between items-center gap-3">
            <span className="text-xs text-gray-400 dark:text-gray-500">
              © 2026 TrustFlow Protocol. MIT License.
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              ⭐ Powered by Stellar &amp; Soroban
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
