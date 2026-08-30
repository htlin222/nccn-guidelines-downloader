+++
id           = "breast-screening/BSCR-2"
gid          = "breast-screening"
ref          = "BSCR-2"
page         = 9
title        = "Screening and follow-up for individuals at increased risk by comprehensive family history model"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-1", "BSCR-5", "BSCR-18"]

[facets]
disease   = "breast-screening"
timepoint = ["screening", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lifetime_risk"
type = "text"
[[variables]]
name = "risk_model"
type = "text"
[[variables]]
name = "youngest_family_dx_age"
type = "number"
[[variables]]
name = "breast_density"
type = "text"
[[variables]]
name = "prior_breast_cancer"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-2, p9
- Applies to increased risk: residual lifetime risk 20% or higher, as defined by models that include a comprehensive family history
- Breast Screening Considerations apply to every screening item on this page (BSCR-A)
- For individuals with a prior history of breast cancer, use Surveillance/Follow-up in the NCCN Guidelines for Breast Cancer instead
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Prior history of breast cancer ___ (prior_breast_cancer)
- Residual lifetime risk ___ (lifetime_risk)
- Risk model used ___ (risk_model)
    - Model must include a comprehensive family history, including first-, second-, and, when included in the model, third-degree relatives
    - eg, BRCAPRO, Tyrer-Cuzick, BOADICEA/CanRisk, BCSC Invasive Breast Cancer Risk Calculator
    - See Comparison of Risk Assessment Models, NCCN Guidelines for Breast Cancer Risk Reduction
    - See also NCCN Guidelines for Breast Cancer Risk Reduction and NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Residual lifetime risk of 15%–20%: may be considered for supplemental screening on an individual basis, depending on risk factors
    - Reassess risk periodically, particularly when risk factors change
- Youngest family member diagnosed with breast cancer at age ___ (youngest_family_dx_age)
    - Family member means first-, second-, and, when included in the model, third-degree relatives
- Known breast density ___ (breast_density), if available from a prior mammogram

# Clinical encounter

- Clinical encounter every 6–12 mo (BSCR-A)
    - To begin when identified as being at increased risk
    - At minimum, review medical and family history
    - Ongoing risk assessment, by age 25 years
    - Risk reduction counseling
    - Preferably a CBE even in individuals who are asymptomatic, when feasible
    - Rationale for recommending the clinical encounter is to maximize earliest detection of breast cancers and assure ongoing risk assessment, particularly in regions where mammographic screening may not be accessible
    - Randomized trials comparing incremental CBE versus mammographic screening have not been performed
    - Factor known breast density into risk assessment if available from a prior mammogram
    - Consider referral to a genetic counselor or other health professional with expertise and experience in cancer genetics, if not already done
    - Consider referral to a breast specialist as appropriate

# Annual screening mammogram

- Annual screening mammogram with tomosynthesis (BSCR-A)
    - To begin no later than age 40 y, or 10 y prior to when the youngest family member was diagnosed with breast cancer, whichever comes first
    - Not prior to age 30 y
        - Consider mammogram beginning at age 25 years on a case-by-case basis, depending on family history or for patients who cannot undergo breast MRI
    - Tomosynthesis can decrease call-back rates and improve cancer detection compared with 2D mammography alone
    - Medicare and insurers allow the individual direct access to scheduling for screening mammography
    - See Mammographic and/or ultrasound evaluation (BSCR-18)

# Annual breast MRI

- Annual breast MRI with and without contrast (BSCR-A)
    - To begin no later than age 40 y, or 10 years prior to when the youngest family member was diagnosed with breast cancer, whichever comes first
    - Not prior to age 25 y
        - Except in rare circumstances of a family history of very-early-onset breast cancers before age 30 years
    - Some individuals at increased risk may undergo breast MRI prior to qualifying for screening mammogram
    - High-quality breast MRI requires a dedicated breast coil, access to biopsy under MRI guidance, experienced radiologists in breast MRI, and regional availability
    - Correlate MRI with other breast imaging modalities
    - Many experts recommend alternating the mammogram and breast MRI with and without contrast every 6 months
        - Limited data support this approach; the presumption is that it may lead to earlier identification of cancer

# If the patient qualifies for but cannot undergo MRI

- Consider contrast-enhanced mammography, CEM (BSCR-A)
- Consider molecular breast imaging, MBI (BSCR-A)
- Whole breast ultrasound may be done if CEM or MBI is not available/accessible (BSCR-A)
    - In a recent direct comparison trial, MRI had a cancer detection rate approximately 4 times higher than ultrasound in patients with dense breasts

# Risk reduction and breast awareness

- Consider risk reduction strategies, see NCCN Guidelines for Breast Cancer Risk Reduction
- Breast awareness
    - Individuals should be familiar with their breasts and promptly report changes to their health care provider

# Next

- Signs or symptoms reported during clinical encounter, go to BSCR-5
- Mammographic and/or ultrasound evaluation and follow-up, go to BSCR-18
- Prior history of breast cancer, go to Surveillance/Follow-up in the NCCN Guidelines for Breast Cancer
