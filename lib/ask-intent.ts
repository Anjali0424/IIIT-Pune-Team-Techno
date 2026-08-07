export type AskIntent = 'photo' | 'voice' | null

let intent: AskIntent = null

/**
 * One-shot bridge so the /analyze screen's "New photo" / "New question"
 * buttons can tell the home screen to reopen the ask modal (optionally with
 * voice listening) after navigating back to "/".
 */
export function setAskIntent(value: AskIntent): void {
  intent = value
}

export function consumeAskIntent(): AskIntent {
  const value = intent
  intent = null
  return value
}
