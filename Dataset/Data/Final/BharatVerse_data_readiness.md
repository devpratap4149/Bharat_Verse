# BharatVerse data readiness review

## A. Dataset audit

`dataset_audit.csv` audits all source and Final CSV/JSON files; the supplied official ASI PDF is recorded separately. The primary master has **144** records and **144** unique names. The master was produced from exact normalized matches between the two 144-row processed monument files. The ASI PDF lists 3,698 centrally protected monuments/sites; it has **45** exact normalized text matches to current master names. The remainder require manual name/locality/district verification, not automatic confirmation.

## B. Data quality problems

Critical: do not publish scores or support claims for women safety/accessibility - the supplied datasets contain no verified values. High: city/state/coordinates/categories lack field-level provenance; two coordinate pairs are reused across different sites. Medium: visitor counts are 2019-20 figures with no original citation in the processed file; 99 names do not exactly match extracted ASI-PDF text; state/UT statistics cannot be shown as destination counts. See `destination_quality.csv`.

## C. Master design and relationships

Keep `master_destinations.csv` small: identity, name, place, coordinates, category, period-labelled visitor data, and aggregate confidence only. Link 1:many to `destination_provenance.csv`, `destination_safety.csv`, `destination_accessibility.csv`, `destination_quality.csv`, and a future `destination_media.csv`. Separate source facts from editorial content.

## D. Integration plan

1. Join processed monument tables only by exact normalized name (already done for 144 rows).
2. Keep ASI-PDF membership `VERIFIED` only for exact/manual-confirmed name-locality-district matches.
3. Keep Ministry of Tourism state/UT data in its own `state_tourism_statistics` table; never copy it into a monument's visitor count.
4. Keep regional-arrival data in a `regional_arrival_statistics` table.
5. Use `destination_provenance.csv` to expose field source, verification and confidence.

## E-F. Safety and accessibility plan

Current coverage is zero. Keep `women_safety_data.csv` and `accessibility_data.csv` as explicitly unavailable records. Future ingestion needs a dated source, field-level source URL/record, verification status, and confidence. Do not calculate either score until a written, evidence-backed methodology is approved.

## G-H. Recommendation and ML readiness

Content filtering is only provisionally viable from name/type/category/state and historical visitor/popularity fields after verification. Collaborative filtering is not ready: it needs consented user interactions (views, saves, itinerary adds, feedback) and sufficient volume. Start with transparent rule-based filters and provenance labels; later use content similarity, then hybrid ranking once interaction data exists. `feature_dictionary.csv` is the feature contract.

## I. Frontend integration

The current `src/data/places.js` contains 10 hardcoded place objects with hardcoded hidden-gem and women-safety content. Use `frontend_field_mapping.csv`: replace only source-backed identity/name/visitor fields first. Keep descriptions, images, video, relationships, travel planning and all safety/accessibility content editorial or unavailable until independently sourced. Do not replace existing public-facing safety values with the empty safety table; remove or relabel unsupported values first.

## J. Recommended final structure

```text
Dataset/Data/
  Raw/                         # immutable imports
  Processed/                   # reproducible transformations only
  Final/
    master_destinations.csv
    destination_provenance.csv
    destination_quality.csv
    destination_safety.csv
    destination_accessibility.csv
    recommendation_features.csv
    feature_dictionary.csv
    state_tourism_statistics.csv
    regional_arrival_statistics.csv
    heritage_integration_report.csv
    frontend_field_mapping.csv
    README.md
```

## K. Next steps

1. Manually verify the 99 ASI-PDF name variants using monument name, locality and district.
2. Acquire original ASI/MoT citations for visitor data; set source URL/date and confidence.
3. Verify or replace all coordinate/city/state/category values with citable sources; resolve the two shared-coordinate pairs.
4. Remove/relabel unsupported hardcoded safety, accessibility and hidden-gem values in `places.js`.
5. Create a small editorial-content table for descriptions/history/images, each with approval and source fields.
6. Add a build-time CSV-to-JSON import or API layer; do not parse large CSVs directly in React components.
7. Add consented interaction logging before attempting collaborative filtering.
8. Only after verified safety/accessibility evidence exists, define and publish scoring methodology.
