+++
id           = "hct/HCT-4"
gid          = "hct"
ref          = "HCT-4"
page         = 12
title        = "Hematopoietic cell mobilization and stem cell collection targets, autologous and allogeneic donors"
nccn_version = "3.2026"
nccn_date    = "07/30/26"
generated    = "2026-08-30"
see_also     = ["HCT-4A", "HCT-A"]

[facets]
disease   = "hct"
timepoint = "transplant"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "donor_type"
type = "enum"
options = ["autologous", "allogeneic"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "cd34_count"
type = "text"
[[variables]]
name = "cd34_yield"
type = "text"
+++

# Source

- NCCN Hematopoietic Cell Transplantation v3.2026, HCT-4, p12
- Applies to hematopoietic cell mobilization, autologous and allogeneic donors
- For donor evaluation and follow-up recommendations, refer to FACT-JACIE International Standards for Hematopoietic Cellular Therapy Product Collection, Processing, and Administration (8th edition); 2021
- Mobilization regimens and doses: HCT-4A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (diagnosis)
- Mobilization for ___ (donor_type) donor
- Planned mobilization regimen ___ (regimen), doses per HCT-4A
- CD34 count ___ (cd34_count)
- Collected yield ___ (cd34_yield) x 10^6 CD34 cells/kg

# Mobilization for autologous donors

- Treatment, one of
    - Granulocyte colony-stimulating factor (G-CSF) + plerixafor
    - G-CSF + cyclophosphamide ± plerixafor
    - Granulocyte-macrophage colony-stimulating factor + cyclophosphamide ± plerixafor
    - Pegfilgrastim + plerixafor
    - G-CSF + motixafortide
    - G-CSF
    - G-CSF + disease-specific chemotherapy ± plerixafor
    - Alternative chemo-mobilization regimens with disease-specific activity are also appropriate
- CD34 count (preferred)
- Stem cell collection with minimum target yield of 2–5 x 10^6 CD34 cells/kg (preferred)
    - Adequate stem cell collection depends on individual patient- and disease-related factors
    - Lower yields may be adequate, but >2 x 10^6 CD34 cells/kg is strongly preferred, with a target of 4–5 x 10^6 CD34 cells/kg
    - Stem cell yields <2 x 10^6 CD34 cells/kg may result in delayed engraftment
    - Larger cell doses have been associated with a more rapid time to platelet and neutrophil recovery
- If insufficient collection, consider
    - Increasing G-CSF dose, or changing dose schedule
    - Addition of plerixafor to G-CSF
    - Chemo-mobilization ± plerixafor
    - Bone marrow harvest
        - For bone marrow harvest recommendations, refer to the National Marrow Donor Program/Be the Match
    - Rest for 2–4 weeks (if feasible) before remobilization attempt

# Mobilization for allogeneic donors

- Treatment
    - G-CSF
- CD34 count (preferred)
- Stem cell collection with minimum target yield of 4–5 x 10^6 CD34 cells/kg (preferred)
    - Adequate stem cell collection depends on individual patient- and disease-related factors
    - Lower yields may be adequate, but >2 x 10^6 CD34 cells/kg is strongly preferred, with a target of 4–5 x 10^6 CD34 cells/kg
    - Stem cell yields <2 x 10^6 CD34 cells/kg may result in delayed engraftment
    - Larger cell doses have been associated with a more rapid time to platelet and neutrophil recovery
- If insufficient collection, consider
    - Addition of plerixafor to G-CSF
    - Bone marrow harvest
        - For bone marrow harvest recommendations, refer to the National Marrow Donor Program/Be the Match

# Next

- Once collection is adequate, go to Principles of Conditioning for HCT (HCT-A 1 of 11)
