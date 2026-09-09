# BharatVerse 2.0 — Step 1A Complete Data Audit

Scope: relevant data/reference files in BharatVerse_New.zip, excluding .git, node_modules, frontend assets and build artifacts. No project files were modified.

Files audited: **67**.

| File | Format | Rows/pages | Columns | Contains | Source quality | Decision |
|---|---:|---:|---:|---|---|---|
| Dataset/Data/Final/accessibility_data.csv | CSV | 144 | 15 | FINAL SAFETY/ACCESS | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Final/dataset_audit.csv | CSV | 13 | 14 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/data_quality_report.csv | CSV | 5 | 19 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/destination_provenance.csv | CSV | 576 | 8 | FINAL GOVERNANCE | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Final/destination_quality.csv | CSV | 823 | 6 | FINAL GOVERNANCE | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Final/destination_schema.json | JSON | N/A | 5 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/duplicate_review.csv | CSV | 2 | 5 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/feature_dictionary.csv | CSV | 16 | 7 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/frontend_field_mapping.csv | CSV | 16 | 4 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/heritage_integration_report.csv | CSV | 144 | 9 | FINAL AUDIT/GOVERNANCE | Generated governance artifact | KEEP/REVIEW |
| Dataset/Data/Final/master_destinations.csv | CSV | 144 | 48 | FINAL DRAFT | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Final/recommendation_features.csv | CSV | 144 | 24 | FINAL DERIVED | Derived from current master | DROP FROM FOUNDATION |
| Dataset/Data/Final/source_provenance.csv | CSV | 434 | 12 | FINAL GOVERNANCE | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Final/women_safety_data.csv | CSV | 144 | 18 | FINAL SAFETY/ACCESS | Previous generated package | REVIEW/REBUILD |
| Dataset/Data/Official Tourism/india_tourism_official_2024.csv | CSV | 36 | 13 | OFFICIAL TOURISM | Official Ministry tourism statistics | KEEP |
| Dataset/Data/Processed/asi_monuments_clean.csv | CSV | 144 | 8 | PROCESSED TOURISM | Derived from tourism statistics; source metadata incomplete | TRANSFORM |
| Dataset/Data/Processed/bharatverse_monuments.csv | CSV | 144 | 9 | PROCESSED DESTINATIONS | Derived/processed; source metadata incomplete | TRANSFORM |
| Dataset/Data/Raw/CPM List 2024_(3698).pdf | PDF | reference PDF | 0 | RAW / AUTHORITATIVE | ASI official | KEEP |
| Dataset/Data/Raw/tourism_arrivals_region.csv | CSV | 230 | 8 | RAW TOURISM | Source metadata not embedded | REFERENCE |
| DS/bharatverse_asi_monument_analysis.csv | CSV | 145 | 14 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_heritage_geo_matches.csv | CSV | 145 | 36 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_hidden_heritage_score_prototype.csv | CSV | 20 | 11 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_hidden_heritage_score_v1.csv | CSV | 20 | 15 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_hidden_heritage_score_v2.csv | CSV | 145 | 24 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_hidden_heritage_shortlist_top30.csv | CSV | 30 | 10 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_ml_features.csv | CSV | 145 | 26 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_ml_feature_importance.csv | CSV | 7 | 2 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_ml_model_metrics.csv | CSV | 1 | 7 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_tourism_analysis.csv | CSV | 50 | 6 | DERIVED ANALYTICS/ML | Derived from project datasets | SEPARATE/DEFER |
| DS/bharatverse_unesco_analysis.csv | CSV | 45 | 12 | HERITAGE REFERENCE | UNESCO/derived mapping | REVIEW |
| DS/bharatverse_unesco_india.csv | CSV | 45 | 11 | HERITAGE REFERENCE | UNESCO/derived mapping | REVIEW |
| DS/bharatverse_unesco_state_mapping.csv | CSV | 45 | 15 | HERITAGE REFERENCE | UNESCO/derived mapping | REVIEW |
| DS/CPM List 2024_(3698).pdf | PDF | reference PDF | 0 | RAW / AUTHORITATIVE | ASI official | KEEP |
| DS/Data/Characteristics.csv | CSV | 131 | 1 | POI/GEO DERIVED | Derived from multiple POI sources | REVIEW |
| DS/Data/Citywise Destinations/Destinations_bangalore.csv | CSV | 82 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_chandigarh.csv | CSV | 15 | 4 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_chennai.csv | CSV | 25 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_coimbatore.csv | CSV | 59 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_delhi.csv | CSV | 52 | 4 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_guwahati.csv | CSV | 10 | 6 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_hyderabad.csv | CSV | 21 | 4 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_kolkata.csv | CSV | 23 | 4 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_manali.csv | CSV | 72 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_mumbai.csv | CSV | 25 | 4 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_munnar.csv | CSV | 36 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_palakkad.csv | CSV | 15 | 6 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Citywise Destinations/Destinations_pune.csv | CSV | 25 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/cleaned data/bharatverse_poi_dataset_profiles.csv | CSV | 10 | 4 | POI/GEO DERIVED | Derived from multiple POI sources | REVIEW |
| DS/Data/cleaned data/bharatverse_unified_poi_dataset_v2.csv | CSV | 741 | 8 | POI/GEO DERIVED | Derived from multiple POI sources | REVIEW |
| DS/Data/cleaned data/bharatverse_user_visits_cleaned.csv | CSV | 34515 | 7 | USER/PHOTO BEHAVIOR | YFCC/derived dataset | SEPARATE |
| DS/Data/Indian Tourism Dataset/dataset_schema.json | JSON | N/A | 4 | THIRD-PARTY DESTINATION DATA | Structured dataset; provenance not established in file | REVIEW |
| DS/Data/Indian Tourism Dataset/destination_names.txt | TXT | 100 | 0 | THIRD-PARTY DESTINATION DATA | Structured dataset; provenance not established in file | REVIEW |
| DS/Data/Indian Tourism Dataset/india_tourism_dataset.json | JSON | 100 | 54 | THIRD-PARTY DESTINATION DATA | Structured dataset; provenance not established in file | REVIEW |
| DS/Data/IndianTourismAtlas/places.csv | CSV | 1019 | 8 | POI/GEO | Atlas/structured POI dataset | REVIEW |
| DS/Data/Tourist_Spots.csv | CSV | 459 | 5 | POI/GEO | Structured POI dataset | REVIEW |
| DS/Data/Travel Recommendation/Expanded_Destinations.csv | CSV | 1000 | 6 | TRAVEL RECOMMENDATION | Structured third-party/dataset source | REVIEW |
| DS/Data/Travel Recommendation/Final_Updated_Expanded_Reviews.csv | CSV | 999 | 5 | USER/REVIEWS | Dataset provenance not embedded | SEPARATE |
| DS/Data/Travel Recommendation/Final_Updated_Expanded_UserHistory.csv | CSV | 999 | 5 | USER BEHAVIOR | Dataset provenance not embedded | SEPARATE |
| DS/Data/Travel Recommendation/Final_Updated_Expanded_Users.csv | CSV | 999 | 7 | USER DATA | User-provided/dataset | SEPARATE |
| DS/Data/User_Visits.csv | CSV | 34515 | 1 | USER/PHOTO BEHAVIOR | YFCC/derived dataset | SEPARATE |
| DS/Data/Yfcc100m_PicturesData_India(Refined).csv | CSV | 1582 | 6 | USER/PHOTO BEHAVIOR | YFCC/derived dataset | SEPARATE |
| DS/Data/Yfcc100m_PicturesData_India(Unrefined).csv | CSV | 274654 | 6 | USER/PHOTO BEHAVIOR | YFCC/derived dataset | SEPARATE |
| DS/India Tourism Data Compendium 2025_1.pdf | PDF | reference PDF | 0 | OTHER DATA | Source not established | REVIEW |
| DS/India-Tourism-Statistics-2021-Table-5.2.3.csv | CSV | 178 | 8 | PROCESSED TOURISM | Derived from tourism statistics; source metadata incomplete | TRANSFORM |
| DS/Raw Data 2024.pdf | PDF | reference PDF | 0 | OTHER DATA | Source not established | REVIEW |
| DS/tourism_state_2019_2021.csv | CSV | 10 | 8 | TOURISM STATISTICS | Public/official-looking statistics; source metadata needs validation | REVIEW |
| DS/tourism_up_district_2022_2023.csv | CSV | 10 | 6 | TOURISM STATISTICS | Public/official-looking statistics; source metadata needs validation | REVIEW |

## Decision key
KEEP = direct/important evidence; TRANSFORM = useful but must be normalized/provenanced; REVIEW = possible supporting source requiring validation; SEPARATE = keep outside master foundation; DEFER/DROP = do not use in current foundation.
