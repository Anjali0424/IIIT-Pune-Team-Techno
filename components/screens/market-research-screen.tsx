'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Search, TrendingUp } from 'lucide-react'
import type { ScreenProps } from '@/components/app-shell'
import type { Lang } from '@/lib/data'
import { api, type AIInsight, type MarketPrice } from '@/lib/api'
import {
  LoadingState,
  EmptyState,
  ErrorState,
} from '@/components/ui/data-states'

const TEXT: Record<
  Lang,
  {
    title: string
    subtitle: string
    commodity: string
    commodityPlaceholder: string
    state: string
    statePlaceholder: string
    district: string
    districtPlaceholder: string
    market: string
    marketPlaceholder: string
    search: string
    prices: string
    insight: string
    minPrice: string
    maxPrice: string
    modalPrice: string
    arrivalDate: string
    noResults: string
    enterCommodity: string
    failed: string
    loading: string
    rupeePerQuintal: string
    back: string
  }
> = {
  mr: {
    title: 'बाजार संशोधन',
    subtitle: 'मंडी भाव आणि AI अंतर्दृष्टी',
    commodity: 'शेतमाल',
    commodityPlaceholder: 'उदा. Soybean, Cotton, Wheat',
    state: 'राज्य',
    statePlaceholder: 'उदा. Maharashtra',
    district: 'जिल्हा',
    districtPlaceholder: 'उदा. Akola',
    market: 'बाजार',
    marketPlaceholder: 'उदा. Akola APMC',
    search: 'भाव शोधा',
    prices: 'आजचे मंडी भाव',
    insight: 'AI बाजार अंतर्दृष्टी',
    minPrice: 'किमान भाव',
    maxPrice: 'कमाल भाव',
    modalPrice: 'सरासरी भाव',
    arrivalDate: 'आवक तारीख',
    noResults: 'या शोधासाठी कोणतेही मंडी भाव सापडले नाहीत.',
    enterCommodity: 'कृपया शेतमालाचे नाव टाका.',
    failed: 'माहिती लोड करता आली नाही.',
    loading: 'माहिती लोड होत आहे...',
    rupeePerQuintal: '₹ / क्विंटल',
    back: 'मागे',
  },

  hi: {
    title: 'बाजार अनुसंधान',
    subtitle: 'मंडी भाव और AI अंतर्दृष्टि',
    commodity: 'जिंस',
    commodityPlaceholder: 'उदा. Soybean, Cotton, Wheat',
    state: 'राज्य',
    statePlaceholder: 'उदा. Maharashtra',
    district: 'जिला',
    districtPlaceholder: 'उदा. Akola',
    market: 'मंडी',
    marketPlaceholder: 'उदा. Akola APMC',
    search: 'भाव खोजें',
    prices: 'आज के मंडी भाव',
    insight: 'AI बाजार अंतर्दृष्टि',
    minPrice: 'न्यूनतम भाव',
    maxPrice: 'अधिकतम भाव',
    modalPrice: 'औसत भाव',
    arrivalDate: 'आवक तारीख',
    noResults: 'इस खोज के लिए कोई मंडी भाव नहीं मिला।',
    enterCommodity: 'कृपया जिंस का नाम दर्ज करें।',
    failed: 'जानकारी लोड नहीं हो सकी।',
    loading: 'जानकारी लोड हो रही है...',
    rupeePerQuintal: '₹ / क्विंटल',
    back: 'वापस',
  },

  en: {
    title: 'Market Research',
    subtitle: 'Mandi prices & AI insights',
    commodity: 'Commodity',
    commodityPlaceholder: 'e.g. Soybean, Cotton, Wheat',
    state: 'State',
    statePlaceholder: 'e.g. Maharashtra',
    district: 'District',
    districtPlaceholder: 'e.g. Akola',
    market: 'Market',
    marketPlaceholder: 'e.g. Akola APMC',
    search: 'Search Prices',
    prices: "Today's Mandi Prices",
    insight: 'AI Market Insight',
    minPrice: 'Min Price',
    maxPrice: 'Max Price',
    modalPrice: 'Modal Price',
    arrivalDate: 'Arrival Date',
    noResults: 'No mandi prices found for this search.',
    enterCommodity: 'Please enter a commodity name.',
    failed: 'Failed to load market information.',
    loading: 'Loading market information...',
    rupeePerQuintal: '₹ / quintal',
    back: 'Back',
  },
}

export function MarketResearchScreen({
  lang,
  back,
}: ScreenProps) {
  const t = TEXT[lang]

  const [commodity, setCommodity] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [market, setMarket] = useState('')

  const [prices, setPrices] = useState<MarketPrice[]>([])
  const [insight, setInsight] = useState<AIInsight | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = async () => {
    const commodityValue = commodity.trim()

    if (!commodityValue) {
      setError(t.enterCommodity)
      setPrices([])
      setInsight(null)
      setSearched(true)
      return
    }

    setLoading(true)
    setError(null)
    setSearched(true)
    setInsight(null)

    try {
      const params = {
        commodity: commodityValue,
        state: state.trim() || undefined,
        district: district.trim() || undefined,
        market: market.trim() || undefined,
      }

      const priceData = await api.getMarketPrices(params)

      setPrices(priceData)

      try {
        const insightData = await api.getMarketInsight({
          ...params,
          language: lang,
        })

        setInsight(insightData)
      } catch {
        // Price results should still be displayed
        // even if AI insight fails.
        setInsight(null)
      }
    } catch (err) {
      setPrices([])
      setInsight(null)

      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError(t.failed)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setPrices([])
    setInsight(null)
    setError(null)
    setSearched(false)
  }, [lang])

  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
        <button
          type="button"
          onClick={back}
          aria-label={t.back}
          className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground active:scale-95"
        >
          <ArrowLeft className="size-5" />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="text-base font-bold text-foreground">
            {t.title}
          </h1>

          <p className="text-xs text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <TrendingUp className="size-5" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4">

        {/* Search Form */}
        <div className="rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border/60">

          {/* Commodity */}
          <label className="block text-xs font-semibold text-foreground">
            {t.commodity}
          </label>

          <div className="relative mt-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

            <input
              value={commodity}
              onChange={(e) => setCommodity(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch()
                }
              }}
              placeholder={t.commodityPlaceholder}
              className="w-full rounded-2xl border border-border bg-background py-3 pl-10 pr-3 text-sm outline-none ring-primary/30 focus:ring-2"
            />
          </div>

          {/* State */}
          <label className="mt-4 block text-xs font-semibold text-foreground">
            {t.state}
          </label>

          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={t.statePlaceholder}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-3 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
          />

          {/* District */}
          <label className="mt-4 block text-xs font-semibold text-foreground">
            {t.district}
          </label>

          <input
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder={t.districtPlaceholder}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-3 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
          />

          {/* Market */}
          <label className="mt-4 block text-xs font-semibold text-foreground">
            {t.market}
          </label>

          <input
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            placeholder={t.marketPlaceholder}
            className="mt-2 w-full rounded-2xl border border-border bg-background px-3 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
          />

          {/* Search button */}
          <button
            type="button"
            onClick={handleSearch}
            disabled={loading}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-sm active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Search className="size-4" />
            {loading ? t.loading : t.search}
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <LoadingState label={t.loading} />
        )}

        {/* Error */}
        {!loading && error && (
          <ErrorState
            lang={lang}
            message={error}
            onRetry={handleSearch}
          />
        )}

        {/* No results */}
        {!loading &&
          !error &&
          searched &&
          prices.length === 0 && (
            <EmptyState
              label={t.noResults}
            />
          )}

        {/* Price Results */}
        {!loading &&
          !error &&
          prices.length > 0 && (
            <>
              <div className="mt-5 flex items-center gap-2">
                <TrendingUp className="size-5 text-primary" />

                <h2 className="text-base font-bold text-foreground">
                  {t.prices}
                </h2>
              </div>

              <div className="mt-3 flex flex-col gap-3">
                {prices.map((price, index) => (
                  <div
                    key={`${price.market}-${price.commodity}-${price.arrival_date}-${index}`}
                    className="rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border/60"
                  >
                    {/* Market information */}
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-foreground">
                        {price.commodity}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary">
                        {price.market}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {price.district}, {price.state}
                      </p>
                    </div>

                    {/* Prices */}
                    <div className="mt-4 grid grid-cols-3 gap-2">

                      {/* Minimum */}
                      <div className="rounded-2xl bg-secondary/60 p-3">
                        <p className="text-[11px] text-muted-foreground">
                          {t.minPrice}
                        </p>

                        <p className="mt-1 text-sm font-bold text-foreground">
                          ₹{price.min_price}
                        </p>
                      </div>

                      {/* Modal */}
                      <div className="rounded-2xl bg-primary/10 p-3">
                        <p className="text-[11px] text-muted-foreground">
                          {t.modalPrice}
                        </p>

                        <p className="mt-1 text-sm font-bold text-primary">
                          ₹{price.modal_price}
                        </p>
                      </div>

                      {/* Maximum */}
                      <div className="rounded-2xl bg-secondary/60 p-3">
                        <p className="text-[11px] text-muted-foreground">
                          {t.maxPrice}
                        </p>

                        <p className="mt-1 text-sm font-bold text-foreground">
                          ₹{price.max_price}
                        </p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {t.arrivalDate}: {price.arrival_date}
                      </span>

                      <span>
                        {t.rupeePerQuintal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insight */}
              {insight && (
                <div className="mt-5 rounded-3xl bg-primary/10 p-4 ring-1 ring-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <TrendingUp className="size-5" />
                    </div>

                    <h2 className="text-base font-bold text-foreground">
                      {t.insight}
                    </h2>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-foreground">
                    {insight.insight}
                  </p>
                </div>
              )}
            </>
          )}
      </div>
    </div>
  )
}