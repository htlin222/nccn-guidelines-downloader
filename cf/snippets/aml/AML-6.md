+++
id           = "aml/AML-6"
gid          = "aml"
ref          = "AML-6"
page         = 39
title        = "Consolidation therapy by risk group for patients eligible for intensive induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-A", "AML-6A", "AML-1", "AML-4", "AML-7", "AML-8"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "tp53", "del17p", "any"]
timepoint = ["consolidation", "transplant"]

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
options = ["favorable-cbf", "favorable-molecular", "flt3-mutated", "intermediate-eln", "poor-risk"]
[[variables]]
name = "cd33"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "tp53_17p"
type = "text"
[[variables]]
name = "induction"
type = "text"
[[variables]]
name = "gemtuzumab_induction"
type = "enum"
options = ["given", "not-given"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-6, p39
- Applies to patients who are intensive induction eligible, at consolidation
- Risk group definitions: AML-A
- Footnotes for this page are on AML-6A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Intensive induction eligible
- Cytogenetics ___ (cytogenetics)
- Molecular mutation profile ___ (molecular)
- Risk group per AML-A ___ (risk_group)
- CD33 ___ (cd33)
- FLT3 ___ (flt3)
- TP53 mutation or del(17p) abnormality ___ (tp53_17p)
- Induction regimen received ___ (induction)
- Gemtuzumab ozogamicin during induction ___ (gemtuzumab_induction)

# Consolidation, favorable-risk AML by cytogenetics (CBF-AML) or by molecular mutation profile per ELN (AML-A)

- Cytarabine, with or without gemtuzumab ozogamicin
    - Gemtuzumab ozogamicin only for CD33 positive disease
    - Gemtuzumab ozogamicin only if it was given during induction
- Cytarabine (5 or 7 days), with or without one of the following
    - Daunorubicin or idarubicin
    - Mitoxantrone, for age ≥60 y
- Cytarabine + (daunorubicin or idarubicin) + gemtuzumab ozogamicin
    - CD33 positive disease
    - Only if gemtuzumab ozogamicin was given during induction

# Consolidation, AML with FLT3 mutation

- Allogeneic HCT
    - Preferred for FLT3-ITD
- Cytarabine + midostaurin
    - FLT3-ITD or TKD
- Cytarabine + quizartinib
    - FLT3-ITD only

# Consolidation, intermediate-risk AML

- Cytarabine
- Cytarabine + (daunorubicin or idarubicin) + gemtuzumab ozogamicin
    - CD33 positive disease
    - Only if gemtuzumab ozogamicin was given during induction
- Allogeneic HCT

# Consolidation, poor-risk group

- Applies to
    - Poor-risk AML with and without TP53 mutation or del(17p) abnormality
    - Therapy-related AML other than CBF-AML
    - Antecedent MDS/CMML
    - Cytogenetic changes consistent with MDS (previously classified as AML-MRC)
- Allogeneic HCT (preferred)
- Cytarabine
- CPX-351/dual-drug liposomal encapsulation of cytarabine and daunorubicin
    - Preferred only if given during induction
- FLAG-IDA
    - Preferred only if given during induction
    - Use with caution in patients >60 y
- Continuation of lower intensity regimen used for induction
    - eg, HMA, (azacitidine or decitabine) + venetoclax
    - See AML-4

# Next

- After consolidation, exit by one of the following
    - Consider allogeneic HCT
    - Allogeneic HCT, if not previously performed
    - Maintenance, go to AML-7
    - Surveillance, go to AML-8
