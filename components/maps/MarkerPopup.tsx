'use client'

import type { Lang } from '@/lib/data'
import { CATEGORY_MAP } from '@/lib/mock-places'

interface PopupData {
  name: string
  rating?: number
  distance: number
  isOpen?: boolean
  type: string
  address: string
}

/**
 * Returns an HTML string representing the tooltip content inside a Google Maps InfoWindow.
 * Styled with Vanilla CSS to match the GramMitra green and rounded theme.
 */
export function getMarkerPopupHtml(data: PopupData, lang: Lang): string {
  const ratingStars = data.rating
    ? '★'.repeat(Math.round(data.rating)) + '☆'.repeat(5 - Math.round(data.rating))
    : ''

  const categoryEmoji = CATEGORY_MAP[data.type]?.emoji || '📍'
  const categoryLabel = CATEGORY_MAP[data.type]?.[lang] || data.type

  const openText =
    data.isOpen === undefined
      ? ''
      : data.isOpen
      ? `<span style="color: #2e7d32; font-weight: bold; background: #e8f5e9; padding: 2px 8px; border-radius: 99px; font-size: 10px;">${
          lang === 'mr' ? 'उघडे आहे' : lang === 'hi' ? 'खुला है' : 'Open Now'
        }</span>`
      : `<span style="color: #c62828; font-weight: bold; background: #ffebee; padding: 2px 8px; border-radius: 99px; font-size: 10px;">${
          lang === 'mr' ? 'बंद आहे' : lang === 'hi' ? 'बंद है' : 'Closed'
        }</span>`

  const distText = `${data.distance.toFixed(1)} km`

  return `
    <div style="font-family: sans-serif; padding: 6px; min-width: 180px; max-width: 220px;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
        <span style="font-size: 18px;">${categoryEmoji}</span>
        <span style="font-size: 11px; font-weight: bold; color: #666; text-transform: uppercase; letter-spacing: 0.5px;">${categoryLabel}</span>
      </div>
      
      <h3 style="margin: 4px 0 2px 0; font-size: 14px; font-weight: 700; color: #1b5e20; line-height: 1.3;">
        ${data.name}
      </h3>
      
      ${
        data.rating
          ? `<div style="display: flex; align-items: center; gap: 4px; margin: 2px 0;">
               <span style="color: #fbc02d; font-size: 12px; letter-spacing: 1px;">${ratingStars}</span>
               <span style="font-size: 11px; color: #777; font-weight: 600;">(${data.rating})</span>
             </div>`
          : ''
      }
      
      <div style="display: flex; align-items: center; justify-between; margin-top: 8px; border-top: 1px solid #eee; padding-top: 6px; gap: 8px;">
        <span style="font-size: 12px; font-weight: bold; color: #333;">📍 ${distText}</span>
        ${openText}
      </div>
    </div>
  `
}
