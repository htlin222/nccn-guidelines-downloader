+++
id           = "uveal/UM-6"
gid          = "uveal"
ref          = "UM-6"
page         = 13
title        = "Workup and treatment of distant metastatic uveal melanoma"
nccn_version = "2.2026"
nccn_date    = "03/18/26"
generated    = "2026-08-28"
see_also     = ["UM-4", "UM-B", "UMSYS-1"]

[facets]
disease   = "uveal"
stage     = "IV"
timepoint = ["workup", "metastatic"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "liver_involvement"
type = "text"
[[variables]]
name = "distribution"
type = "enum"
options = ["hepatic-dominant", "non-hepatic-dominant"]
[[variables]]
name = "histologic_confirmation"
type = "enum"
options = ["core needle biopsy", "FNA", "not done"]
[[variables]]
name = "hla_a0201"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "alk_phos"
type = "text"
+++

# Source

- NCCN Melanoma: Uveal v2.2026, UM-6, p13
- Applies to uveal melanoma with distant metastatic disease
- Footnotes for this page are on UM-6A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, uveal melanoma with distant metastatic disease
- Sites of metastasis: ___ (met_sites)
- Extent of liver involvement: ___ (liver_involvement)
- Disease distribution: ___ (distribution)
- Histologic confirmation of metastasis: ___ (histologic_confirmation)
- HLA-A*02:01: ___ (hla_a0201)
- LDH ___ (ldh)
- Alkaline phosphatase ___ (alk_phos)

# Workup

- Biopsy if clinically appropriate
    - Extraocular recurrence or metastasis should be confirmed histologically whenever possible or if clinically indicated
    - Core needle biopsy, if possible, or otherwise FNA
    - Consider genetic testing if it might affect treatment options
- Imaging for baseline staging and to evaluate specific signs and symptoms
    - Most frequent site of metastasis is the liver; other sites include lungs, skin/soft tissue, and bones
    - MRI abdomen with IV gadolinium-based contrast (preferred)
    - CT chest/abdomen/pelvis with IV iodinated contrast
    - CT chest with or without IV contrast
    - Whole-body FDG-PET/CT
    - In select patients with renal failure and/or iodinated contrast allergy, MR abdomen with gadolinium-based contrast is preferred over CT
    - If no IV contrast can be administered, MR without contrast is superior to nonenhanced CT
    - Abdominal imaging should be performed with IV contrast unless contraindicated
    - Ultrasound evaluation of the liver in select patients only; limited value given its operator-dependent nature, limited sensitivity in patients with obesity, and lack of specificity
    - Brain MRI with IV contrast may be performed if neurologic symptoms are present; routine CNS imaging is not recommended
- HLA-A*02:01 testing
- Consider liver function tests (LFTs), including lactate dehydrogenase (LDH)
    - LDH may assist in determining prognosis in the setting of uveal melanoma
- Consider alkaline phosphatase
    - Alkaline phosphatase may assist in determining prognosis in the setting of uveal melanoma

# Treatment, hepatic-dominant disease

- Hepatic-dominant means the bulk of overall metastatic disease is confined to the liver
- Clinical trial (preferred)
- or Consider one or more of the following:
    - Liver-directed therapies, recommended only in hepatic-dominant disease, where their efficacy largely lies
        - Regional isolation perfusion of the liver
        - Melphalan percutaneous hepatic perfusion
            - Tested in hepatic-dominant metastatic uveal melanoma with liver involvement under 50%
            - 36.6% response rate in a 91-patient phase II trial
            - Response rate 36.3% vs 12.5% and median PFS 9 vs 3.1 months compared with best alternative care in a phase III trial, n = 123 treated
            - Median OS similar, 19.3 vs 14.5 months
            - Overnight stay in intensive care unit is recommended for hemodynamic monitoring
            - Recommended only at experienced centers
        - Embolization: chemotherapy, radiation, or immunotherapy
        - Ablative procedures: thermal ablation or cryotherapy
        - Resection and/or RT, per Principles of Radiation Therapy (UM-B)
    - Systemic therapies, chosen by HLA-A*02:01 status, see below
    - Best supportive/palliative care (NCCN Guidelines for Palliative Care)
- Imaging to assess response or progression

# Treatment, non-hepatic-dominant disease

- Clinical trial (preferred)
- or Consider one or more of the following:
    - Systemic therapies, chosen by HLA-A*02:01 status, see below
    - Best supportive/palliative care (NCCN Guidelines for Palliative Care)
- Imaging to assess response or progression

# Systemic therapy

- See Systemic Therapy for Metastatic or Unresectable Disease (UMSYS-1)
- Previously untreated and HLA-A*02:01-positive
    - In a phase III randomized trial, tebentafusp-tebn, a bispecific protein, resulted in longer overall survival than investigator's choice of pembrolizumab, ipilimumab, or dacarbazine
- HLA-A*02:01-negative disease
    - Agents that are effective for metastatic cutaneous melanoma may be used as first-line therapy
- HLA-A*02:01-positive disease after progression on first-line tebentafusp-tebn
    - Agents that are effective for metastatic cutaneous melanoma may be used
- If disease is confined to the liver, consider regional therapies
    - Percutaneous hepatic perfusion
    - Chemoembolization
    - Radioembolization
    - Immunoembolization
- Since tebentafusp-tebn response rates are low, symptomatic patients may be better palliated by liver-directed treatment first, or their disease may respond better to ipilimumab/nivolumab

# Next

- No evidence of disease
    - Clinical trial, if available
    - or Observation, follow-up per UM-4
- Residual or progressive disease
    - Return to the treatment options above for the applicable branch
