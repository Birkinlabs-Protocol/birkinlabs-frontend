use soroban_sdk::{Env, token};
use crate::storage::DataKey;
use crate::errors::TrustFlowError;
use crate::types::EscrowStatus;

pub fn release_to_beneficiary(env: &Env, escrow_id: u64) -> Result<i128, TrustFlowError> {
    let mut escrow = env.storage().persistent()
        .get::<DataKey, crate::types::EscrowRecord>(&DataKey::Escrow(escrow_id))
        .ok_or(TrustFlowError::EscrowNotFound)?;
    if matches!(escrow.status, EscrowStatus::Released | EscrowStatus::Cancelled) {
        return Err(TrustFlowError::EscrowAlreadyReleased);
    }
    let fee_bps: u32 = env.storage().persistent().get(&DataKey::FeeBps).unwrap_or(50);
    let fee = escrow.amount * fee_bps as i128 / 10_000;
    let payout = escrow.amount - fee;
    let token_client = token::Client::new(env, &escrow.token);
    token_client.transfer(&env.current_contract_address(), &escrow.beneficiary, &payout);
    escrow.status = EscrowStatus::Released;
    env.storage().persistent().set(&DataKey::Escrow(escrow_id), &escrow);
    Ok(payout)
}
