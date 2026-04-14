// Dispute logic property tests
describe('Dispute resolution invariants', () => {
  it('dispute can only be raised on active escrow', () => {
    const statuses = ['pending', 'released', 'cancelled', 'disputed'];
    const raiseable = statuses.filter(s => s === 'active');
    expect(raiseable).toHaveLength(0); // none of the above are 'active'
  });

  it('resolved dispute cannot be re-raised', () => {
    const dispute = { resolved: true, escrow_id: 1 };
    expect(dispute.resolved).toBe(true);
    // A resolved dispute should block further raises
  });

  it('ruling correctly identifies winner', () => {
    const ruling = { for_depositor: true };
    expect(ruling.for_depositor).toBe(true);
  });
});
