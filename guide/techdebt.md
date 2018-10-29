---
path: /guide/techdebt
title: Tech Debt
---

### How we think about Tech-Debt

The intent of this document is to explain what tech-debt means to us, why we work on tech-debt, and how we prioritize that work.

There are generally 3 levels at which we approach tech-debt.

* Long-term Tech-Debt Themes and Strategies
* Tactical Refactoring to Enable Features
* Ongoing Tasks to Prevent Rot

#### 1. Strategic: Long-term Tech-Debt Themes

Themes or initiatives that are broad and ongoing. eg. "**Migrate web server background jobs to reliable/transactional off-server processes**" or "**Reduce amount of hard-coded sql queries**" or **reduce manual deployment steps**".

These are not necessarily specific things we want to fix or build. They're ongoing themes that **have implications on how we design and plan new feature work**. We aren't usually going to try to "fix all hard-coded sql queries" or "migrate all background jobs" as one chunk of work. These themes might be guiding principles as we plan new releases and features, and we'll address them incrementally as we find opportunities/reasons.

It is normally healthy for software to have some amount of tech-debt. It usually means that your team has intentionally chosen to prioritize speed-to-market over the perfect architecture in the short term. You've decided it is valuable to launch a minimally-viable change so we can get feedback and iterate faster. Ideally, when you make this choice, you design the initial offering with future iteration and scaling in mind.

#### 2. Tactical: Refactoring to Enable Features

Planned refactoring of existing features in order to enable ongoing development for those features. eg. "Refactor administration portal to enable localization, configurability, branding" or "Make address updates transactional and reliable by removing dependencies on scheduled automation".

The thing to emphasize when you're planning is that you aren't just working on tech-debt in a vacuum. We're looking at our Themes and making sure we're addressing new feature work in a way that fits into our ongoing strategies.

#### 3. Opportunistic: Chores and Tasks to Prevent Rot

Lots of small, ongoing tasks that can be worked on opportunistically. They are usually queued up as you come across them in day-to-day work or as you make specific choices that favor completing a task over refactoring or cleaning up.

This type of tech-debt will be built into our capacity planning as a bandwidth percentage, as it is always ongoing. You can use historical data on how much ongoing debt you've worked on to make estimates about how much you'll need to work on in the future.