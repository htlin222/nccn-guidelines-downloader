+++
id           = "aml/AML-6"
gid          = "aml"
ref          = "AML-6"
page         = 39
title        = "Consolidation therapy choice by risk group, for patients eligible for intensive induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-A", "AML-E", "AML-H", "AML-4", "AML-7", "AML-8"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "npm1", "cebpa", "kit", "tp53", "sf3b1", "asxl1"]
timepoint = ["consolidation", "transplant", "maintenance", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["favorable", "flt3-mutated", "intermediate", "poor"]
[[variables]]
name = "cytogenetics"
type = "text"
[[variables]]
name = "flt3"
type = "text"
[[variables]]
name = "cd33"
type = "text"
[[variables]]
name = "induction_regimen"
type = "text"
[[variables]]
name = "prior_gemtuzumab"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mrd"
type = "text"
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "donor"
type = "enum"
options = ["matched-sibling", "alternate-donor", "not-available"]
[[variables]]
name = "cardiac"
type = "text"
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-6, p39
- Applies to consolidation therapy in patients who are intensive induction eligible
- Risk group by cytogenetics or by molecular mutation profile per ELN: AML-A
- Treatment per Principles of Systemic Therapy for AML (AML-E)
- Footnotes on AML-6A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk group ___ (risk_group)
- Cytogenetics and molecular mutation profile ___ (cytogenetics)
- FLT3 ___ (flt3)
- CD33 ___ (cd33)
- Induction regimen received ___ (induction_regimen)
- Gemtuzumab ozogamicin given during induction ___ (prior_gemtuzumab)
- MRD ___ (mrd)
- Candidate for allogeneic HCT ___ (hct_candidate)
- Donor ___ (donor)
- Cardiac function ___ (cardiac)

# Applies to every consolidation option on this page

- Donor search, for patients who are candidates for allogeneic HCT
    - For appropriate patients, begin alternate donor search (haploidentical, unrelated donor, or cord blood) if no appropriate matched sibling donor is available
    - For lack of response to induction, alternative therapy to achieve remission is encouraged prior to HCT
    - See NCCN Guidelines for Hematopoietic Cell Transplantation
- Consolidation while awaiting transplant
    - Patients eligible for allogeneic HCT may require at least one cycle of consolidation while donor search is in progress, or while awaiting collaboration with a transplant center, to maintain remission
    - Patients may proceed directly to transplant following achievement of remission if a donor is available
- Cytarabine dosing
    - Alternate dosing of cytarabine for postremission therapy has been reported
    - Doses of cytarabine ≥2 g/m2 should be used with caution in patients ≥60 years and patients with renal failure, due to concern for neurotoxicity
    - See Principles of Systemic Therapy for AML (AML-E)
- Cardiac function
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- Gemtuzumab ozogamicin and transplant
    - Patients who receive transplant shortly following gemtuzumab ozogamicin administration may be at risk for developing SOS
    - If transplant is planned, note that prior studies have used a 60- to 90-day interval between the last administration of gemtuzumab ozogamicin and HCT
- CD33 positivity
    - Threshold for CD33 is not well-defined and may be ≥1% by flow cytometry

# Favorable-risk AML by cytogenetics (CBF-AML) or by molecular mutation profile per ELN (AML-A)

- In-frame bZIP mutations in CEBPA are more predictive of favorable outcomes than double mutations
- See Measurable (Minimal) Residual Disease Assessment (AML-H) for additional guidance on MRD monitoring for patients with CBF-AML and NPM1-mutated AML
- Cytarabine ± gemtuzumab ozogamicin, if CD33 positive
    - Only if gemtuzumab ozogamicin was given during induction
- Cytarabine (5 or 7 days) ± ([daunorubicin or idarubicin] or [mitoxantrone for age ≥60 y])
- Cytarabine + (daunorubicin or idarubicin) + gemtuzumab ozogamicin, if CD33 positive
    - Only if gemtuzumab ozogamicin was given during induction
    - This regimen may also be used in patients with AML with KIT mutations, because the outcomes are similar in patients with AML without KIT mutations

# AML with FLT3 mutation

- Allogeneic HCT (preferred for FLT3-ITD)
    - Consider NPM1 molecular MRD status, if applicable
- Cytarabine + midostaurin, for FLT3-ITD or TKD
    - The RATIFY trial studied patients aged 18–60 years with FLT3-mutated AML
    - An extrapolation of the data suggests that patients aged 61–70 years with FLT3-mutated AML who are fit to receive 7 + 3 should be offered midostaurin, since it seems to provide a survival benefit without undue toxicity
- Cytarabine + quizartinib, for FLT3-ITD only

# Intermediate-risk AML

- Cytarabine
    - There is no evidence that cytarabine doses ≥2 g/m2 are superior to doses 1–2 g/m2 in patients with AML with intermediate-risk cytogenetics
- Cytarabine + (daunorubicin or idarubicin) + gemtuzumab ozogamicin, if CD33 positive
    - Only if gemtuzumab ozogamicin was given during induction
- Allogeneic HCT

# Poor-risk AML and related categories

- Applies to any of the following
    - Poor-risk AML with and without TP53 mutation or del(17p) abnormality
    - Therapy-related AML other than CBF-AML
    - Antecedent MDS/CMML
    - Cytogenetic changes consistent with MDS (previously classified as AML-MRC)
- Allogeneic HCT (preferred)
- Cytarabine
- CPX-351/dual-drug liposomal encapsulation of cytarabine and daunorubicin (preferred only if given during induction)
    - There are limited data supporting the use of this regimen in patients aged <60 years
    - For patients with AML with cytogenetic changes consistent with MDS (previously classified as AML-MRC) and previous HMA exposure, the benefit from standard induction did not differ from the benefit with CPX-351
    - While the mutational definition of AML-MRC as it applies to the use of CPX-351 was not studied in the original trial, its use can be considered
    - There is emerging data that CPX-351 provides most benefit for patients with AML with mutations in SRSF2, SF3B1, EZH2, U2AF1, ZRSR2, BCOR, STAG2, or ASXL1
- FLAG-IDA (preferred only if given during induction)
    - Use with caution in patients >60 y
    - In times of fludarabine shortage, cladribine can be substituted for fludarabine
- Continuation of lower intensity regimen used for induction (eg, HMA, [azacitidine or decitabine] + venetoclax), per AML-4

# Next

- Favorable-risk AML, after consolidation
    - Consider allogeneic HCT
        - Allogeneic transplant is recommended for patients with favorable-risk disease who are unable to complete consolidation, or who have high-risk features such as MRD positivity or KIT mutation
        - If transplant is planned, observe the gemtuzumab ozogamicin to HCT interval above
    - or Maintenance (AML-7)
    - or Surveillance (AML-8)
- FLT3-mutated, intermediate-risk, or poor-risk AML, after consolidation
    - Allogeneic HCT, if not previously performed
    - or Maintenance (AML-7)
    - or Surveillance (AML-8)
