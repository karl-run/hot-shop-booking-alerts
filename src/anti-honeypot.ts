export async function generateChallenge(restaurantId: string) {
  const vector = crypto.getRandomValues(new Uint8Array(12))
  const digestPayload = ''
    .concat(restaurantId, '-')
    .concat(vector.toString(), '-')
    // Just a magic string
    .concat('ccyTfX,,xmZHHm6y^uyJ^Fp9b0]T3i.>J9~%uw2}ny')

  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(digestPayload))

  const hash = Array.from(new Uint8Array(digest))
    .map((e) => e.toString(16).padStart(2, '0'))
    .join('')

  return ''
    .concat(vector.toString(), ':')
    .concat(hash, ':')
    .concat(btoa((Date.now() + 2e4).toString()))
}
