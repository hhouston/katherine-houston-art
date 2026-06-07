import { artworks, availableArtworks, featuredArtworks, getArtworkBySlug, exhibitions, pressItems } from '@/lib/data'

describe('getArtworkBySlug', () => {
  test('returns the matching artwork', () => {
    const art = getArtworkBySlug('coastal-light-i')
    expect(art).toBeDefined()
    expect(art?.title).toBe('Coastal Light I')
    expect(art?.slug).toBe('coastal-light-i')
  })

  test('returns undefined for an unknown slug', () => {
    expect(getArtworkBySlug('does-not-exist')).toBeUndefined()
  })
})

describe('availableArtworks', () => {
  test('every artwork is available', () => {
    expect(availableArtworks.length).toBeGreaterThan(0)
    availableArtworks.forEach(a => expect(a.available).toBe(true))
  })

  test('excludes sold works', () => {
    const soldSlugs = artworks.filter(a => !a.available).map(a => a.slug)
    const availableSlugs = availableArtworks.map(a => a.slug)
    soldSlugs.forEach(slug => expect(availableSlugs).not.toContain(slug))
  })
})

describe('featuredArtworks', () => {
  test('every artwork is featured', () => {
    expect(featuredArtworks.length).toBeGreaterThan(0)
    featuredArtworks.forEach(a => expect(a.featured).toBe(true))
  })
})

describe('artworks schema', () => {
  test.each(artworks)('$title has required fields', art => {
    expect(art.slug).toBeTruthy()
    expect(art.title).toBeTruthy()
    expect(art.year).toBeGreaterThan(2000)
    expect(art.medium).toBeTruthy()
    expect(art.dimensions).toBeTruthy()
    expect(art.image).toBeTruthy()
    expect(typeof art.available).toBe('boolean')
  })

  test('slugs are unique', () => {
    const slugs = artworks.map(a => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('exhibitions', () => {
  test('all exhibitions have required fields', () => {
    exhibitions.forEach(e => {
      expect(e.id).toBeTruthy()
      expect(e.title).toBeTruthy()
      expect(e.venue).toBeTruthy()
      expect(e.year).toBeGreaterThan(2000)
      expect(['solo', 'group']).toContain(e.type)
    })
  })
})

describe('pressItems', () => {
  test('all press items have required fields', () => {
    pressItems.forEach(p => {
      expect(p.id).toBeTruthy()
      expect(p.publication).toBeTruthy()
      expect(p.headline).toBeTruthy()
      expect(p.excerpt).toBeTruthy()
      expect(p.year).toBeGreaterThan(2000)
    })
  })
})
