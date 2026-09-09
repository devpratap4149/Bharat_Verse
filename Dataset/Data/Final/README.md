# BharatVerse destination-data package

## Dataset status

This package was built from five supplied files without modifying them. `master_destinations.csv` has **144** rows, one per monument/site, created only from the **144 exact normalized name matches** between the two processed monument CSVs. The supplied ASI CPM PDF is used to verify central-protected-list presence where an exact normalized name appears in its extracted text (**45/144** matches). The original source files remain unchanged.

## Source classification

| Source | Classification | Reason |
|---|---|---|
| `CPM List 2024_(3698).pdf` | MUST USE | ASI central-protected-monuments list; official list membership source. |
| `india_tourism_official_2024.csv` | MUST USE | Ministry of Tourism state/UT aggregate data, with embedded source; not destination-level. |
| `asi_monuments_clean.csv` | USEFUL BUT REQUIRES CLEANING | Monument-level visitor measures but no primary source/URL metadata. |
| `bharatverse_monuments.csv` | USEFUL BUT REQUIRES CLEANING | Coordinates/categories and visitor fields, but no field-level provenance; retained as unverified enrichment. |
| `tourism_arrivals_region.csv` | OPTIONAL | Country/region aggregates, not destination records, and no provenance metadata. |

## Field and source rules

- `visitor_count`, `domestic_visitors`, and `international_visitors` are from `asi_monuments_clean.csv` and specifically represent the source's **2019-20** measures; they are not 2024 counts.
- City/state, coordinates, heritage category, and tourism popularity are supplied by `bharatverse_monuments.csv`; they are retained as **UNVERIFIED** in `source_provenance.csv` and must not be presented as official facts until independently cited.
- The ASI PDF is official only for central-protected-list presence. It does not supply visitor, safety, accessibility, budget, or recommendation facts.
- Missing safety/accessibility fields are `NULL` or `Not Available`; no score has been created. `hidden_gem_score` is `NULL` for all rows because no defensible scoring inputs/methodology exist.
- There is no `conflicts.csv`: all 144 matched domestic and foreign visitor values agree between the two processed monument tables. Shared coordinates are review candidates, not conflicts.

## Normalization and duplicate review

- Destination joins use lowercase alphanumeric-normalized names only; the original ASI display name is preserved in `name`.
- Coordinates are decimal degrees. All supplied coordinates are within an India bounding box, but **4 records share coordinates in 2 pairs**. They are recorded in `duplicate_review.csv`; none was merged.
- State/city strings are preserved from the processed enrichment source. District is `Not Available` because it is not carried by that CSV and was not inferred from the PDF.
- Heritage categories are retained exactly as supplied by the processed enrichment source, not relabeled as official classifications.

## Recommendation readiness

The destination type, heritage category, state, and supplied popularity label can be used as provisional content-based features only after field validation. Collaborative filtering is not possible without user interaction data. Hybrid/future-ML models require validated content plus interaction data. Safety, accessibility, budget, crowd, and hidden-gem scores must remain unavailable until evidence and a reproducible calculation are added.

## Final validation

- Total destinations / unique destination names: **144 / 144**
- Exact duplicate records removed: **0**
- Coordinates present / missing: **144 / 0**
- Destinations with official CPM-list match: **45**
- Destinations with visitor data: **144**
- Destinations with women-safety data: **0**
- Destinations with accessibility data: **0**
- Fields entirely missing: description, historical/cultural significance, best visit time, duration, budget, crowd, all safety fields, all accessibility fields, local experience fields, and responsible-tourism notes.

## Top remaining data-quality problems

1. Processed visitor data has no primary-source citation or URL.
2. Coordinates, city/state, categories, and popularity labels have no field-level source.
3. Two coordinate pairs are shared by differently named sites.
4. The processed visitor data has missing growth values (one domestic, two foreign).
5. The source period for master visitor data is 2019-20, not 2024.
6. State/UT tourism data cannot be allocated to individual destinations.
7. The regional-arrivals CSV has no source year or provenance metadata.
8. No women-safety evidence exists in supplied sources.
9. No accessibility evidence exists in supplied sources.
10. No source-backed inputs exist for a hidden-gem score.
