# Healthome Professional Refactor V1.4.0

## Goals
- Keep the working V1.3.4 user flows while improving maintainability.
- Move reusable UI components and visual styles out of the application container.
- Move static healthcare catalog data out of screen logic.
- Centralize persistence, networking, configuration, formatting and search utilities.
- Add a repeatable JavaScript validation command before EAS builds.

## Architecture
```text
App.js
  └── ErrorBoundary + StatusBar
      └── HealthomeApp (application state / navigation orchestration)

src/
  ├── components/       reusable UI
  ├── data/             static/catalog data
  ├── services/         persistence + API boundary
  ├── hooks/            reusable stateful behavior
  ├── theme/            visual system + styles
  ├── utils/            pure helpers
  ├── config/           environment/runtime configuration
  └── core/             error handling
```

## Build validation
1. `npm install`
2. `npm run validate`
3. `npx expo export --platform android`
4. `npx eas-cli@latest build -p android --profile apk --clear-cache`

The application container is intentionally kept as the orchestration boundary in this pass so existing navigation and state flows are not destabilized. Future feature work should add new screens and services under `src/` rather than expanding the monolithic container.
