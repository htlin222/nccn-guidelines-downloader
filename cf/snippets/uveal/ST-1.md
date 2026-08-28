+++
id           = "uveal/ST-1"
gid          = "uveal"
ref          = "ST-1"
page         = 23
title        = "AJCC T category definitions for choroidal and ciliary body melanoma"
nccn_version = "2.2026"
nccn_date    = "03/18/26"
generated    = "2026-08-28"
see_also     = ["ST-3", "UM-1"]

[facets]
disease   = "uveal"
timepoint = "staging"

[[variables]]
name = "tumor_size_category"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "basal_diameter"
type = "text"
[[variables]]
name = "thickness"
type = "text"
[[variables]]
name = "ciliary_body"
type = "enum"
options = ["involved", "not involved"]
[[variables]]
name = "extraocular_extension"
type = "enum"
options = ["none", "5 mm or less in largest diameter", "more than 5 mm in largest diameter"]
[[variables]]
name = "t_category"
type = "text"
+++

# Source

- NCCN Melanoma: Uveal v2.2026, ST-1, p23
- American Joint Committee on Cancer (AJCC) Definitions of TNM for Choroidal and Ciliary Melanoma (8th ed., 2017)
- Table 1. Definitions for T, N, M — Choroidal and Ciliary Body Melanomas
- This page carries the primary tumor (T) definitions only; the table is continued
- Used with permission of the American College of Surgeons, Chicago, Illinois
    - The original source for this information is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Tumor size category: ___ (tumor_size_category)
    - Assigned from the four tumor size categories defined in Figure 1 (ST-3)
    - Largest tumor basal diameter: ___ (basal_diameter)
        - In clinical practice may be estimated in optic disc diameters (DD; average: 1 DD = 1.5 mm)
    - Tumor thickness: ___ (thickness)
        - In clinical practice may be estimated in diopters (average: 2.5 diopters = 1 mm)
    - Ultrasonography and fundus photography are used to provide more accurate measurements
    - If the measurements are histopathologic and recorded after fixation, diameter and thickness may be underestimated because of tissue shrinkage
- Ciliary body involvement: ___ (ciliary_body)
- Extraocular extension: ___ (extraocular_extension)
- T category assigned: ___ (t_category)

# T categories with no size category

- TX: primary tumor cannot be assessed
- T0: no evidence of primary tumor

# T1 — tumor size category 1

- T1: tumor size category 1
- T1a: without ciliary body involvement and extraocular extension
- T1b: with ciliary body involvement
- T1c: without ciliary body involvement but with extraocular extension ≤5 mm in largest diameter
- T1d: with ciliary body involvement and extraocular extension ≤5 mm in largest diameter

# T2 — tumor size category 2

- T2: tumor size category 2
- T2a: without ciliary body involvement and extraocular extension
- T2b: with ciliary body involvement
- T2c: without ciliary body involvement but with extraocular extension ≤5 mm in largest diameter
- T2d: with ciliary body involvement and extraocular extension ≤5 mm in largest diameter

# T3 — tumor size category 3

- T3: tumor size category 3
- T3a: without ciliary body involvement and extraocular extension
- T3b: with ciliary body involvement
- T3c: without ciliary body involvement but with extraocular extension ≤5 mm in largest diameter
- T3d: with ciliary body involvement and extraocular extension ≤5 mm in largest diameter

# T4 — tumor size category 4

- T4: tumor size category 4
- T4a: without ciliary body involvement and extraocular extension
- T4b: with ciliary body involvement
- T4c: without ciliary body involvement but with extraocular extension ≤5 mm in largest diameter
- T4d: with ciliary body involvement and extraocular extension ≤5 mm in largest diameter
- T4e: any tumor size category with extraocular extension >5 mm in largest diameter

# Next

- Table 1 is continued on the following page
