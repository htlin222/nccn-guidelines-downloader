+++
id           = "mastocytosis/SM-3"
gid          = "mastocytosis"
ref          = "SM-3"
page         = 8
title        = "Treatment for KIT D816V-negative systemic mastocytosis"
nccn_version = "3.2026"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["SM-1", "SM-2", "SM-6", "SM-9"]

[facets]
disease   = "mastocytosis"
histology = "mastocytosis"
biomarker = "kit"
timepoint = "primary-treatment"

[[variables]]
name = "kit_d816v"
type = "text"
[[variables]]
name = "mlne_fish"
type = "text"
[[variables]]
name = "wdsm"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "sm_diagnosis"
type = "enum"
options = ["non-advanced SM", "chronic MCL", "advanced SM"]
[[variables]]
name = "kit_ngs"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Systemic Mastocytosis v3.2026, SM-3, p8
- Applies once KIT D816V-negative has been established by a high-sensitivity (0.01%–0.1%) assay on bone marrow
- Applies only after FISH for myeloid and/or lymphoid neoplasm with eosinophilia (MLNE) has been excluded
- All recommendations category 2A unless stated otherwise

# Assessment

- KIT D816V result ___ (kit_d816v)
    - Negative by high-sensitivity (0.01%–0.1%) assay
    - Assay run on bone marrow
        - Peripheral blood may not be a sufficiently sensitive tissue compartment to establish KIT D816V-negativity
        - A bone marrow biopsy is recommended to confirm KIT D816V-negativity
    - ddPCR or KIT D816V allele-specific PCR will not pick up the alternative KIT D816V mutations
- FISH for myeloid and/or lymphoid neoplasm with eosinophilia (MLNE) ___ (mlne_fish)
    - Must have been excluded
- Well-differentiated SM (WDSM) ___ (wdsm)
- Diagnosis ___ (sm_diagnosis)
    - Non-advanced SM or chronic MCL
    - Advanced SM, excluding chronic MCL
    - Chronic MCL does not exhibit C-findings (organ damage)

# WDSM present

- Well-differentiated SM (WDSM), yes
    - Diagnosis of non-advanced SM or chronic MCL
        - Chronic MCL does not exhibit C-findings (organ damage)
- Preferred: Imatinib
- Other recommended: Clinical trial

# Not WDSM, advanced SM

- Well-differentiated SM (WDSM), no
    - Diagnosis of advanced SM, excluding chronic MCL
        - Chronic MCL does not exhibit C-findings (organ damage)
- NGS reveals alternate (non exon 17) KIT mutation in exons 8-11 ___ (kit_ngs)
    - Alternative KIT D816 mutations (eg, D816H, D816T, D816L) or other mutations in exon 17 should still follow the treatment algorithms on other pages
- Alternate KIT mutation in exons 8-11 present
    - Preferred: Imatinib
    - Other recommended: Clinical trial
- No alternate KIT mutation in exons 8-11
    - Preferred: Cladribine
    - Other recommended
        - Clinical trial
        - Midostaurin
        - Intensive induction chemotherapy
    - Consider HCT for patients with responsive disease

# Next

- Intensive induction chemotherapy, see NCCN Guidelines for AML
- Responsive disease on treatment for advanced SM, consider HCT
- Alternative KIT D816 mutations (eg, D816H, D816T, D816L) or other mutations in exon 17, follow the treatment algorithms on other pages
