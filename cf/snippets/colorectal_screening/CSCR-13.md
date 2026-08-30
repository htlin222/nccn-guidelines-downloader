+++
id           = "colorectal_screening/CSCR-13"
gid          = "colorectal_screening"
ref          = "CSCR-13"
page         = 28
title        = "IBD surveillance: follow-up interval when there is no dysplasia, and what to do when invisible dysplasia is found"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-12", "CSCR-14", "CSCR-15"]

[facets]
disease   = "colorectal_screening"
timepoint = "surveillance"

[[variables]]
name = "ibd_duration"
type = "text"
[[variables]]
name = "surveillance_finding"
type = "enum"
options = ["no dysplasia", "invisible dysplasia"]
[[variables]]
name = "endoscopic_inflammation"
type = "enum"
options = ["active", "not active"]
[[variables]]
name = "histologic_inflammation"
type = "enum"
options = ["active", "not active"]
[[variables]]
name = "psc"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "family_history_crc_under_50"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "chromoendoscopy_performed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "gi_pathologist_review"
type = "enum"
options = ["no dysplasia", "dysplasia confirmed", "pending"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-13, p28
- Increased risk based on personal history of inflammatory bowel disease
- Evaluation of surveillance findings, and follow-up of clinical findings
- Applies to a surveillance colonoscopy showing no dysplasia, or invisible dysplasia
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Inflammatory bowel disease, duration: ___ (ibd_duration)
- Finding on this surveillance colonoscopy: ___ (surveillance_finding)
- Endoscopic inflammation: ___ (endoscopic_inflammation)
- Histologic inflammation: ___ (histologic_inflammation)
- PSC: ___ (psc)
- Family history of CRC <50 y: ___ (family_history_crc_under_50)
- Chromoendoscopy already performed: ___ (chromoendoscopy_performed)
- GI pathologist review of invisible dysplasia: ___ (gi_pathologist_review)

# No dysplasia — risk stratification

- Lower risk
    - No endoscopic active inflammation
    - No histologic active inflammation
- Higher risk, any one of
    - PSC
    - Active inflammation
    - Family history of CRC <50 y

# No dysplasia — follow-up of clinical findings

- Lower risk, colonoscopy follow-up in 2–5 y
    - UK, Australian, and European GI societies position statements recommend risk-stratified surveillance with increased surveillance interval to 3–5 years in lower risk patients
- Higher risk, colonoscopy follow-up in 1 y

# Invisible dysplasia

- Have the invisible dysplasia reviewed by a GI pathologist
- Reviewed as no dysplasia
    - Follow the no-dysplasia follow-up above
- Dysplasia confirmed
    - Assess with chromoendoscopy if not already performed, or refer to an endoscopist with expertise in chromoendoscopy
        - In patients with endoscopically invisible dysplasia, the recommendation for referral to an endoscopist with IBD expertise for chromoendoscopy is consensus-based, as data to support its use in this setting are limited
    - Consider referral to a surgeon with expertise in IBD
        - A surgical consult may include a discussion about surveillance and colectomy, based on multiple factors
            - Other visible dysplastic lesions in the same segment
            - Histology
            - A discussion with the patient about risks and benefits of each approach

# Next

- No dysplasia, lower risk, colonoscopy follow-up in 2–5 y
- No dysplasia, higher risk, colonoscopy follow-up in 1 y
- Invisible dysplasia reviewed by a GI pathologist as no dysplasia, follow the no-dysplasia pathway above
- Invisible dysplasia with dysplasia confirmed, chromoendoscopy assessment, and consider referral to a surgeon with expertise in IBD
