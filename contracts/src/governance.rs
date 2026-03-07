use soroban_sdk::{Env, Address};
use crate::storage::DataKey;
use crate::errors::TrustFlowError;

pub fn require_admin(env: &Env, caller: &Address) -> Result<(), TrustFlowError> {
    caller.require_auth();
    let admin: Address = env.storage().instance().get(&DataKey::Admin).ok_or(TrustFlowError::Unauthorized)?;
    if *caller != admin { return Err(TrustFlowError::Unauthorized); }
    Ok(())
}

pub fn set_fee_bps(env: &Env, admin: &Address, fee_bps: u32) -> Result<(), TrustFlowError> {
    require_admin(env, admin)?;
    if fee_bps > 1000 { return Err(TrustFlowError::InvalidAmount); }
    env.storage().persistent().set(&DataKey::FeeBps, &fee_bps);
    Ok(())
}

pub fn pause(env: &Env, admin: &Address) -> Result<(), TrustFlowError> {
    require_admin(env, admin)?;
    env.storage().instance().set(&DataKey::Paused, &true);
    Ok(())
}
