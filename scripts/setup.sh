#!/usr/bin/env bash
set -euo pipefail
echo "Setting up TrustFlow development environment..."
rustup target add wasm32-unknown-unknown
command -v stellar &>/dev/null || cargo install --locked stellar-cli --features opt
command -v pnpm &>/dev/null || npm install -g pnpm
cd backend && pnpm install --frozen-lockfile 2>/dev/null || npm install
cp -n .env.example .env 2>/dev/null || true
echo "✓ Setup complete — run 'npm run dev' in backend/"
