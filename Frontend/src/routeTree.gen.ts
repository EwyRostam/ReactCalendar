/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RelationshipLazyImport = createFileRoute('/relationship')()
const OverviewLazyImport = createFileRoute('/overview')()
const DayLazyImport = createFileRoute('/day')()
const AboutLazyImport = createFileRoute('/about')()
const ReactLazyImport = createFileRoute('/React')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const RelationshipLazyRoute = RelationshipLazyImport.update({
  path: '/relationship',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/relationship.lazy').then((d) => d.Route))

const OverviewLazyRoute = OverviewLazyImport.update({
  path: '/overview',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/overview.lazy').then((d) => d.Route))

const DayLazyRoute = DayLazyImport.update({
  path: '/day',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/day.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ReactLazyRoute = ReactLazyImport.update({
  path: '/React',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/React.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/React': {
      preLoaderRoute: typeof ReactLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/day': {
      preLoaderRoute: typeof DayLazyImport
      parentRoute: typeof rootRoute
    }
    '/overview': {
      preLoaderRoute: typeof OverviewLazyImport
      parentRoute: typeof rootRoute
    }
    '/relationship': {
      preLoaderRoute: typeof RelationshipLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ReactLazyRoute,
  AboutLazyRoute,
  DayLazyRoute,
  OverviewLazyRoute,
  RelationshipLazyRoute,
])

/* prettier-ignore-end */
