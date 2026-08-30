+++
id           = "prostate_detection/PROSD-4"
gid          = "prostate_detection"
ref          = "PROSD-4"
page         = 11
title        = "Management of prostate biopsy results, by histologic finding"
nccn_version = "2.2026"
nccn_date    = "02/18/26"
generated    = "2026-08-30"
see_also     = ["PROSD-A"]

[facets]
disease    = "prostate_detection"
timepoint  = ["diagnosis", "surveillance"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "dre"
type = "text"
[[variables]]
name = "biopsy_result"
type = "enum"
options = ["cancer", "idc-without-invasive", "aip-without-invasive", "atypia-suspicious-for-cancer", "high-grade-pin", "benign"]
[[variables]]
name = "prior_mpmri"
type = "enum"
options = ["prior high-quality mpMRI", "no prior high-quality mpMRI"]
+++

# Source

- NCCN Prostate Cancer Early Detection v2.2026, PROSD-4, p11
- Management of biopsy results
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- PSA ___ (psa)
- DRE ___ (dre)
- Biopsy result ___ (biopsy_result)
- mpMRI status ___ (prior_mpmri)

# Cancer

- Cancer on biopsy, see NCCN Guidelines for Prostate Cancer

# Intraductal carcinoma (IDC) without invasive carcinoma

- Repeat biopsy using MRI targeting and systematic biopsy to look for invasive carcinoma
- IDC is an independent adverse pathologic factor in both radical prostatectomy and needle biopsy specimens
    - Its presence in biopsy material strongly suggests the presence of high-grade cancer
    - Consideration should be given to initial treatment
    - Otherwise careful evaluation is indicated, with strong consideration given to repeat biopsy using MRI guidance

# Atypical intraductal proliferation (AIP) without invasive carcinoma

- Repeat biopsy using MRI targeting and systematic biopsy to look for invasive carcinoma
- Intraductal proliferations may show a greater degree of architectural complexity and/or cytologic atypia than typical high-grade PIN, yet fall short of the strict diagnostic threshold for IDC
    - Preferred terminology for these lesions is AIP
- When diagnosed on needle biopsy, AIP is potentially considered a marker of unsampled cancer
    - Associated with an increased risk (50%) of invasive carcinoma and/or IDC on repeat biopsy

# Atypia suspicious for cancer, high-grade prostatic intraepithelial neoplasia (PIN), or benign

- If no prior high-quality mpMRI
    - Obtain mpMRI
    - Consider biomarkers that improve the specificity of screening (category 2B), see PROSD-A
    - For atypia, consider repeated biopsy in 12-24 months with relative increased sampling of the atypical site
- If prior high-quality mpMRI
    - PSA and DRE at 12- to 24-month intervals
    - Consider biomarkers that improve the specificity of screening (category 2B), see PROSD-A
- Repeat prostate biopsy with refined biopsy techniques, if high suspicion of cancer
    - mpMRI and/or refined prostate biopsy techniques (image guidance using MRI/ultrasound fusion) may help identify regions of cancer missed on prior prostate biopsies
    - Recommended after at least 1 negative prostate biopsy and high suspicion for cancer based on PSA and/or biomarkers
    - mpMRI followed by lesion targeting increases the detection of clinically significant, higher-risk disease while lowering the detection of lower-risk disease
    - Some advocate for excluding systematic biopsy in those who undergo MRI targeting, but most advocate for a combined approach, as some high-grade cancers are uniquely detected using the systematic approach
- A negative prostate biopsy does not preclude a diagnosis of prostate cancer on subsequent biopsy
    - Follow patients with negative prostate biopsies with DRE and PSA
    - Add mpMRI if no prior high-quality mpMRI
    - Consider biomarker tests that improve the specificity of PSA testing
- For high-grade PIN and benign results, PSA testing may be discontinued at certain ages and PSA cutpoints, see Discussion

# Next

- Cancer, see NCCN Guidelines for Prostate Cancer
- IDC or AIP without invasive carcinoma, repeat biopsy using MRI targeting and systematic biopsy
- Atypia, high-grade PIN, or benign, follow up as above and repeat biopsy with refined techniques if high suspicion of cancer
- Biomarker testing that improves the specificity of screening, see PROSD-A
