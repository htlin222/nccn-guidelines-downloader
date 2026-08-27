+++
id           = "ici_tox/IMMUNO-1"
gid          = "ici_tox"
ref          = "IMMUNO-1"
page         = 14
title        = "Routine monitoring for immune checkpoint inhibitors: pre-therapy assessment, monitoring frequency, and evaluation of abnormal findings"
nccn_version = "1.2026"
nccn_date    = "10/23/2025"
generated    = "2026-08-28"
see_also     = ["IMMUNO-B", "ICI_DERM-1", "ICI_ENDO-1", "ICI_ENDO-2"]

[facets]
disease   = "ici_tox"
timepoint = ["workup", "surveillance", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ici_agent"
type = "text"
[[variables]]
name = "regimen"
type = "enum"
options = ["single-agent", "combination"]
[[variables]]
name = "autoimmune_history"
type = "text"
[[variables]]
name = "bowel_habits"
type = "text"
[[variables]]
name = "skin_history"
type = "text"
[[variables]]
name = "new_symptoms"
type = "text"
[[variables]]
name = "tsh"
type = "text"
[[variables]]
name = "ft4"
type = "text"
+++

# Source

- NCCN Management of Immune Checkpoint Inhibitor-Related Toxicities v1.2026, IMMUNO-1, p14
- Principles of routine monitoring for immune checkpoint inhibitors
- Covers pre-therapy assessment, monitoring frequency, and evaluation for abnormal findings/symptoms
- Monitoring principles continued on the following page
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, on ___ (ici_agent)
- Regimen ___ (regimen)
- Patient and relevant family history of autoimmune/organ-specific disease, endocrinopathy, or infectious disease: ___ (autoimmune_history)
- Typical bowel habits, frequency and consistency: ___ (bowel_habits)
- History of immune-related skin disorder: ___ (skin_history)
- New or changed symptoms since last visit: ___ (new_symptoms)
- Last TSH ___ (tsh) / FT4 ___ (ft4)

# Pre-therapy assessment

- Prior to initiating treatment, counsel patients and caregivers on the warning signs and symptoms of immune-related adverse events (irAEs) (IMMUNO-B)
- For general recommendations on vaccination in patients with cancer, see NCCN Guidelines for the Prevention and Treatment of Cancer-Related Infections
- Clinical
    - Physical examination
    - Patient and relevant family history of any autoimmune/organ-specific disease, endocrinopathy, or infectious disease (ID)
    - Neurologic examination
    - Bowel habits (typical frequency/consistency)
    - ID screening as indicated
        - Human immunodeficiency virus (HIV)
        - Hepatitis A, B, C
- Imaging
    - Cross-sectional imaging
    - Brain MRI if indicated
- General blood work
    - Complete blood count (CBC), with differential if indicated
    - Comprehensive metabolic panel (CMP)
- Dermatologic (ICI_DERM-1)
    - Examination of skin and mucosa if history of immune-related skin disorder
- Pancreatic (ICI_ENDO-1)
    - Baseline testing is not required
- Thyroid (ICI_ENDO-2)
    - Thyroid-stimulating hormone (TSH)
    - Free thyroxine (FT4)

# Monitoring frequency and evaluation for abnormal findings/symptoms

- Closer monitoring may be required for patients with combination immunotherapy regimens
- Refer to prescribing information for each individual immunotherapy agent for monitoring recommendations
- Clinical
    - Clinical examination at each visit with adverse event (AE) symptom assessment
    - For abnormal findings/symptoms, follow-up testing based on findings, symptoms
- Imaging
    - Periodic imaging as indicated
    - For abnormal findings, follow-up testing as indicated based on imaging findings
- General blood work
    - Repeat prior to each treatment or every 4 weeks during immunotherapy, then in 6–12 weeks or as indicated
    - For elevated glucose, HbA1c
- Dermatologic (ICI_DERM-1)
    - Conduct/repeat as needed based on symptoms
    - For abnormal findings/symptoms
        - Consider dermatology referral
        - Monitor affected skin and lesion type; photographic documentation
        - Skin biopsy if indicated
- Pancreatic (ICI_ENDO-1)
    - No routine monitoring needed if asymptomatic
    - For suspected pancreatitis
        - Amylase, lipase
        - Consider abdominal CT with contrast or MRCP
- Thyroid (ICI_ENDO-2)
    - Every 4–6 weeks during immunotherapy, then follow-up every 12 weeks as indicated
    - For abnormal findings/symptoms, go to ICI_ENDO-2

# Next

- Dermatologic findings, go to ICI_DERM-1
- Pancreatic findings, go to ICI_ENDO-1
- Thyroid findings, go to ICI_ENDO-2
