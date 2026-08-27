+++
id           = "infections/FEV-10"
gid          = "infections"
ref          = "FEV-10"
page         = 38
title        = "Treatment of Clostridioides difficile infections (CDI) in patients with cancer"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-7", "FEV-11"]

[facets]
disease   = "infections"
timepoint = "supportive"

[[variables]]
name = "cdi_status"
type = "enum"
options = ["confirmed", "ongoing-worsening", "fulminant", "resolved", "relapse-recurrent"]
[[variables]]
name = "current_antibiotics"
type = "text"
[[variables]]
name = "ppi_use"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "neutropenia"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_cdi_therapy"
type = "text"
[[variables]]
name = "prior_positive_assay"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-10, p38
- Applies to treatment of confirmed Clostridioides difficile infections (CDI) in patients with cancer
- All recommendations category 2A unless otherwise indicated

# Assessment

- CDI status ___ (cdi_status)
- Current antibiotic treatment ___ (current_antibiotics)
- PPI use ___ (ppi_use)
- Neutropenia ___ (neutropenia)
- CDI treatment already received ___ (prior_cdi_therapy)
- Date of previous positive assay result ___ (prior_positive_assay)

# Treatment of confirmed CDI

- Discontinue unnecessary antibiotic treatment
    - Optimize therapy to avoid high- and moderate-risk antibiotics
    - Limit use of PPIs if possible
- Fidaxomicin 200 mg BID for 10 days
- OR vancomycin 125 mg PO QID for 10 days

# Subsequent treatment, ongoing or worsening CDI

- Discontinue unnecessary antibiotic treatment
    - Optimize therapy to avoid high- and moderate-risk antibiotics
    - Limit use of PPIs if possible
- Consider switching to fidaxomicin if initially treated with vancomycin
- FDA-approved live biotherapeutics
    - Avoid in patients with neutropenia
    - Avoid in patients on, or likely to be on in the near term, broad spectrum antibiotics
    - There are emerging data about the efficacy of live biotherapeutics in this patient population
- For subsequent treatment options for ongoing CDI, also see the Clostridium difficile Practice Guidelines provided by the Infectious Diseases Society of America: https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update

# Subsequent treatment, fulminant disease

- Oral vancomycin 500 mg QID, or via nasogastric (NG) tube, with IV metronidazole 500 mg TID
- Consider vancomycin via rectal instillation if ileus present

# Subsequent treatment, relapse or recurrent CDI

- Recurrent CDI is defined as symptom onset and positive assay result following an episode with positive assay result in previous 2–8 weeks
- Discontinue unnecessary antibiotic treatment
    - Optimize therapy to avoid high- and moderate-risk antibiotics
    - Limit use of PPIs if possible
- Fidaxomicin if not previously received
- OR vancomycin or fidaxomicin taper
- With appropriate consultation, consider FDA-approved live biotherapeutics
    - Avoid in patients with neutropenia
    - Avoid in patients on, or likely to be on in the near term, broad spectrum antibiotics
    - There are emerging data about the efficacy of live biotherapeutics in this patient population

# CDI resolved

- If continuing antibiotics, patients at high risk for recurrence or those with a history of multiple recurrences may benefit from secondary prophylaxis
    - Data are limited
    - Implementation of prophylaxis should be discussed with ID or GI expert

# Next

- Follow-up, see FEV-11
