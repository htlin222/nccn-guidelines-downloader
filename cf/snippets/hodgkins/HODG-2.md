+++
id           = "hodgkins/HODG-2"
gid          = "hodgkins"
ref          = "HODG-2"
page         = 10
title        = "Staging and risk classification of classic Hodgkin lymphoma, and which treatment page it sends you to"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-3", "HODG-4", "HODG-5", "HODG-5A", "HODG-6", "HODG-7", "HODG-9", "HODG-10"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IA", "IIA", "IB", "IIB", "III", "IV"]
[[variables]]
name = "bulky"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "nodal_regions"
type = "number"
[[variables]]
name = "esr"
type = "number"
[[variables]]
name = "e_lesion"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age ≥18 years) v2.2026, HODG-2, p10
- Applies to classic Hodgkin lymphoma (CHL)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, classic Hodgkin lymphoma (CHL)
- Stage ___ (stage)
- Bulky mediastinal disease, or >10 cm adenopathy: ___ (bulky)
    - For definitions of bulky disease, see HODG-3
- Number of nodal regions involved: ___ (nodal_regions)
    - For definitions of lymph node regions, see HODG-3
- ESR ___ (esr) mm/hr
- E-lesion(s): ___ (e_lesion)

# Stage IA/IIA classification

- Favorable disease by GHSG criteria
    - Bulky mediastinal disease or >10 cm adenopathy: no
    - Number of nodal regions: ≤2
    - ESR ≥50 mm/hr: no
    - E-lesion(s): no
- Favorable disease by EORTC criteria
    - Bulky mediastinal disease or >10 cm adenopathy: no
    - Number of nodal regions: ≤3
    - ESR ≥50 mm/hr: no
    - E-lesion(s): yes or no
- Unfavorable disease
    - Bulky mediastinal disease or >10 cm adenopathy: yes
    - Number of nodal regions: any
    - ESR ≥50 mm/hr: yes or no
    - E-lesion(s): yes or no

# Stage IB/IIB classification

- Unfavorable disease
    - Bulky mediastinal disease or >10 cm adenopathy: yes or no
    - Number of nodal regions: any
    - ESR ≥50 mm/hr: yes or no
    - E-lesion(s): yes or no

# Stage III–IV classification

- Advanced disease
    - Bulky mediastinal disease or >10 cm adenopathy: yes or no
    - Number of nodal regions: any
    - ESR ≥50 mm/hr: not applicable
    - E-lesion(s): yes or no

# Next

- Favorable disease by GHSG criteria, go to HODG-5
- Favorable disease by EORTC criteria, go to HODG-5A
- Unfavorable disease, go to HODG-6
- Advanced disease, go to HODG-7
- Primary treatment of CHL, important considerations: HODG-4
- Adults age >60 years, or adults unfit for intensive therapy: HODG-9
- Management of CHL during pregnancy: HODG-10
