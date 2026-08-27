+++
id           = "rectal/REC-12"
gid          = "rectal"
ref          = "REC-12"
page         = 25
title        = "Initial and adjuvant treatment of pMMR/MSS resectable metachronous metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-10", "REC-11", "REC-A", "REC-C", "REC-E", "REC-F"]

[facets]
disease   = "rectal"
stage     = "IV"
biomarker = ["pmmr", "mss"]
timepoint = ["metastatic", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "prior_chemo"
type = "enum"
options = ["no previous chemotherapy", "previous chemotherapy"]
[[variables]]
name = "prior_oxaliplatin"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "approach"
type = "enum"
options = ["resection and/or local therapy first", "neoadjuvant chemotherapy first"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-12, p25
- Applies to pMMR/MSS resectable metachronous metastases
- Adjuvant treatment is counted as up to 6 mo of perioperative treatment
- Imaging follows Principles of Imaging (REC-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- pMMR/MSS confirmed
- Metachronous metastases, site(s): ___ (met_sites)
- Metastases judged resectable
- Previous chemotherapy: ___ (prior_chemo)
- Previous oxaliplatin-based therapy: ___ (prior_oxaliplatin)
- Planned sequence: ___ (approach)

# Resection and/or local therapy

- Resection is preferred over locally ablative procedures for liver metastases
- For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
- Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (REC-C and REC-E)
- For lung metastases, surgery, thermal ablation, and SBRT can be considered (REC-C and REC-E)
- Hepatic artery infusion ± systemic chemotherapy is also an option (category 2B)
    - Only at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - Vascular endothelial growth factor (VEGF) inhibitor contraindicated

# No previous chemotherapy — resection and/or local therapy first

- Resection and/or local therapy
- Then adjuvant treatment
    - FOLFOX (preferred)
    - CAPEOX (preferred)
    - Capecitabine
    - Fluorouracil/leucovorin

# No previous chemotherapy — neoadjuvant chemotherapy first

- Neoadjuvant chemotherapy 2–3 mo
    - FOLFOX (preferred)
    - CAPEOX (preferred)
    - Capecitabine (category 2B)
    - Fluorouracil/leucovorin (category 2B)
- Then resection and/or local therapy
- Then adjuvant treatment
    - FOLFOX
    - CAPEOX
    - Capecitabine
    - Fluorouracil/leucovorin
    - or Observation

# Previous chemotherapy — resection and/or local therapy first

- Resection and/or local therapy
- Then adjuvant treatment
    - Observation, preferred for previous oxaliplatin-based therapy
    - or Systemic therapy ± biologic therapy (REC-F)
        - Category 2B for biologic therapy

# Previous chemotherapy — neoadjuvant chemotherapy first

- Neoadjuvant chemotherapy 2–3 mo
    - FOLFOX (preferred)
    - CAPEOX (preferred)
    - Capecitabine
    - Fluorouracil/leucovorin
- Then resection and/or local therapy
- Then adjuvant treatment
    - FOLFOX
    - CAPEOX
    - Capecitabine
    - Fluorouracil/leucovorin
    - or Observation

# Next

- After completion of treatment, go to Surveillance (REC-10)
