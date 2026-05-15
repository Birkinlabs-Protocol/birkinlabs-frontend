import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/organisms'

const PRODUCTS = [
  {
    id: '1',
    name: 'Stella Tote Bag',
    price: '120 XLM',
    usd: '~$48',
    tag: 'Best Seller',
    category: 'Handbags',
    color: 'bg-amber-50 dark:bg-amber-950/30',
    icon: '👜',
  },
  {
    id: '2',
    name: 'Arc Runner Pro',
    price: '200 XLM',
    usd: '~$80',
    tag: 'New Arrival',
    category: 'Sneakers',
    color: 'bg-blue-50 dark:bg-blue-950/30',
    icon: '👟',
  },
  {
    id: '3',
    name: 'Horizon Watch',
    price: '850 XLM',
    usd: '~$340',
    tag: 'Limited',
    category: 'Watches',
    color: 'bg-slate-50 dark:bg-slate-900/50',
    icon: '⌚',
  },
  {
    id: '4',
    name: 'Lux Chain Set',
    price: '75 XLM',
    usd: '~$30',
    tag: 'Popular',
    category: 'Jewellery',
    color: 'bg-rose-50 dark:bg-rose-950/30',
    icon: '💍',
  },
  {
    id: '5',
    name: 'Classic Sunglasses',
    price: '95 XLM',
    usd: '~$38',
    tag: 'Trending',
    category: 'Accessories',
    color: 'bg-purple-50 dark:bg-purple-950/30',
    icon: '🕶️',
  },
  {
    id: '6',
    name: 'Designer Jacket',
    price: '450 XLM',
    usd: '~$180',
    tag: 'Premium',
    category: 'Apparel',
    color: 'bg-green-50 dark:bg-green-950/30',
    icon: '🧥',
  },
  {
    id: '7',
    name: 'Leather Wallet',
    price: '60 XLM',
    usd: '~$24',
    tag: 'Best Value',
    category: 'Accessories',
    color: 'bg-orange-50 dark:bg-orange-950/30',
    icon: '👛',
  },
  {
    id: '8',
    name: 'Sport Backpack',
    price: '140 XLM',
    usd: '~$56',
    tag: 'New',
    category: 'Handbags',
    color: 'bg-cyan-50 dark:bg-cyan-950/30',
    icon: '🎒',
  },
]

const CATEGORIES = ['All', 'Handbags', 'Sneakers', 'Watches', 'Jewellery', 'Accessories', 'Apparel']

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
]

const Shop: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Head>
        <title>Shop — Birkinlabs</title>
        <meta
          name="description"
          content="Browse thousands of premium products and pay with Stellar tokens"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              Shop Premium Products
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
              Browse thousands of premium products from verified sellers. Pay instantly with XLM, USDC, or other Stellar tokens.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-3.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all cursor-pointer"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-violet-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className={`h-56 ${product.color} flex items-center justify-center text-6xl`}>
                    {product.icon}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {product.name}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400">
                        {product.tag}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {product.category}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                          {product.price}
                        </span>
                        <span className="ml-2 text-xs text-gray-400">{product.usd}</span>
                      </div>
                      <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Payment Methods Banner */}
          <div className="mt-16 p-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Pay with Multiple Tokens</h2>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              We accept XLM, USDC, ABUNDANCE, and other Stellar-based tokens. Fast, secure, and transparent payments on the blockchain.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
              <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">XLM</span>
              <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">USDC</span>
              <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">ABUNDANCE</span>
              <span className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">+ More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
