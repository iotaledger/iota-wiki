export function calculateBPS(mana: number, congestion: number): number {
  return mana / congestion;
}
