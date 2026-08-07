import type { Lang } from '@/lib/data'
import type { LangText, Scheme } from '@/lib/api'

/** Join document names into a natural spoken list. */
function joinList(items: string[], lang: Lang): string {
  const clean = items.map((s) => s.trim()).filter(Boolean)
  if (clean.length === 0) return ''
  if (clean.length === 1) return clean[0]
  if (clean.length === 2) {
    const and = lang === 'en' ? ' and ' : lang === 'hi' ? ' और ' : ' आणि '
    return `${clean[0]}${and}${clean[1]}`
  }
  const last = clean[clean.length - 1]
  const head = clean.slice(0, -1).join(lang === 'en' ? ', ' : ', ')
  const and = lang === 'en' ? ', and ' : lang === 'hi' ? ', और ' : ', आणि '
  return `${head}${and}${last}`
}

function asText(value: LangText | string | null | undefined, lang: Lang): string {
  if (!value) return ''
  if (typeof value === 'string') return value.trim()
  return (value[lang] || value.en || '').trim()
}

function endSentence(text: string): string {
  const t = text.trim().replace(/\s+/g, ' ')
  if (!t) return ''
  return /[.!?।]|[।]$/.test(t) ? t : `${t}.`
}

/**
 * Build one natural spoken paragraph for a government scheme.
 * No section labels, icons, or HTML — only content a villager should hear.
 */
export function buildSchemeSpeechParagraph(scheme: Scheme, lang: Lang): string {
  const name = asText(scheme.name, lang)
  const description = asText(scheme.description, lang)
  const benefits = asText(scheme.benefits, lang)
  const eligibility = asText(scheme.eligibility, lang)
  const documents = joinList(
    scheme.required_documents.map((d) => asText(d, lang)),
    lang,
  )
  const lastDate = asText(scheme.last_date, lang)
  const process = asText(scheme.application_process, lang)

  const parts: string[] = []

  if (lang === 'hi') {
    if (name && description) parts.push(`${name}। ${description}`)
    else if (name) parts.push(name)
    else if (description) parts.push(description)

    if (benefits) parts.push(benefits)
    if (eligibility) parts.push(`पात्र आवेदक: ${eligibility}`)
    if (documents) parts.push(`आवेदन के लिए ${documents} की आवश्यकता होती है`)
    if (lastDate) parts.push(`अंतिम तिथि ${lastDate} है`)
    if (process) parts.push(process)
    else if (scheme.official_url) parts.push('आधिकारिक सरकारी वेबसाइट से आवेदन करें')
  } else if (lang === 'mr') {
    if (name && description) parts.push(`${name}. ${description}`)
    else if (name) parts.push(name)
    else if (description) parts.push(description)

    if (benefits) parts.push(benefits)
    if (eligibility) parts.push(`पात्र अर्जदार: ${eligibility}`)
    if (documents) parts.push(`अर्जासाठी ${documents} आवश्यक आहेत`)
    if (lastDate) parts.push(`शेवटची तारीख ${lastDate} आहे`)
    if (process) parts.push(process)
    else if (scheme.official_url) parts.push('अधिकृत सरकारी संकेतस्थळावरून अर्ज करा')
  } else {
    if (name && description) parts.push(`${name}. ${description}`)
    else if (name) parts.push(name)
    else if (description) parts.push(description)

    if (benefits) parts.push(benefits)
    if (eligibility) parts.push(`Eligible applicants include ${eligibility}`)
    if (documents) parts.push(`You can apply using ${documents}`)
    if (lastDate) parts.push(`The last date to apply is ${lastDate}`)
    if (process) parts.push(process)
    else if (scheme.official_url) {
      parts.push('Apply through the official government website')
    }
  }

  return parts
    .map(endSentence)
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
