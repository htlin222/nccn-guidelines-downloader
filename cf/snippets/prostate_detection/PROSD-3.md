+++
id           = "prostate_detection/PROSD-3"
gid          = "prostate_detection"
ref          = "PROSD-3"
page         = 10
title        = "Further evaluation after an abnormal PSA, and the indications for biopsy"
nccn_version = "2.2026"
nccn_date    = "02/18/26"
generated    = "2026-08-30"
see_also     = ["PROSD-A", "PROSD-4"]

[facets]
disease   = "prostate_detection"
timepoint = ["screening", "diagnosis"]

[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "psa_trend"
type = "text"
[[variables]]
name = "dre"
type = "text"
[[variables]]
name = "psa_density"
type = "number"
[[variables]]
name = "percent_free_psa"
type = "number"
[[variables]]
name = "mpmri"
type = "text"
[[variables]]
name = "biomarker_result"
type = "text"
+++

# Source

- NCCN Prostate Cancer Early Detection v2.2026, PROSD-3, p10
- Further evaluation and indications for biopsy
- The level of PSA correlates with the risk of prostate cancer
    - PSA level 4.0 ng/mL or lower with a normal DRE: the Prostate Cancer Prevention Trial (PCPT) demonstrated 15% had prostate cancer diagnosed on end-of-study biopsies
    - Serum PSA between 4 to 10 ng/mL: approximately 30% to 35% will be found to have cancer
    - Total PSA above 10 ng/mL: greater than 67% likelihood of prostate cancer
- All recommendations category 2A unless otherwise indicated

# Assessment

- PSA ___ (psa) ng/mL
- PSA change over and above the established baseline ___ (psa_trend)
- DRE ___ (dre)
- PSA density ___ (psa_density)
- Percent-free PSA ___ (percent_free_psa)
- mpMRI ___ (mpmri)
- Biomarker and/or risk calculator ___ (biomarker_result)

# Further evaluation

- Repeat PSA
- DRE, if not performed during initial risk assessment
- Workup for benign disease
- Multiparametric MRI (mpMRI) (category 1), including PSA density
    - A negative MRI does not exclude the possibility of cancer
    - Consider biomarkers, risk calculators, and/or PSA density when deciding whether to avoid a biopsy in an individual with a negative mpMRI result
    - Biparametric MRI and microultrasound, at an experienced center, have been shown to offer similar diagnostic quality and can be considered as an alternative to mpMRI in certain contexts
- Consider biomarkers (category 2B) and/or risk calculators that improve the specificity of screening
    - Principles of Biomarker Testing in Prostate Cancer Early Detection (PROSD-A)

# Interpreting PSA and PSA density

- Lower percent-free PSA and/or higher PSA density are associated with a greater risk of high-grade prostate cancer
- Persistent acceleration in PSA over and above an established baseline is also concerning for high-risk prostate cancer
- Encourage biopsy in a patient with a persistent and significant increase in PSA
    - Includes a patient with a higher PSA density, even if the MRI is normal

# Biopsy technique, if biopsy is indicated

- Image-guided biopsy via transrectal or transperineal approach
    - A transperineal approach to transrectal ultrasound (TRUS) biopsy may be associated with a lower risk of sepsis and a reduced need for antibiotics compared to a transrectal approach
- With MRI targeting (preferred), or without MRI targeting
    - Targeting using MRI/ultrasound fusion significantly increases the detection of clinically significant, higher-risk (Grade Group 3 or higher) disease
    - Targeting using MRI/ultrasound fusion lowers the detection of lower-risk (Grade Group 1, or lower-volume Grade Group 2) disease
    - It is strongly recommended that image-guided biopsy techniques be employed routinely
    - Radiologic expertise and the use of high-quality mpMRI hardware is essential for optimal interpretation of scans
    - Most advocate for a combined targeted and systematic biopsy approach, as some high-grade cancers are uniquely detected using the systematic approach, and systematic biopsies are needed for risk stratification if cancer is found
    - Some advocate for excluding systematic biopsy in those undergoing MRI targeting, due to concerns that it may increase the risk of overdiagnosis
    - Micro-ultrasound-guided biopsy performed at expert centers was found to be non-inferior to MRI-targeted fusion biopsy for the detection of clinically significant prostate cancer

# Next

- High suspicion for clinically significant cancer, image-guided biopsy via transrectal or transperineal approach, with MRI targeting (preferred) or without MRI targeting
- Low suspicion for clinically significant cancer, follow-up in 6-12 mo with PSA/DRE
- Management of biopsy results, go to PROSD-4
