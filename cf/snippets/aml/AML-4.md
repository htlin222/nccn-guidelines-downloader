+++
id           = "aml/AML-4"
gid          = "aml"
ref          = "AML-4"
page         = 36
title        = "Lower intensity induction by risk group when intensive induction is not an option"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-4A", "AML-J", "AML-5"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["idh1", "idh2", "flt3"]
timepoint = "induction"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "idh1"
type = "enum"
options = ["mutated", "not mutated"]
[[variables]]
name = "idh2"
type = "text"
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "cd33"
type = "text"
[[variables]]
name = "prior_hma"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "venetoclax_contraindication"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "qtcf"
type = "text"
+++

# Source

- NCCN Acute Myeloid Leukemia (Age 18 years and older) v5.2026, AML-4, p36
- Lower intensity therapy pathway: patient is not a candidate for intensive induction therapy, or declines
- Risk group on this page is defined only by IDH1 mutation status
- Principles of Venetoclax, see AML-J
- Footnotes for this page are on AML-4A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo with AML
- Not a candidate for intensive induction therapy, or declines
- IDH1 ___ (idh1)
- IDH2 ___ (idh2)
- FLT3 ___ (flt3)
- CD33 ___ (cd33)
- Prior exposure to hypomethylating agent (HMA) ___ (prior_hma)
- Contraindication to venetoclax ___ (venetoclax_contraindication)
- QTcF ___ (qtcf)

# Induction, AML with IDH1 mutation

- Preferred
    - Azacitidine + venetoclax (category 1)
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
    - Azacitidine + ivosidenib (category 1)
    - Decitabine + venetoclax
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
- Other Recommended
    - Ivosidenib
    - Oral decitabine and cedazuridine + venetoclax
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
- Useful in Certain Circumstances
    - Low-dose cytarabine (LDAC) + venetoclax
        - Only with prior exposure to HMA
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
    - Azacitidine or decitabine
        - Only with contraindication to venetoclax
    - Olutasidenib (category 2B)
        - Only if not eligible for a preferred regimen and not eligible for ivosidenib due to prolonged QTcF

# Induction, AML without IDH1 mutation

- Preferred
    - Azacitidine + venetoclax (category 1)
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
    - Decitabine + venetoclax
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
- Other Recommended
    - Oral decitabine and cedazuridine + venetoclax
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
    - Cladribine + LDAC + venetoclax (category 2B)
- Useful in Certain Circumstances
    - LDAC + venetoclax
        - Only with prior exposure to hypomethylating agent (HMA)
        - Patients with cytopenias with disease in remission should take breaks between cycles; for cycle length see AML-J
    - Azacitidine or decitabine
        - Only with contraindication to venetoclax
    - LDAC + glasdegib
    - LDAC
        - Only with prior exposure to HMA, or contraindication to venetoclax
    - Gilteritinib with or without azacitidine
        - FLT3-ITD or TKD, and not eligible for a preferred regimen
    - Enasidenib with or without azacitidine
        - IDH2 mutation, and not eligible for a preferred regimen
    - Gemtuzumab ozogamicin
        - CD33 positive, and not eligible for a preferred regimen

# Next

- Follow-up after induction therapy with lower intensity therapy (intensive induction ineligible or declines), go to AML-5
