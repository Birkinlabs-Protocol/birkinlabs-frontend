import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar } from '../../components/organisms'

// Mock product data - replace with actual data fetching
const PRODUCT_DATA: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Stella Tote Bag',
    brand: 'Luxury Brand',
    price: '120',
    priceUSD: '48',
    description: 'Premium leather tote bag with elegant design. Perfect for everyday use or special occasions. Handcrafted with attention to detail.',
    category: 'Handbags',
    images: ['🛍️', '👜', '💼'],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    features: [
      'Premium Italian leather',
      'Gold-plated hardware',
      'Interior zip pocket',
      'Adjustable shoulder strap',
      'Dust bag included',
    ],
    seller: {
      name: 'Premium Goods Co.',
      rating: 4.9,
      sales: '2.5K+',
      verified: true,
    },
  },
  '2': {
    id: '2',
    name: 'Arc Runner Pro',
    brand: 'SportTech',
    price: '200',
    priceUSD: '80',
    description: 'High-performance running shoes with advanced cushioning technology. Designed for comfort and speed.',
    category: 'Sneakers',
    images: ['👟', '🏃', '⚡'],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    features: [
      'Breathable mesh upper',
      'Advanced cushioning system',
      'Durable rubber outsole',
      'Lightweight design',
      'Available in multiple colors',
    ],
    seller: {
      name: 'Athletic Gear Store',
      rating: 4.8,
      sales: '1.8K+',
      verified: true,
    },
  },
}

const ProductPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const product = PRODUCT_DATA[id as string] || PRODUCT_DATA['1']

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [paymentToken, setPaymentToken] = useState('XLM')
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    setTimeout(() => {
      setIsAddingToCart(false)
      alert('Added to cart!')
    }, 1000)
  }

  const handleBuyNow = () => {
    // Redirect to checkout with this product
    router.push(`/checkout?product=${product.id}&quantity=${quantity}&token=${paymentToken}`)
  }

  return (
    <>
      <Head>
        <title>{product.name} — Birkinlabs</title>
        <meta name="description" content={product.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-violet-600 dark:hover:text-violet-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-violet-600 dark:hover:text-violet-400">
              Shop
            </Link>
            <span>/</span>
            <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-violet-600 dark:hover:text-violet-400">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-950/30 dark:to-blue-950/30 rounded-2xl p-12 mb-4 flex items-center justify-center border border-gray-200 dark:border-gray-800">
                <span className="text-9xl">{product.images[selectedImage]}</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-gray-50 dark:bg-gray-900 rounded-xl p-6 flex items-center justify-center text-4xl border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-violet-600 dark:border-violet-400'
                        : 'border-gray-200 dark:border-gray-800 hover:border-violet-400'
                    }`}
                  >
                    {img}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 text-xs font-bold rounded-full mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-500 dark:text-gray-400">{product.brand}</p>
                </div>
                {product.inStock && (
                  <span className="shrink-0 px-3 py-1.5 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 text-xs font-semibold rounded-lg">
                    In Stock
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-700'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{product.price} XLM</span>
                  <span className="text-lg text-gray-400">≈ ${product.priceUSD} USD</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Price may vary based on network conditions
                </p>
              </div>

              {/* Payment Token Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Pay with
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['XLM', 'USDC', 'ABUNDANCE'].map((token) => (
                    <button
                      key={token}
                      onClick={() => setPaymentToken(token)}
                      className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        paymentToken === token
                          ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                          : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-violet-400'
                      }`}
                    >
                      {token}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-violet-400 transition-all font-bold text-lg"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 h-12 text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-violet-400 transition-all font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 px-6 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5"
                >
                  Buy Now with {paymentToken}
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="flex-1 px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {isAddingToCart ? 'Adding...' : 'Add to Cart'}
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Description</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-violet-600 dark:text-violet-400 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Seller Info */}
              <div className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">{product.seller.name}</h3>
                      {product.seller.verified && (
                        <span className="text-blue-500" title="Verified Seller">✓</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>⭐ {product.seller.rating} rating</span>
                      <span>📦 {product.seller.sales} sales</span>
                    </div>
                  </div>
                  <Link
                    href={`/seller/${product.seller.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-800 hover:border-violet-400 transition-all"
                  >
                    View Store
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <span className="text-3xl">🔒</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Secure Escrow</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Funds held in smart contract until delivery confirmed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Instant Payment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pay with Stellar tokens in seconds, no intermediaries
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <span className="text-3xl">🛡️</span>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Buyer Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full refund if item not as described or not delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
