export const formatINR = (n) => `₹${Number(n).toFixed(0)}`
export const minutesFromKm = (km) => Math.max(3, Math.round(km * 6)) // rough: 10km ≈ 60min by road
