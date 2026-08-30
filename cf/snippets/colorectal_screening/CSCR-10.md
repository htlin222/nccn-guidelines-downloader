+++
id           = "colorectal_screening/CSCR-10"
gid          = "colorectal_screening"
ref          = "CSCR-10"
page         = 24
title        = "Management of a large colorectal polyp: which resection result drives referral versus which follow-up interval"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-9", "CSCR-10A", "CSCR-11", "CSCR-A"]

[facets]
disease   = "colorectal_screening"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "location"
type = "text"
[[variables]]
name = "polyp_size"
type = "text"
[[variables]]
name = "morphology"
type = "enum"
options = ["pedunculated", "sessile", "non-polypoid"]
[[variables]]
name = "high_risk_features"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "tattoo_placed"
type = "enum"
options = ["yes", "no", "not-applicable"]
[[variables]]
name = "resection"
type = "enum"
options = ["complete", "incomplete", "biopsy-only"]
[[variables]]
name = "resection_technique"
type = "enum"
options = ["en-bloc", "piecemeal", "not-applicable"]
[[variables]]
name = "margin_ablation"
type = "enum"
options = ["yes", "no", "not-applicable"]
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "invasive_cancer"
type = "enum"
options = ["yes", "no", "pending"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-10, p24
- Applies to large colorectal polyp(s) (≥1 cm in size)
    - Consider a referral to a center of expertise for large polyp management
    - For sessile polyps or laterally spreading lesions (LSLs) ≥20 mm size, recommend endoscopic tattoo placement for future lesion identification
- Footnotes on CSCR-10A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Location of the polyp: ___ (location)
- Size of the polyp: ___ (polyp_size)
- Morphology: ___ (morphology)
    - Pedunculated polyp(s), Paris subtype 0–1p lesions
    - Sessile polyp(s), Paris subtype 0–1s lesions
    - Non-polypoid lesions, Paris subtype 0–IIa, 0–IIb, 0–IIc, and 0–III lesions
- Endoscopic tattoo placed, for a sessile polyp or an LSL ≥20 mm in size: ___ (tattoo_placed)
- High-risk endoscopic features for invasive cancer: ___ (high_risk_features)
    - High-risk features suggestive of submucosal invasion
        - NICE classification type 3
        - Kudo classification type V (VN and VI)
        - Non-lifting sign
- Resection: ___ (resection)
- Resection technique: ___ (resection_technique)
- Thermal ablation of the resection margin performed: ___ (margin_ablation)
- Histology: ___ (histology)
    - Histology may include adenoma, SSP/SSL, hyperplastic polyp, or TSA
- Invasive cancer: ___ (invasive_cancer)

# Pedunculated polyp(s)

- Pedunculated polyp(s), Paris subtype 0–1p lesions
    - Histology may include adenoma, SSP/SSL, hyperplastic polyp, or TSA
- No invasive cancer
    - Colonoscopy in 3 y
- Invasive cancer
    - Diagnosis of Colorectal Cancer (CSCR-11)
    - NCCN Guidelines for Rectal Cancer
    - NCCN Guidelines for Colon Cancer

# Sessile polyp(s) or non-polypoid lesions, no high-risk endoscopic features

- Sessile polyp(s), Paris subtype 0–1s lesions
- Non-polypoid lesions, Paris subtype 0–IIa, 0–IIb, 0–IIc, and 0–III lesions
    - The Panel recommends consideration of referral to a center of expertise for management of these lesions
- Histology may include adenoma, SSP/SSL, hyperplastic polyp, or TSA
- No high-risk endoscopic features for invasive cancer
    - High-risk features suggestive of submucosal invasion include NICE classification type 3, Kudo classification type V (VN and VI), and non-lifting sign
- Complete resection
    - Systematic thermal ablation of the resection margin should be performed after complete resection of large or piecemeal colorectal polyps to minimize recurrence
        - Use either APC or snare tip soft coagulation (STSC)
    - < 2 cm or en bloc resection
        - Colonoscopy in 3 y
            - Consider follow-up in <3 years when confidence in complete en bloc resection is low
        - No recurrence
            - Colonoscopy in 5 y
        - Recurrence
            - Repeat endoscopic therapy
            - OR referral to center with expertise in endoscopic management of large colorectal polyp(s)
            - OR surgical resection
    - ≥2 cm and piecemeal resection
        - Colonoscopy in 6–12 mo
        - Recurrence
            - Repeat endoscopic therapy
            - OR referral to center with expertise in endoscopic management of large colorectal polyp(s)
            - OR surgical resection
        - No recurrence
            - Colonoscopy within 1 y, then in 3 y
    - Invasive cancer
        - Diagnosis of Colorectal Cancer (CSCR-11)
        - NCCN Guidelines for Rectal Cancer
        - NCCN Guidelines for Colon Cancer
- Incomplete resection
    - No invasive cancer
        - Paris subtype 0–IIa, 0–IIb, 0–IIc, and 0–III lesions: the Panel recommends consideration of referral to a center of expertise for management of these lesions
        - Referral to center with expertise in management of large colorectal polyp(s)
        - OR referral for surgical evaluation
    - Invasive cancer
        - Diagnosis of Colorectal Cancer (CSCR-11)
        - NCCN Guidelines for Rectal Cancer
        - NCCN Guidelines for Colon Cancer

# Sessile polyp(s) or non-polypoid lesions, high-risk endoscopic features

- High-risk endoscopic features for invasive cancer
    - High-risk features suggestive of submucosal invasion include NICE classification type 3, Kudo classification type V (VN and VI), and non-lifting sign
- Biopsy
    - No invasive cancer
        - Histology may include adenoma, SSP/SSL, hyperplastic polyp, or TSA
        - Referral to center with expertise in management of large colorectal polyp(s)
        - OR referral for surgical evaluation
    - Invasive cancer
        - Diagnosis of Colorectal Cancer (CSCR-11)
        - NCCN Guidelines for Rectal Cancer
        - NCCN Guidelines for Colon Cancer

# Next

- Invasive cancer, go to Diagnosis of Colorectal Cancer (CSCR-11), the NCCN Guidelines for Rectal Cancer, or the NCCN Guidelines for Colon Cancer
- Pedunculated polyp(s), no invasive cancer, colonoscopy in 3 y
- Complete resection, < 2 cm or en bloc, colonoscopy in 3 y, then colonoscopy in 5 y if no recurrence
- Complete resection, ≥2 cm and piecemeal, colonoscopy in 6–12 mo, then colonoscopy within 1 y and in 3 y if no recurrence
- Recurrence after either interval, repeat endoscopic therapy OR referral to center with expertise in endoscopic management of large colorectal polyp(s) OR surgical resection
- Incomplete resection with no invasive cancer, or high-risk features with a biopsy showing no invasive cancer, referral to center with expertise in management of large colorectal polyp(s) OR referral for surgical evaluation
- Footnotes on CSCR-10A
