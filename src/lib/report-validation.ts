export const reportPhonePattern = "[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{4}";

export function emailsMatch(email: string, confirmation: string) {
  return email.trim().toLowerCase() === confirmation.trim().toLowerCase();
}

export function requiresChildAuthorisation(minors: string) {
  return minors === "child";
}