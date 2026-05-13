# 🛍️ Birkinlabs Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

> **The premium e-commerce storefront for the Birkinlabs Protocol — shop and pay with Stellar tokens.**

Birkinlabs Frontend is the Next.js storefront powering the Birkinlabs shopping experience. Browse curated products, manage your cart, and check out seamlessly using Stellar (XLM) or any Stellar-based token — all without a credit card.

---

## ✨ Core Features

- 🔗 **Stellar Wallet Connect**: One-click Freighter wallet integration for instant token payments.
- 🛒 **Product Catalog**: Browsable, filterable product grid with real-time inventory.
- 💳 **Stellar Checkout**: Pay with XLM or Stellar-based tokens — zero platform fees.
- 🌗 **Dark / Light Mode**: System-aware theme with smooth toggling.
- 🔔 **Live Notifications**: Toast alerts for cart updates, payment confirmations, and order status.
- 📱 **Fully Responsive**: Mobile-first design across all screen sizes.

---

## 🗂️ Project Structure

```
├── pages/
│   ├── _app.tsx            # App shell — providers, global styles
│   └── index.tsx           # Storefront landing page
├── components/
│   ├── atoms/              # Button, Card, Input, Toast, ThemeToggle, ProgressBar
│   ├── molecules/          # ProductCard, CartItem, CheckoutForm, WalletData
│   └── organisms/          # Navbar, ProductGrid, CartDrawer, CheckoutModal
├── hooks/
│   ├── useAccount.ts       # Stellar wallet account state
│   ├── useCart.ts          # Cart state management
│   ├── useTheme.ts         # Dark/light theme
│   └── useToast.ts         # Notification queue
├── shared/
│   ├── contracts.ts        # Stellar contract bindings
│   └── utils.ts            # Shared utilities
└── styles/
    └── globals.css         # Tailwind base + theme variables
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- [Freighter Wallet](https://www.freighter.app/) browser extension

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

```env
NEXT_PUBLIC_STELLAR_NETWORK=TESTNET
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_PAYMENT_CONTRACT_ID=your-contract-id
```

### Running

```bash
npm run dev
```

---

## 🛡️ Security

- No private keys ever touch the browser — all signing delegated to Freighter.
- All payment amounts validated against live contract state before submission.
- Environment variables never logged or exposed in client bundles.

---

## 🗺️ Roadmap

- [ ] **Product Detail Pages**: Full product view with images, specs, and reviews.
- [ ] **Order History**: On-chain purchase history tied to wallet address.
- [ ] **Multi-Token Checkout**: Pay with USDC, XLM, or any Stellar-based asset.
- [ ] **Seller Dashboard**: Upload and manage product listings on-chain.

---

## 🤝 Community & Support

- **Docs**: [docs.birkinlabs.xyz](https://docs.birkinlabs.xyz)
- **Issues**: [birkinlabs-frontend/issues](https://github.com/Birkinlabs-Protocol/birkinlabs-frontend/issues)

---

*Shop freely. Pay trustlessly.*

---

## 📜 License

MIT License. Copyright (c) 2026 Birkinlabs Protocol.
