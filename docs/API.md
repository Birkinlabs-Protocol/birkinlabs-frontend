# TrustFlow API Reference

Base URL: `http://localhost:3001`

## Escrows
| Method | Path | Description |
|--------|------|-------------|
| POST | /escrows | Create escrow |
| GET | /escrows/:id | Get escrow by ID |
| GET | /escrows/depositor/:address | List depositor escrows |
| POST | /escrows/:id/release | Release funds |

## Auth
| Method | Path | Description |
|--------|------|-------------|
| GET | /auth/challenge | Get signing challenge |
| POST | /auth/verify | Verify signature, get token |

## System
| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Service health |
| GET | /metrics | Prometheus metrics |
