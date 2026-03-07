import { describe, it, expect } from 'vitest'
import seoConfig, { defaultSeo, BASE } from '../seoConfig'

describe('seoConfig', () => {
  it('has a BASE URL defined', () => {
    expect(BASE).toMatch(/^https?:\/\//)
  })

  it('has config for all main routes', () => {
    const requiredRoutes = [
      '/', '/about', '/ai-systems', '/mobile-apps', '/web-apps',
      '/vault', '/how-we-work', '/industries', '/faq', '/pricing',
      '/contact', '/privacy-policy', '/terms-of-service',
    ]

    for (const route of requiredRoutes) {
      expect(seoConfig[route], `Missing config for ${route}`).toBeDefined()
      expect(seoConfig[route].title).toBeTruthy()
      expect(seoConfig[route].description).toBeTruthy()
      expect(seoConfig[route].ogImage).toBeTruthy()
    }
  })

  it('keeps title under 70 characters', () => {
    for (const [route, config] of Object.entries(seoConfig)) {
      expect(config.title.length, `Title too long for ${route}: "${config.title}"`).toBeLessThanOrEqual(70)
    }
  })

  it('keeps description under 170 characters', () => {
    for (const [route, config] of Object.entries(seoConfig)) {
      expect(config.description.length, `Description too long for ${route}`).toBeLessThanOrEqual(170)
    }
  })

  it('has a defaultSeo fallback', () => {
    expect(defaultSeo.title).toBeTruthy()
    expect(defaultSeo.description).toBeTruthy()
  })
})
