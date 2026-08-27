+++
id           = "cutaneous_melanoma/ST-1"
gid          = "cutaneous_melanoma"
ref          = "ST-1"
page         = 113
title        = "AJCC T category definitions for cutaneous melanoma, by thickness and ulceration status"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-1", "ME-2", "ME-3"]

[facets]
disease   = "cutaneous_melanoma"
timepoint = ["staging", "diagnosis"]

[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "thickness_mm"
type = "number"
[[variables]]
name = "ulceration"
type = "enum"
options = ["without ulceration", "with ulceration", "unknown or unspecified"]
[[variables]]
name = "t_category"
type = "text"
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ST-1, p113
- Table 1. American Joint Committee on Cancer (AJCC) Definitions for T, N, M
- This page carries the T category only; the table is continued
- Used with permission of the American College of Surgeons, Chicago, Illinois
    - The original source for this information is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing
    - For complete information and data supporting the staging tables, visit www.springer.com

# Assessment

- Primary tumor site: ___ (primary_site)
- Tumor thickness: ___ (thickness_mm) mm
- Ulceration status: ___ (ulceration)
- T category assigned: ___ (t_category)

# T categories with no thickness and no ulceration status

- TX: primary tumor thickness cannot be assessed
    - Thickness: not applicable
    - Ulceration status: not applicable
    - Example: diagnosis by curettage
- T0: no evidence of primary tumor
    - Thickness: not applicable
    - Ulceration status: not applicable
    - Example: unknown primary, or completely regressed melanoma
- Tis: melanoma in situ
    - Thickness: not applicable
    - Ulceration status: not applicable

# T1

- T1: thickness ≤1 mm
    - Ulceration status unknown or unspecified
- T1a: thickness <0.8 mm
    - Without ulceration
- T1b, either of
    - Thickness <0.8 mm, with ulceration
    - Thickness 0.8–1.0 mm, with or without ulceration

# T2

- T2: thickness >1.0–2.0 mm
    - Ulceration status unknown or unspecified
- T2a: thickness >1.0–2.0 mm
    - Without ulceration
- T2b: thickness >1.0–2.0 mm
    - With ulceration

# T3

- T3: thickness >2.0–4.0 mm
    - Ulceration status unknown or unspecified
- T3a: thickness >2.0–4.0 mm
    - Without ulceration
- T3b: thickness >2.0–4.0 mm
    - With ulceration

# T4

- T4: thickness >4.0 mm
    - Ulceration status unknown or unspecified
- T4a: thickness >4.0 mm
    - Without ulceration
- T4b: thickness >4.0 mm
    - With ulceration

# Next

- Table 1 is continued on the following page with the N and M category definitions
