+++
id           = "testicular/NSEM-10"
gid          = "testicular"
ref          = "NSEM-10"
page         = 26
title        = "Third-line therapy for nonseminoma recurring after second-line chemotherapy"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["TEST-G"]

[facets]
disease    = "testicular"
stage      = "recurrent"
timepoint  = ["recurrence", "relapsed-refractory"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_second_line"
type = "text"
[[variables]]
name = "prior_high_dose"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "relapse_interval"
type = "text"
[[variables]]
name = "disease_sites"
type = "text"
+++

# Source

- NCCN Testicular Cancer, Nonseminoma, v2.2026, NSEM-10, p26
- Applies to nonseminoma with recurrence after prior second-line chemotherapy
- Third-line therapy here includes best supportive care and palliative care, see NCCN Guidelines for Palliative Care
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma, recurrence after second-line chemotherapy
    - It is preferred that patients with recurrent nonseminoma be treated at centers with expertise in the management of this disease
- Prior second-line chemotherapy given ___ (prior_second_line)
- Prior high-dose chemotherapy ___ (prior_high_dose)
    - This is the split between the first two branches below
- Time from completion of second-line chemotherapy to this recurrence ___ (relapse_interval)
    - Recurrence >2 years after completion of second-line chemotherapy is a late relapse and takes the late relapse branch below
- Sites of disease ___ (disease_sites)
    - Whether disease is a solitary site, and whether it is resectable, decides the surgical options below

# Response assessment after treatment

- CT with contrast, or MRI with and without contrast, of C/A/P and any other sites of disease is recommended
- FDG-PET/CT has no role in assessing treatment response and residual masses following chemotherapy in patients with nonseminoma

# Prior first- and second-line conventional-dose chemotherapy

- Clinical trial
- or High-dose chemotherapy (preferred)
    - Third-Line Systemic Therapy Regimens for Metastatic Germ Cell Tumors (TEST-G)
- or Consider surgical treatment if solitary site

# Prior high-dose chemotherapy

- Clinical trial (preferred)
- or Conventional-dose third-line chemotherapy
    - Third-Line Systemic Therapy Regimens for Metastatic Germ Cell Tumors (TEST-G)
- or Consider surgical treatment if solitary site
- or Molecular testing for biomarker-driven therapy if progression
    - Should include both NGS and IHC testing
    - Molecular testing is to assess for sensitivity to targeted therapies, see Third-Line Systemic Therapy Regimens for Metastatic Germ Cell Tumors (TEST-G)
    - Pan-cancer, tumor-agnostic treatments can be considered for patients with actionable mutations

# Late relapse, recurrence >2 years after completion of second-line chemotherapy

- Surgical treatment, if resectable (preferred)
- or Chemotherapy
    - Conventional-dose therapy
    - High-dose chemotherapy, if not previously received
    - Third-Line Systemic Therapy Regimens for Metastatic Germ Cell Tumors (TEST-G)
