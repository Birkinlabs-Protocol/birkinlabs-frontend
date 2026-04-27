# TrustFlow Architecture

## Overview
TrustFlow is a decentralised escrow protocol on Stellar with three layers:

1. **Soroban Contracts** (`contracts/`) — on-chain escrow state machine
2. **NestJS Backend** (`backend/`) — REST API and Stellar RPC integration
3. **Frontend** (`frontend/`) — React dashboard (separate repo)

## Contract Flow
Depositor → `create_escrow` → funds locked → Beneficiary delivers → `release_escrow` → payout

## Dispute Resolution
Either party may call `raise_dispute`. Admin resolves via `settle_dispute(for_depositor: bool)`.

## Fee Structure
Default fee: 0.5% (50 bps) on release, configurable by admin up to 10%.
