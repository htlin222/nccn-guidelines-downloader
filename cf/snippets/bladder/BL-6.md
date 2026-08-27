+++
id           = "bladder/BL-6"
gid          = "bladder"
ref          = "BL-6"
page         = 13
title        = "Staging workup, primary treatment, and reassessment for stage II (cT2, N0) and stage IIIA muscle-invasive bladder cancer"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-7", "BL-10", "BL-11", "BL-E"]

[facets]
disease   = "bladder"
stage     = ["II", "III"]
timepoint = ["staging", "neoadjuvant", "primary-treatment", "surveillance"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "gfr"
type = "text"
[[variables]]
name = "cisplatin_eligible"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Muscle-Invasive Bladder Cancer v2.2026, BL-6, p13
- Applies to Stage II (cT2, N0)
- Also applies to Stage IIIA (cT3, N0; cT4a, N0; cT1-cT4a, N1)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (ctnm)
- Estimated glomerular filtration rate (GFR) ___ (gfr)
- Eligible to receive Cisplatin-based chemotherapy: ___ (cisplatin_eligible)

# Additional staging workup

- Abdomen/pelvis CT or MRI
    - Only if not previously done
- Chest imaging (CT chest)
- Bone scan or MRI
    - Only if clinical suspicion or symptoms of bone metastases
- Estimate glomerular filtration rate (GFR)
    - To assess eligibility for Cisplatin

# Primary treatment

- Neoadjuvant Cisplatin-based combination chemotherapy followed by radical cystectomy (category 1)
- Perioperative/sandwich immunotherapy with neoadjuvant Cisplatin-based combination chemotherapy followed by radical cystectomy (category 1)
- Perioperative/sandwich Enfortumab vedotin + Pembrolizumab followed by radical cystectomy
    - For those not eligible to receive Cisplatin-based chemotherapy
- Cystectomy alone
    - For those not eligible to receive Cisplatin-based chemotherapy
- Bladder preservation with concurrent chemoradiotherapy (category 1)
    - And TURBT
- Radiation therapy
    - Select patients only

# Subsequent treatment after cystectomy

- Adjuvant treatment (BL-7)

# Subsequent treatment after bladder preservation with concurrent chemoradiotherapy and TURBT

- Reassess tumor status
- No tumor
    - Follow-up (BL-E)
    - Surveillance
- Tumor
    - If CIS, Ta, or T1, consider TURBT +/- intravesical therapy
    - If persistent T2, consider surgical resection (ie, cystectomy or partial cystectomy in highly selected cases)
    - Or treat as metastatic disease (BL-10)

# Subsequent treatment after radiation therapy

- Reassess tumor status
- Tumor
    - If CIS, Ta, or T1, consider TURBT +/- intravesical therapy
    - Or treat as metastatic disease (BL-10)
    - And best supportive care (See NCCN Guidelines for Palliative Care)

# Next

- Adjuvant treatment, go to BL-7
- Metastatic disease, go to BL-10
- Recurrent or persistent disease, go to BL-11
- Follow-up and surveillance, see BL-E
