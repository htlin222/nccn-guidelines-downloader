+++
id           = "genetics_ceg/GENE-18"
gid          = "genetics_ceg"
ref          = "GENE-18"
page         = 133
title        = "Strength of evidence definitions and footnotes for the cancer risk management based on genetic test results tables"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-12", "GENE-13", "GENE-14", "GENE-15", "GENE-16", "GENE-17", "GENE-19"]

[facets]
disease   = "genetics_ceg"
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene"
type = "text"
[[variables]]
name = "strength_of_evidence"
type = "enum"
options = ["very-strong", "strong", "limited", "none"]
[[variables]]
name = "evidence_basis"
type = "text"
[[variables]]
name = "surveillance_plan"
type = "text"
[[variables]]
name = "patient_preferences"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-18, p133
- Legend for the cancer risk management based on genetic test results tables: how to read the strength of evidence rating, plus the footnotes those tables carry
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Gene being discussed ___ (gene)
- Strength of evidence stated for this gene ___ (strength_of_evidence)
- Study type the rating rests on ___ (evidence_basis)
- Colonoscopy surveillance regimen being considered ___ (surveillance_plan)
- Patient preferences about that regimen ___ (patient_preferences)

# Strength of evidence - how to read the rating

- Very strong
    - Prospective cohort studies in a population-based setting have demonstrated risk
- Strong
    - Traditional case-control studies
    - Or more than three case-control studies
        - Includes those with cases ascertained by commercial laboratories
        - Includes those without controls from the same population
    - Traditional case-control study, defined
        - A retrospective study
        - Compares patients with a disease or specific outcome (cases)
        - Against patients without the disease or outcome (controls)
- Limited
    - Small sample size, or case series
- None

# Caution before finalizing a colonoscopy surveillance regimen

- The Panel recognizes that data to support the surveillance recommendations for these particular genes are evolving at this time
- Use caution when implementing final colonoscopy surveillance regimens
    - Put the regimen in the context of patient preferences
    - Put the regimen in the context of new knowledge that may emerge

# Counseling framework for moderate-penetrance colorectal cancer susceptibility genes

- Katona BW, Yurgelun MB, Garber JE, et al. A counseling framework for moderate-penetrance colorectal cancer susceptibility genes. Genet Med 2018;20:1324-1327
- Breen KE, Katona BW, Catchings A, et al. An updated counseling framework for moderate-penetrance colorectal cancer susceptibility genes. Genet Med 2022;24:2587-2590
