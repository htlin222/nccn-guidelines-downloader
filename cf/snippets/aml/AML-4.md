+++
id           = "aml/AML-4"
gid          = "aml"
ref          = "AML-4"
page         = 36
title        = "Lower intensity induction by IDH1 status for patients ineligible for or declining intensive induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-1", "AML-3", "AML-5", "AML-J", "AML-4A"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["idh1", "idh2", "flt3", "any"]
timepoint = "induction"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "idh1"
type = "enum"
options = ["mutated", "wild-type"]
[[variables]]
name = "idh2"
type = "enum"
options = ["mutated", "wild-type"]
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "cd33"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "prior_hma"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "venetoclax_status"
type = "enum"
options = ["no-contraindication", "contraindicated"]
[[variables]]
name = "qtcf"
type = "text"
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-4, p36
- Lower intensity therapy, for patients not a candidate for intensive induction therapy or who decline it
- Applies to age 18 years and older
- Branch point on this page is IDH1 mutation status
- Principles of venetoclax: AML-J
- Footnotes for this page are on AML-4A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Not a candidate for intensive induction therapy, or declines it
- IDH1 ___ (idh1)
- IDH2 ___ (idh2)
- FLT3 ___ (flt3)
- CD33 ___ (cd33)
- Prior exposure to hypomethylating agent (HMA) ___ (prior_hma)
- Venetoclax ___ (venetoclax_status)
- QTcF ___ (qtcf)

# Induction, AML with IDH1 mutation

- Preferred
    - Azacitidine + venetoclax (category 1)
    - Azacitidine + ivosidenib (category 1)
    - Decitabine + venetoclax
- Other Recommended
    - Ivosidenib
    - Oral decitabine and cedazuridine + venetoclax
- Useful in Certain Circumstances
    - Low-dose cytarabine (LDAC) + venetoclax
        - For prior exposure to HMA
    - Azacitidine or decitabine
        - For contraindication to venetoclax
    - Olutasidenib (category 2B)
        - For those not eligible for a preferred regimen and not eligible for ivosidenib due to prolonged QTcF

# Induction, AML without IDH1 mutation

- Preferred
    - Azacitidine + venetoclax (category 1)
    - Decitabine + venetoclax
- Other Recommended
    - Oral decitabine and cedazuridine + venetoclax
    - Cladribine + LDAC + venetoclax (category 2B)
- Useful in Certain Circumstances
    - LDAC + venetoclax
        - For prior exposure to hypomethylating agent (HMA)
    - Azacitidine or decitabine
        - For contraindication to venetoclax
    - LDAC + glasdegib
    - LDAC
        - For prior exposure to HMA, or contraindication to venetoclax
    - Gilteritinib with or without azacitidine
        - For FLT3-ITD or TKD, not eligible for a preferred regimen
    - Enasidenib with or without azacitidine
        - For IDH2 mutation, not eligible for a preferred regimen
    - Gemtuzumab ozogamicin
        - For CD33 positive disease, not eligible for a preferred regimen

# Next

- Follow-up after induction therapy with lower intensity therapy, go to AML-5
