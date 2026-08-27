+++
id           = "aml/AML-1"
gid          = "aml"
ref          = "AML-1"
page         = 31
title        = "Induction therapy by risk group for patients eligible for intensive induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-A", "AML-2", "AML-2A", "AML-3", "AML-4", "AML-D", "AML-E", "AML-F", "AML-G"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "npm1", "cebpa"]
timepoint = "induction"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "functional_status"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "wbc"
type = "text"
[[variables]]
name = "blasts"
type = "text"
[[variables]]
name = "cytogenetics"
type = "text"
[[variables]]
name = "molecular"
type = "text"
[[variables]]
name = "flt3"
type = "enum"
options = ["itd", "tkd", "itd-and-tkd", "wild-type", "pending"]
[[variables]]
name = "cd33"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["favorable-cytogenetic", "favorable-molecular", "intermediate", "poor-adverse"]
[[variables]]
name = "anthracycline_dose"
type = "text"
[[variables]]
name = "hct_planned"
type = "enum"
options = ["yes", "no", "undecided"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-1, p31
- Applies to patients ≥18 years who are eligible for intensive induction
- Risk stratification by cytogenetics and molecular profile, see AML-A
- Footnotes for this page are printed on AML-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Performance/functional status ___ (functional_status)
- Comorbid medical conditions ___ (comorbidities)
- WBC ___ (wbc)
- Blast count ___ (blasts)
- Cytogenetics ___ (cytogenetics)
- Molecular mutation profile ___ (molecular)
- FLT3 ___ (flt3)
- CD33 ___ (cd33)
- Risk group per AML-A ___ (risk_group)
- Prior anthracycline exposure ___ (anthracycline_dose)
- Transplant planned ___ (hct_planned)

# Confirm eligibility for intensive induction

- Elevated blast count places the patient at risk for tumor lysis and for organ dysfunction secondary to leukostasis
    - Measures to rapidly reduce the WBC count
        - Leukapheresis
        - Hydroxyurea
        - A single dose of cytarabine
    - Prompt institution of definitive therapy is essential
- Ability to tolerate standard induction therapy is influenced by poor performance/functional status and a comorbid medical condition, in addition to age
    - Web-based tools are available to evaluate the probability of CR and early death after standard induction therapy in patients aged ≥60 years with AML
    - Consider geriatric assessment for patients with AML ≥60 years of age
    - See NCCN Guidelines for Older Adult Oncology
- Consider screening with FISH to identify translocations/abnormalities associated with CBF-AML
- In-frame bZIP mutations in CEBPA are more predictive of favorable outcomes than double mutations

# Applies to every induction regimen below

- Principles of Supportive Care for AML (AML-F)
- Monitoring During Therapy (AML-G)
- Consider referral to palliative care for consultation at the start of induction
    - See NCCN Guidelines for Palliative Care
- General Considerations and Supportive Care for Patients with AML Who Prefer Not to Receive Blood Transfusions (AML-D)
- Principles of Systemic Therapy for AML (AML-E)
- Anthracycline caveat, for any standard 7 + 3 regimen
    - For patients who exceed anthracycline dose or have cardiac issues but are still able to receive intensive therapy, alternative non-anthracycline-containing regimens may be considered (eg, FLAG, clofarabine-based regimens [category 3])
- Gemtuzumab ozogamicin caveats, wherever it is used
    - Give only if CD33 positive
        - Threshold for CD33 is not well-defined and may be ≥1% by flow cytometry
    - Patients who receive transplant shortly following gemtuzumab ozogamicin administration may be at risk for developing sinusoidal obstruction syndrome (SOS)
        - If transplant is planned, note that prior studies have used a 60- to 90-day interval between the last administration of gemtuzumab ozogamicin and HCT
- Fludarabine caveat, for any FLAG-containing regimen
    - In times of fludarabine shortage, cladribine can be substituted for fludarabine

# Favorable-risk AML by cytogenetics (core binding factor [CBF]-AML)

- Preferred
    - Standard 7 + 3 (daunorubicin or idarubicin) + gemtuzumab ozogamicin (CD33 positive)
        - For CBF-AML with FLT3-TKD mutation, the Panel prefers gemtuzumab ozogamicin over an FLT3 inhibitor
        - For CBF-AML with FLT3-ITD, there is insufficient data to recommend one as preferred over the other
- Other Recommended
    - Standard 7 + 3 (daunorubicin or idarubicin)
    - FLAG-IDA (fludarabine + cytarabine + granulocyte colony-stimulating factor [G-CSF] - idarubicin) + gemtuzumab ozogamicin (CD33 positive) (category 2B; use with caution in patients >60 y)
- Useful in Certain Circumstances
    - FLAG + gemtuzumab ozogamicin (CD33 positive), for those ineligible for an anthracycline (category 2B)

# Favorable-risk AML by molecular mutation profile, or intermediate-risk AML per ELN (AML-A)

- Preferred
    - Standard 7 + 3 (daunorubicin or idarubicin) (category 1)
- Other Recommended
    - Standard 7 + 3 (daunorubicin or idarubicin) + gemtuzumab ozogamicin (CD33 positive)
        - Gemtuzumab ozogamicin may be beneficial in NPM1-mutated AML
        - The role of gemtuzumab ozogamicin in CEBPA-mutated AML is not established
    - FLAG-IDA (category 2B; use with caution in patients >60 y)
    - FLAG-IDA + gemtuzumab ozogamicin (CD33 positive) (category 2B; use with caution in patients >60 y)
    - CLAG-M (cladribine + cytarabine + G-CSF - mitoxantrone) (category 2B; use with caution in patients >60 y)

# AML with FLT3 mutation

- Standard 7 + 3 (daunorubicin or idarubicin) + midostaurin, for FLT3-internal tandem duplication [ITD] or tyrosine kinase domain [TKD] (category 1)
    - The RATIFY trial studied patients aged 18–60 years with FLT3-mutated AML
    - An extrapolation of the data suggests that patients aged 61–70 years with FLT3-mutated AML who are fit to receive 7 + 3 should be offered midostaurin since it seems to provide a survival benefit without undue toxicity
- Standard 7 + 3 (daunorubicin or idarubicin) + quizartinib, for FLT3-ITD only (category 1)

# Next

- Poor/adverse risk group, go to AML-2
- After cytarabine-based induction, follow-up and re-induction, go to AML-3
- Not eligible for intensive induction, go to AML-4
