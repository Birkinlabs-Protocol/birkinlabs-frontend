# 🛡️ TrustFlow Protocol (Core)

> **Decentralized Escrow, Milestone Payments, and Community Governance.**

TrustFlow is a next-generation protocol built on **Stellar & Soroban**, designed to eliminate trust issues in the global gig economy. It provides a secure, decentralized bridge between clients and freelancers, ensuring that funds are only released when milestones are met, and disputes are resolved by a fair, incentivized community courtroom.

---

## 🏛️ Project Vision

TrustFlow aims to replace predatory centralized freelance platforms with a self-governing protocol. By leveraging smart contracts, we ensure:
- **Zero Platform Bias**: Transactions are governed by code, not corporations.
- **Fair Dispute Resolution**: Community jurors earn rewards for settling cases accurately.
- **Milestone-Based Security**: Funds are locked in tranches, reducing risk for both parties.

---

## 🏗️ Architecture & Components

The TrustFlow ecosystem is comprised of four primary pillars:

### 1. Smart Contracts (Soroban/Rust)
Located in `contracts/`, these are the heart of the protocol:
- **Escrow Vaults**: Handles the locking, release, and slashing of assets (USDC/Stellar).
- **Abundance Token**: A governance/incentive token for the ecosystem.
- **Milestone Logic**: Time-locked releases and tranche management.
- **Dispute Voting**: Implements community-driven resolution logic and slashing.

### 2. Backend Service (Node.js/Express/PostgreSQL)
Located in `backend/`, providing off-chain efficiency:
- **User Profiles**: Reputation scores, gig history, and bios.
- **Gig Matching**: Searchable database of work opportunities.
- **IPFS Pinning**: Securely anchoring deliverables and evidence.
- **WebSockets**: Real-time alerts for dispute status and payment events.

### 3. Frontend Interface (Next.js 14 App Router)
A premium, responsive dashboard for interacting with the protocol:
- **Gig Explorer**: Sophisticated grid layout with filtering and pagination.
- **Milestone Timeline**: Visual representation of payment tranches.
- **'Courtroom' UI**: A secure interface for jurors to review evidence and vote.
- **Create Gig Wizard**: Multi-step flow for setting up complex contracts.

### 4. Integration Layer
- **Freighter Wallet**: Native Stellar wallet integration for secure signing.
- **TrustFlow SDK**: Type-safe wrapper for all contract and API interactions.

---

## 🚀 Key Features (from Active Development)

- [x] **Secure Escrow**: Multi-sig supported fund locking.
- [ ] **IPFS File Upload**: Drag-and-drop UI with progress indicators for deliverables.
- [ ] **Markdown Rendering**: Native rendering of deliverable manifest files for jurors.
- [ ] **Real-time Alerts**: Socket-driven notifications for all protocol actions.
- [ ] **Reputation Engine**: On-chain scoring based on verified completion and dispute history.
- [ ] **Multi-Currency Support**: USDC price conversion and native asset handling.

---

## 🛠️ Getting Started

### Prerequisites
- [ ] **DevOps**: Automated CI/CD pipelines for Cloudflare Pages deployment.
- [ ] **Globalization**: Full i18n support (Starting with English & Spanish).

---

## 🤝 Contributing

TrustFlow is open-source! We have over **150+ categorized issues** ranging from "Good First Issue" to "Hard" logic implementations.

1. Pick an issue from the [Issue Tracker](https://github.com/trustflow-protocol/trustflow-core/issues).
2. Fork the repository.
3. Create your feature branch (`git checkout -b feature/AmazingFeature`).
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

