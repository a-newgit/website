---
title: "Lessons from Building Design Systems"
description: "Reflections on what makes design systems succeed or fail, drawn from years of building and maintaining them."
pubDate: 2024-03-15
tags: ["Design Systems", "Process", "Teams"]
draft: false
---

Building design systems is less about components and more about culture. After years of working on them, here are some lessons I keep returning to.

## Start with constraints, not components

The most successful design systems I've worked on started by identifying constraints: what decisions should be automatic? Color, spacing, typography scales—these are the foundation. Components come later, as expressions of these constraints.

## Adoption is a product problem

A design system with beautiful documentation but no users has failed. Treat adoption like any product challenge: understand your users (designers and engineers), identify barriers, and iterate on the experience of using the system.

## Governance matters more than governance sounds

Nobody wants to talk about governance because it sounds bureaucratic. But clear ownership, contribution guidelines, and decision-making processes are what keep systems healthy over time.

## The documentation is the product

Engineers won't read Figma comments. Designers won't dig through code repos. The documentation—its clarity, searchability, and examples—is often what determines whether the system gets used.

## Versioning is harder than you think

Breaking changes in a design system ripple through every product that uses it. Plan for versioning early. Communicate changes clearly. Give teams time to migrate.

## Start small, stay small as long as possible

It's tempting to build comprehensive systems upfront. Resist this. Start with the smallest useful set of components and constraints. Let real usage guide what to add next.
