+++
id           = "aml/AML-1"
gid          = "aml"
ref          = "AML-1"
page         = 31
title        = "Induction choice by risk group for patients eligible for intensive induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-A", "AML-2", "AML-2A", "AML-3", "AML-4"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "any"]
timepoint = "induction"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cytogenetics"
type = "text"
[[variables]]
name = "molecular"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["favorable-cytogenetics", "favorable-molecular", "intermediate-eln", "poor-adverse"]
[[variables]]
name = "cd33"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "anthracycline"
type = "enum"
options = ["eligible", "ineligible"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-1, p31
- Applies to patients who are intensive induction eligible
- Risk group definitions, favorable/intermediate-risk groups and ELN risk: AML-A
- Footnotes for this page are on AML-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Intensive induction eligible
- Cytogenetics ___ (cytogenetics)
- Molecular mutation profile ___ (molecular)
- Risk group per AML-A ___ (risk_group)
- CD33 ___ (cd33)
- FLT3 ___ (flt3)
- Anthracycline ___ (anthracycline)

# Induction, favorable-risk AML by cytogenetics (core binding factor, CBF-AML)

- Preferred
    - Standard 7 + 3 (daunorubicin or idarubicin) + gemtuzumab ozogamicin, for CD33 positive disease
- Other Recommended
    - Standard 7 + 3 (daunorubicin or idarubicin)
    - FLAG-IDA (fludarabine + cytarabine + granulocyte colony-stimulating factor [G-CSF] + idarubicin) + gemtuzumab ozogamicin, for CD33 positive disease (category 2B)
        - Use with caution in patients >60 y
- Useful in Certain Circumstances
    - FLAG + gemtuzumab ozogamicin, for CD33 positive disease (category 2B)
        - For those ineligible for an anthracycline

# Induction, favorable-risk AML by molecular mutation profile or intermediate-risk AML per ELN (AML-A)

- Preferred
    - Standard 7 + 3 (daunorubicin or idarubicin) (category 1)
- Other Recommended
    - Standard 7 + 3 (daunorubicin or idarubicin) + gemtuzumab ozogamicin, for CD33 positive disease
    - FLAG-IDA (category 2B)
        - Use with caution in patients >60 y
    - FLAG-IDA + gemtuzumab ozogamicin, for CD33 positive disease (category 2B)
        - Use with caution in patients >60 y
    - CLAG-M (cladribine + cytarabine + G-CSF + mitoxantrone) (category 2B)
        - Use with caution in patients >60 y

# Induction, AML with FLT3 mutation

- Standard 7 + 3 (daunorubicin or idarubicin) + midostaurin, for FLT3-internal tandem duplication (ITD) or tyrosine kinase domain (TKD) (category 1)
- Standard 7 + 3 (daunorubicin or idarubicin) + quizartinib, for FLT3-ITD only (category 1)

# Next

- Poor/adverse risk groups, go to AML-2
- Follow-up and re-induction after cytarabine-based induction, go to AML-3
- Not eligible for intensive induction, go to AML-4
