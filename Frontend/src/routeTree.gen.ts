/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const OverviewLazyImport = createFileRoute('/overview')()
const DayLazyImport = createFileRoute('/day')()
const AddEmotionsLazyImport = createFileRoute('/addEmotions')()
const AboutLazyImport = createFileRoute('/about')()
const ReactLazyImport = createFileRoute('/React')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const OverviewLazyRoute = OverviewLazyImport.update({
  path: '/overview',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/overview.lazy').then((d) => d.Route))

const DayLazyRoute = DayLazyImport.update({
  path: '/day',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/day.lazy').then((d) => d.Route))

const AddEmotionsLazyRoute = AddEmotionsLazyImport.update({
  path: '/addEmotions',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/addEmotions.lazy').then((d) => d.Route))

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
    '/addEmotions': {
      preLoaderRoute: typeof AddEmotionsLazyImport
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
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  ReactLazyRoute,
  AboutLazyRoute,
  AddEmotionsLazyRoute,
  DayLazyRoute,
  OverviewLazyRoute,
])

/* prettier-ignore-end */
