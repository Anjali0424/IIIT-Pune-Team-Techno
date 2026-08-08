'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, TrendingUp } from 'lucide-react'

import type { ScreenProps } from '@/components/app-shell'
import type { Lang } from '@/lib/data'
import { PRODUCT_CATEGORIES } from '@/lib/data'
import { api, type Product } from '@/lib/api'
import { UI } from '@/lib/assistant'
import { ScreenHeader } from '@/components/screen-header'
import { VoiceButton } from '@/components/VoiceButton'
import { VoiceSearchModal } from '@/components/VoiceSearchModal'
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from '@/components/ui/data-states'

const CATEGORY_LABELS: Record<string, Record<Lang, string>> = {
  All: UI.all,

  Grains: {
    mr: 'धान्य',
    hi: 'अनाज',
    en: 'Grains',
  },

  Vegetables: {
    mr: 'भाज्या',
    hi: 'सब्जियां',
    en: 'Vegetables',
  },

  Fruits: {
    mr: 'फळे',
    hi: 'फल',
    en: 'Fruits',
  },

  Dairy: {
    mr: 'दुग्ध',
    hi: 'डेयरी',
    en: 'Dairy',
  },

  Seeds: {
    mr: 'बियाणे',
    hi: 'बीज',
    en: 'Seeds',
  },

  Fertilizers: {
    mr: 'खते',
    hi: 'उर्वरक',
    en: 'Fertilizers',
  },

  Equipment: {
    mr: 'साधने',
    hi: 'उपकरण',
    en: 'Equipment',
  },

  Other: {
    mr: 'इतर',
    hi: 'अन्य',
    en: 'Other',
  },
}

const FILTERS = ['All', ...PRODUCT_CATEGORIES] as const

export function AgMarketScreen({
  lang,
  go,
  back,
  openAgmarketProduct,
  openAgmarketForm,
}: ScreenProps & {
  openAgmarketProduct?: (id: number) => void
  openAgmarketForm?: () => void
}) {
  const [searchInput, setSearchInput] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)
  const [voiceOpen, setVoiceOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearch(searchInput.trim())
    }, 400)

    return () => window.clearTimeout(timer)
  }, [searchInput])

  useEffect(() => {
    let active = true

    setLoading(true)
    setError(null)

    api
      .getProducts({
        search: search || undefined,
        category: category === 'All' ? undefined : category,
      })
      .then((data) => {
        if (active) {
          setProducts(data)
        }
      })
      .catch((err) => {
        if (active) {
          setError(err instanceof Error ? err.message : String(err))
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [search, category, reloadKey])

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Header with Back button */}
      <ScreenHeader
        screen="agmarket"
        lang={lang}
        onBack={back}
      />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4">

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={UI.searchProducts[lang]}
              className="w-full rounded-2xl border border-border bg-card py-3 pl-10 pr-3 text-sm outline-none ring-primary/30 focus:ring-2"
            />
          </div>

          <VoiceButton
            lang={lang}
            onPress={() => setVoiceOpen(true)}
          />
        </div>

        {/* Categories */}
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${category === item
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
                }`}
            >
              {CATEGORY_LABELS[item][lang]}
            </button>
          ))}
        </div>

        {/* Market Research */}
        <button
          type="button"
          onClick={() => go('market-research')}
          className="mt-3 flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600/10 via-primary/10 to-emerald-600/10 p-3.5 shadow-sm ring-1 ring-primary/30 active:scale-[0.98]"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <TrendingUp className="size-5" />
            </span>

            <div className="text-left">
              <h4 className="text-sm font-semibold text-foreground">
                {lang === 'mr'
                  ? 'बाजार संशोधन (मंडी भाव)'
                  : lang === 'hi'
                    ? 'बाजार अनुसंधान (मंडी भाव)'
                    : 'Market Research (Mandi Prices)'}
              </h4>

              <p className="text-xs text-muted-foreground">
                {lang === 'mr'
                  ? 'शेतमाल भाव व AI अंदाज पहा'
                  : lang === 'hi'
                    ? 'जिंस भाव व AI अंतर्दृष्टि देखें'
                    : 'Check mandi rates & AI insights'}
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold text-primary">
            →
          </span>
        </button>

        {/* Add Product */}
        <button
          type="button"
          onClick={() => openAgmarketForm?.()}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm active:scale-[0.98]"
        >
          <Plus className="size-4" />
          {UI.addProduct[lang]}
        </button>

        {/* Product List */}
        <div className="mt-4">
          {loading && <LoadingState />}

          {!loading && error && (
            <ErrorState
              lang={lang}
              message={error}
              onRetry={() => setReloadKey((k) => k + 1)}
            />
          )}

          {!loading && !error && products.length === 0 && (
            <EmptyState
              label={UI.noProductsFound[lang]}
            />
          )}

          {!loading && !error && products.length > 0 && (
            <div className="flex flex-col gap-3">
              {products.map((product, i) => (
                <motion.button
                  key={product.id}
                  type="button"
                  onClick={() => openAgmarketProduct?.(product.id)}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                  className="rounded-3xl bg-card p-4 text-left shadow-sm ring-1 ring-border/60 active:scale-[0.99]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">

                      {/* Category */}
                      <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        {CATEGORY_LABELS[product.category]?.[lang] ??
                          product.category}
                      </span>

                      {/* Product name */}
                      <h3 className="mt-2 text-base font-semibold text-foreground">
                        {product.name}
                      </h3>

                      {/* Seller */}
                      <p className="mt-1 text-xs text-muted-foreground">
                        {product.seller_name}
                        {product.village
                          ? ` · ${product.village}`
                          : ''}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">
                        ₹{product.price}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {UI.perUnit[lang]} {product.unit}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Voice Search */}
      <VoiceSearchModal
        open={voiceOpen}
        lang={lang}
        onClose={() => setVoiceOpen(false)}
        onResult={(text) => setSearchInput(text)}
      />
    </div>
  )
}