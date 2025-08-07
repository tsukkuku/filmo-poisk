export async function generatePkce() {
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  const codeVerifier = Array.from(randomBytes)
    .map((b) => String.fromCharCode(b))
    .join("");
  const base64Url = btoa(codeVerifier)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const encoder = new TextEncoder();
  const data = encoder.encode(base64Url);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashString = hashArray.map((b) => String.fromCharCode(b)).join("");
  const codeChallenge = btoa(hashString)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return {
    codeVerifier: base64Url,
    codeChallenge,
  };
}
