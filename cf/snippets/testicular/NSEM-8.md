+++
id           = "testicular/NSEM-8"
gid          = "testicular"
ref          = "NSEM-8"
page         = 24
title        = "Second-line therapy for recurrent nonseminoma, by prior treatment and timing of relapse"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-6", "NSEM-9", "TEST-F"]

[facets]
disease    = "testicular"
stage      = "recurrent"
timepoint  = ["recurrence", "relapsed-refractory"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_therapy"
type = "enum"
options = ["prior first-line chemotherapy", "no prior first-line chemotherapy", "prior adjuvant therapy (1 cycle of BEP only)"]
[[variables]]
name = "relapse_interval"
type = "text"
[[variables]]
name = "markers"
type = "text"
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "hcg"
type = "text"
[[variables]]
name = "sites"
type = "text"
[[variables]]
name = "resectable"
type = "text"
+++

# Source

- NCCN Testicular Cancer, Nonseminoma, v2.2026, NSEM-8, p24
- Applies to nonseminoma recurrence detected on follow-up, and the second-line therapy it leads to
- It is preferred that patients with recurrent nonseminoma be treated at centers with expertise in the management of this disease
- Second-line therapy includes best supportive care and palliative care
    - See NCCN Guidelines for Palliative Care
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma, recurrence on follow-up
- Prior treatment received ___ (prior_therapy)
- Time from completion of primary treatment to recurrence ___ (relapse_interval)
    - Early relapse = recurrence 2 years or less after completion of primary treatment
    - Late relapse = recurrence more than 2 years after completion of primary treatment
- Tumor markers ___ (markers)
    - AFP ___ (afp)
    - Beta-hCG ___ (hcg)
- Sites of disease ___ (sites)
- Resectable ___ (resectable)

# Response assessment after treatment

- CT with contrast of C/A/P, or
- MRI with and without contrast of C/A/P
- Any other sites of disease should also be imaged
- FDG-PET/CT has no role in assessing treatment response and residual masses following chemotherapy in patients with nonseminoma

# Prior first-line chemotherapy, early relapse

- Early relapse = recurrence 2 years or less after completion of primary treatment
- Clinical trial, or
- Chemotherapy, either
    - Conventional-dose therapy, VeIP for 4 cycles or TIP for 4 cycles, or
    - High-dose chemotherapy
- Consider surgical treatment if resectable with normal or mildly elevated markers
    - Recommend referral to a high-volume center for residual masses with abnormal AFP and/or beta-hCG levels
- Recommend sperm banking if clinically indicated

# Prior first-line chemotherapy, late relapse

- Late relapse = recurrence more than 2 years after completion of primary treatment
- Surgical treatment, if resectable, regardless of markers (preferred), or
- Clinical trial, if unresectable, or
- Chemotherapy, either
    - Conventional-dose therapy, VeIP for 4 cycles or TIP for 4 cycles, or
    - High-dose chemotherapy
        - Low efficacy of treatment should be considered
- Recommend sperm banking if clinically indicated

# No prior first-line chemotherapy

- Treat per risk status (NSEM-6)
- Recommend sperm banking if clinically indicated

# Prior adjuvant therapy (1 cycle of BEP only)

- First-line chemotherapy (NSEM-6)
    - For select patients, RPLND may be appropriate

# Chemotherapy regimens named on this page

- TIP = Paclitaxel/Ifosfamide/Cisplatin
- VeIP = Vinblastine/Ifosfamide/Cisplatin
- Second-Line Chemotherapy Regimens for Metastatic Germ Cell Tumors (TEST-F)

# Next

- Prior first-line chemotherapy, early or late relapse: Post Second-Line Therapy Management (NSEM-9)
- No prior first-line chemotherapy: treat per risk status (NSEM-6)
- Prior adjuvant therapy (1 cycle of BEP only): first-line chemotherapy (NSEM-6)
