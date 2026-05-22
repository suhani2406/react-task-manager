<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# CollegeCompass - College Discovery Platform

A production-focused MVP for discovering, comparing and shortlisting colleges.

## Features Built

1. College Listing + Search
- Search colleges by name
- Filter by location and course
- College cards with fees, rating and placement data

2. College Detail Page
- Overview
- Courses
- Placements
- Mock reviews

3. Compare Colleges
- Add 2-3 colleges for comparison
- Compare fees, rating, location, placement percentage and average package

4. College Predictor
- Rule-based predictor using exam and rank
- Shows eligible colleges based on cutoff-style rank logic

## Tech Stack

- React.js
- React Router
- CSS
- LocalStorage for comparison state
- Mock dataset prepared for backend/database integration

## Product Decisions

I prioritized the Compare Colleges feature because it directly helps users make decisions.

The predictor is rule-based for the MVP so that the recommendation logic remains simple, fast and explainable.

Search and filters were added to make the listing usable instead of being a static college dump.

## Future Improvements

- PostgreSQL database integration
- Node.js REST APIs
- Authentication and saved colleges
- Real admission cutoff dataset
- AI-based college recommendations