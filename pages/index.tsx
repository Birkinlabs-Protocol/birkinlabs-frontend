import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'

const CATEGORIES = [
  { icon: '👜', name: 'Handbags',     count: '240+ items' },
  { icon: '👟', name: 'Sneakers',     count: '180+ items' },
  { icon: '⌚', name: 'Watches',      count: '95+ items'  },
  { icon: '💍', name: 'Jewellery',    count: '310+ items' },
  { icon: '🕶️', name: 'Accessories', count: '420+ items' },
  { icon: '👗', name: 'Apparel',      count: '560+ items' },
]

const PRODUCTS = [
  {
    name: 'Stella Tote Bag',
    price: '120 XLM',
    usd: '~$48',
    tag: 'Best Seller',
    color: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    name: 'Arc Runner Pro',
    price: '200 XLM',
    usd: '~$80',
    tag: 'New Arrival',
    color: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    name: 'Horizon Watch',
    price: '850 XLM',
    usd: '~$340',
    tag: 'Limited',
    color: 'bg-slate-50 dark:bg-slate-900/50',
  },
  {
    name: 'Lux Chain Set',
    price: '75 XLM',
    usd: '~$30',
    tag: 'Popular',
    color: 'bg-rose-50 dark:bg-rose-950/30',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Connect Wallet',
    desc: 'Install Freighter and connect your Stellar wallet — no email, no password.',
  },
  {
    num: '02',
    title: 'Browse & Add to Cart',
    desc: 'Explore thousands of premium products. Add what you love to your cart.',
  },
  {
    num: '03',
    title: 'Pay with Stellar',
    desc: 'Sign the transaction in Freighter. Funds held in escrow until delivery.',
  },
  {
    num: '04',
    title: 'Confirm & Done',
    desc: 'Confirm delivery to release funds to the seller. Safe, fast, on-chain.',
  },
]

const STATS = [
  { number: '10K+',  label: 'Products Listed' },
  { number: '5K+',   label: 'Happy Buyers'    },
  { number: '0%',    label: 'Platform Fees'   },
  { number: '100%',  label: 'On-Chain'        },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Birkinlabs — Shop with Stellar Tokens</title>
        <meta
          name="description"
          content="Birkinlabs is a premium e-commerce marketplace on the Stellar network. Browse thousands of products and pay instantly with XLM or Stellar-based tokens."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pt-28 pb-24 text-center bg-gradient-to-b from-white via-violet-50 to-white dark:from-gray-950 dark:via-violet-950/20 dark:to-gray-950">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-violet-400/10 blur-3xl" />

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950 border border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400 text-xs font-bold tracking-widest uppercase mb-6">
            ⭐ Powered by Stellar
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white max-w-4xl mx-auto mb-6">
            Shop Premium.{' '}
            <span className="text-violet-600 dark:text-violet-400">Pay with Stellar.</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Birkinlabs is a decentralized marketplace for premium goods. Browse thousands
            of products and pay instantly with XLM or any Stellar-based token — zero platform fees, zero middlemen.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5"
            >
              Start Shopping →
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5"
            >
              Sell on Birkinlabs
            </Link>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-800">
            {STATS.map((s) => (
              <div key={s.label} className="py-8 px-6 text-center">
                <div className="text-3xl font-extrabold text-violet-600 dark:text-violet-400 tracking-tight">
                  {s.number}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Categories ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400">
            Browse
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Shop by Category
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            Thousands of premium products across every category — all payable with Stellar tokens.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.name}
                href={`/shop?category=${c.name.toLowerCase()}`}
                className="group flex flex-col items-center gap-2 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-violet-400 dark:hover:border-violet-600 hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center"
              >
                <span className="text-3xl">{c.icon}</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{c.name}</span>
                <span className="text-xs text-gray-400">{c.count}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Featured Products ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <span className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400">
              Featured
            </span>
            <div className="mt-3 flex items-end justify-between flex-wrap gap-4">
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Trending Now
              </h2>
              <Link href="/shop" className="text-sm font-semibold text-violet-600 dark:text-violet-400 hover:underline">
                View all →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                >
                  <div className={`h-48 ${p.color} flex items-center justify-center text-5xl`}>
                    🛍️
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm">{p.name}</h3>
                      <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400">
                        {p.tag}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <span className="text-base font-extrabold text-gray-900 dark:text-white">{p.price}</span>
                        <span className="ml-1.5 text-xs text-gray-400">{p.usd}</span>
                      </div>
                      <button className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── How It Works ── */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <span className="text-xs font-bold tracking-widest uppercase text-violet-600 dark:text-violet-400">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Buy in four steps
          </h2>
          <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
            From wallet connect to doorstep delivery — the entire payment flow is on-chain, transparent, and instant.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-violet-500 via-violet-300 to-violet-100 dark:to-violet-900" />
            {STEPS.map((s) => (
              <div key={s.num} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet-600 text-white text-xl font-extrabold shadow-lg shadow-violet-500/30 mb-5 relative z-10">
                  {s.num}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sell Banner ── */}
        <div className="bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                Got products to sell?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
                List your products on Birkinlabs and receive payments directly in Stellar tokens.
                No intermediary, no chargebacks, instant settlement.
              </p>
            </div>
            <Link
              href="/sell"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Start Selling →
            </Link>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700 px-6 py-24 text-center">
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }}
          />
          <h2 className="relative text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to shop with Stellar?
          </h2>
          <p className="relative text-lg text-violet-100 max-w-md mx-auto mb-10 leading-relaxed">
            Connect your Freighter wallet and start shopping in seconds. No credit card. No sign-up.
          </p>
          <div className="relative flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-violet-600 font-bold rounded-xl shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Shop Now →
            </Link>
            <a
              href="https://docs.birkinlabs.xyz"
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
              <span className="text-xl font-extrabold text-gray-900 dark:text-white block mb-3">Birkinlabs</span>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[240px]">
                Shop freely. Pay trustlessly. A premium marketplace powered by Stellar &amp; Soroban.
              </p>
            </div>
            {[
              {
                title: 'Shop',
                links: [
                  { label: 'All Products', href: '/shop' },
                  { label: 'Handbags', href: '/shop?category=handbags' },
                  { label: 'Sneakers', href: '/shop?category=sneakers' },
                  { label: 'Watches', href: '/shop?category=watches' },
                ],
              },
              {
                title: 'Sellers',
                links: [
                  { label: 'Start Selling', href: '/sell' },
                  { label: 'Seller Docs', href: 'https://docs.birkinlabs.xyz', external: true },
                  { label: 'SDK', href: 'https://github.com/Birkinlabs-Protocol/birkinlabs-sdk', external: true },
                ],
              },
              {
                title: 'Protocol',
                links: [
                  { label: 'GitHub', href: 'https://github.com/Birkinlabs-Protocol', external: true },
                  { label: 'Documentation', href: 'https://docs.birkinlabs.xyz', external: true },
                  { label: 'Issues', href: 'https://github.com/Birkinlabs-Protocol/birkinlabs-frontend/issues', external: true },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
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
            <span className="text-xs text-gray-400 dark:text-gray-500">© 2026 Birkinlabs Protocol. MIT License.</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">⭐ Powered by Stellar &amp; Soroban</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Home
