# ✅ Full-Stack Web Performance Optimization Checklist

## 🔷 FRONTEND PERFORMANCE (CRP)

- [ ] HTML is lean, valid, and minified.
- [ ] Critical Rendering Path (CRP) is optimized:
  - [ ] Scripts in `<head>` use `async` or `defer`.
  - [ ] Critical CSS is inlined in the `<head>`.
  - [ ] Non-critical CSS is deferred with `rel="preload"` or `media` attributes.
  - [ ] Fonts use `font-display: swap`.
- [ ] DOM is minimal and shallow.
- [ ] Images include `width` and `height` attributes to prevent layout shift.

## 🔷 JAVASCRIPT EXECUTION

- [ ] Code splitting is implemented (routes, components, features).
- [ ] Tree shaking is effective:
  - [ ] Named exports are used.
  - [ ] No wildcard (`*`) imports or exports.
  - [ ] Tree-shakable libraries (e.g., `lodash-es`) are used.
- [ ] `import()` is used for lazy-loading modules.
- [ ] Heavy synchronous scripts are avoided.
- [ ] JavaScript performance is profiled using `performance.now()` or `console.time()`.

## 🔷 REACT-SPECIFIC PERFORMANCE

- [ ] `React.memo` and `PureComponent` are used where helpful.
- [ ] `useMemo` is applied to expensive calculations.
- [ ] `useCallback` is used to memoize function props.
- [ ] `React.lazy` and `Suspense` are used to lazy-load components.
- [ ] Props passed to components are shallow and stable.
- [ ] List components use stable `key` values.

## 🔷 EFFICIENT RENDERING TECHNIQUES

- [ ] List virtualization is used for long lists (e.g., `react-window`, `vue-virtual-scroller`).
- [ ] Conditional rendering avoids unnecessary DOM nodes.
- [ ] Layout thrashing is prevented:
  - [ ] DOM reads/writes are batched.
  - [ ] Use `transform`/`opacity` for animation.
- [ ] Chrome DevTools paint flashing is used to spot repaints.

## 🔷 FRONTEND ASSETS

- [ ] Images are optimized:
  - [ ] Compressed using tools like TinyPNG, Squoosh.
  - [ ] Use WebP or AVIF where supported.
  - [ ] Responsive via `srcset` or `<picture>`.
  - [ ] Lazy loaded with `loading="lazy"` or IntersectionObserver.
- [ ] CSS is optimized:
  - [ ] Minified and compressed.
  - [ ] Unused CSS removed with PurgeCSS or similar.
  - [ ] Critical CSS inlined.
  - [ ] Non-critical CSS loaded with preload or `media`.
- [ ] HTTP/2 or HTTP/3 is enabled.
- [ ] Fonts are subset, use WOFF2, and are preloaded.

## 🔷 BACKEND PERFORMANCE

- [ ] SSR or SSG used appropriately:
  - [ ] SSR for dynamic SEO-critical content.
  - [ ] SSG for static or low-change pages.
- [ ] Server-side caching implemented:
  - [ ] CDN for static assets and SSG.
  - [ ] In-memory cache (e.g., Redis) for frequent API responses.
  - [ ] HTTP headers (Cache-Control, ETag) configured.
- [ ] Gzip or Brotli compression is enabled.
- [ ] API response times are targeted under 200ms.
- [ ] Pagination or streaming used for large responses.

## 🔷 DATABASE PERFORMANCE

- [ ] Queries are optimized:
  - [ ] Only needed columns are selected.
  - [ ] WHERE clauses target indexed fields.
  - [ ] Avoid `SELECT *`.
  - [ ] JOINs are optimized and minimal.
- [ ] Indexing is applied:
  - [ ] Lookup columns are indexed.
  - [ ] Composite indexes created where beneficial.
  - [ ] Redundant indexes are cleaned up.
- [ ] Schema is designed:
  - [ ] Normalized where appropriate.
  - [ ] Denormalized when justified by read performance.
- [ ] Database connections:
  - [ ] Pooled to handle load efficiently.
  - [ ] Limited to avoid exhausting DB resources.

## 🔷 GLOBAL MONITORING & TESTING

- [ ] Lighthouse audits are run regularly.
- [ ] Core Web Vitals targets are met:
  - [ ] LCP < 2.5s
  - [ ] CLS < 0.1
  - [ ] INP < 200ms
- [ ] Chrome DevTools Performance tab used to track reflows, paint, and JS.
- [ ] WebPageTest or GTmetrix used to simulate real load.
- [ ] Navigation Timing API or RUM tools used to collect live metrics.
- [ ] Performance budgets are enforced in build process.
- [ ] Optional: Performance regression checks in CI/CD.

## 🔷 TEAM & PROCESS CULTURE

- [ ] Performance is included in code reviews.
- [ ] Designers avoid layout instability and large visual shifts.
- [ ] Frontend/backend teams collaborate on performance goals.
- [ ] Post-deployment performance reviews are scheduled.
- [ ] Real user metrics are tracked with dashboards or alerts.
- [ ] Team is trained in profiling and measuring performance.

## ✅ Pro Tips

- Don’t guess. Measure everything.
- Optimize the slowest thing, not the most visible thing.
- Performance is a team responsibility—not a single feature.

