+++
id           = "breast-screening/BSCR-1"
gid          = "breast-screening"
ref          = "BSCR-1"
page         = 7
title        = "Clinical encounter including risk assessment, and the screening category it puts the patient in"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-2", "BSCR-3", "BSCR-4", "BSCR-5", "BSCR-A"]

[facets]
disease   = "breast-screening"
timepoint = ["screening", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "symptom_status"
type = "enum"
options = ["asymptomatic", "symptomatic"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "lifetime_risk"
type = "text"
[[variables]]
name = "gail_risk"
type = "text"
[[variables]]
name = "prior_rt"
type = "text"
[[variables]]
name = "biopsy_history"
type = "text"
[[variables]]
name = "breast_density"
type = "enum"
options = ["not-dense", "heterogeneously-dense", "extremely-dense", "unknown"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-1, p7
- Applies to the clinical encounter including risk assessment, sorting into average risk, increased risk, or symptomatic
    - For individuals with a prior history of breast cancer, refer to Surveillance/Follow-up in the NCCN Guidelines for Breast Cancer
- Breast Screening Considerations (BSCR-A)
- For pregnant and lactating individuals, see BSCR-B
- Footnotes on BSCR-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Symptom status: ___ (symptom_status)
- Family history / pedigree: ___ (family_history)
- Residual lifetime risk: ___ (lifetime_risk)
- 5-year risk of invasive breast cancer, per Gail Model: ___ (gail_risk)
- Radiation therapy with exposure to breast tissue between ages 10 and 30 y: ___ (prior_rt)
- Atypical ductal hyperplasia or lobular neoplasia: ___ (biopsy_history)
- Breast density on mammography: ___ (breast_density)

# Clinical encounter, what it must cover

- At minimum, review medical and family history
- Ongoing risk assessment, by age 25 years
- Risk reduction counseling
- Preferably a clinical breast examination (CBE), even in individuals who are asymptomatic, when feasible
    - Rationale is to maximize earliest detection of breast cancers and assure ongoing risk assessment, particularly in regions where mammographic screening may not be accessible
    - Randomized trials comparing incremental CBE versus mammographic screening have not been performed
- Factor known breast density into risk assessment, if available from a prior mammogram
- Refer to the NCCN Guidelines for Breast Cancer Risk Reduction for a detailed qualitative and quantitative risk assessment
- Periodic reassessment of risk, particularly when risk factors change
- There are limited data on screening in individuals assigned male at birth (AMAB) with increased risk for breast cancer
    - Consider screening for individuals AMAB on feminizing hormones
- Some veterans may now qualify for additional breast cancer risk assessment and/or mammography screening per the Dr. Kate Hendricks Thomas SERVICE Act 2022

# Asymptomatic, average risk, age ≥25 but <40 y

- Clinical encounter every 1–3 y
- Breast awareness
    - Individuals should be familiar with their breasts and promptly report changes to their health care provider
    - Signs/Symptoms During Clinical Encounter (BSCR-5)

# Asymptomatic, average risk, age ≥40 y

- Annual clinical encounter
- Annual screening mammogram (category 1) with tomosynthesis
    - Tomosynthesis can decrease call-back rates and improve cancer detection compared with two-dimensional mammography alone
    - Shared decision-making is encouraged based on the individual's values and preferences
    - Medicare and insurers allow the individual direct access to scheduling for screening mammography
    - Mammographic and/or ultrasound evaluation (BSCR-18)
- For those with dense breast tissue on mammography (heterogeneously or extremely dense breasts), see increased risk
    - In patients with extremely dense breasts and normal mammograms, supplemental screening with breast MRI decreases interval cancers
    - In a prospective study, those randomized to breast MRI after a negative screening mammogram had significantly fewer interval breast cancers than those without supplemental screening (category 1 for ages 50–75 y)
    - The ideal frequency of supplemental screening MRI in this patient population is not yet known
- Breast awareness

# Increased risk categories

- If criteria for multiple increased-risk categories are met, follow the most comprehensive set of screening recommendations
- Pedigree suggestive of, or known, genetic predisposition
    - Risk models that include a comprehensive family history, including first-, second-, and, when included in the model, third-degree relatives (eg, BRCAPRO, Tyrer-Cuzick, BOADICEA/CanRisk, Breast Cancer Surveillance Consortium Invasive Breast Cancer Risk Calculator)
    - There is variation in recommendations for initiation of screening for different genetic syndromes
- Residual lifetime risk ≥20%, as defined by models that include a comprehensive family history
    - Residual lifetime risk of 15%–20% may be considered for supplemental screening on an individual basis, depending on risk factors
    - See Comparison of Risk Assessment Models, NCCN Guidelines for Breast Cancer Risk Reduction
- Radiation therapy (RT) with exposure to breast tissue between ages 10 and 30 y
- 5-year risk of invasive breast cancer ≥1.7% in individuals ≥35 y, per Gail Model
- Atypical ductal hyperplasia (ADH)
- Lobular neoplasia, that is lobular carcinoma in situ or atypical lobular hyperplasia
- Dense breast tissue on mammography (heterogeneously or extremely dense breasts) in patients who do not meet any other increased risk category
- 5-year risk of invasive breast cancer ≥1.7% as calculated by an imaging-based risk assessment model

# Next

- Symptomatic, go to Presenting Signs/Symptoms (BSCR-5)
- Pedigree suggestive of, or known, genetic predisposition, refer to a genetic counselor or other health professional with expertise and experience in cancer genetics, then Increased Risk Screening Follow-up per the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Residual lifetime risk ≥20%, go to BSCR-2
- RT with exposure to breast tissue between ages 10 and 30 y, go to BSCR-3
- 5-year risk ≥1.7% per Gail Model, atypical ductal hyperplasia, or lobular neoplasia, go to BSCR-4
- Dense breast tissue with no other increased risk category, go to BSCR-4 and Breast Screening Considerations (BSCR-A)
- 5-year risk ≥1.7% by an imaging-based risk assessment model, go to BSCR-4
