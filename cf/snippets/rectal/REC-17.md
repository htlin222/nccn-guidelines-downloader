+++
id           = "rectal/REC-17"
gid          = "rectal"
ref          = "REC-17"
page         = 30
title        = "dMMR/MSI-H or POLE/POLD1 resectable metachronous metastases: initial and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-10", "REC-10A", "REC-A", "REC-C", "REC-E", "REC-F"]

[facets]
disease   = "rectal"
stage     = "IV"
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["metastatic", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_status"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "prior_immunotherapy"
type = "enum"
options = ["no previous immunotherapy", "previous immunotherapy", "contraindication to immunotherapy"]
[[variables]]
name = "prior_oxaliplatin"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "approach"
type = "enum"
options = ["immunotherapy first", "resection and/or local therapy first", "neoadjuvant chemotherapy first"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-17, p30
- Applies to dMMR/MSI-H rectal cancer
- Also applies to POLE/POLD1 mutation with ultra-hypermutated phenotype, eg, TMB >50 mut/Mb
- Applies to resectable metachronous metastases
- Adjuvant treatment is counted as up to 6 mo of perioperative treatment
- Imaging follows Principles of Imaging (REC-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MMR/MSI status ___ (mmr_status)
- POLE/POLD1 and TMB ___ (tmb)
- Metachronous metastases, site(s): ___ (met_sites)
- Metastases judged resectable
- Previous immunotherapy or contraindication: ___ (prior_immunotherapy)
    - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
- Previous oxaliplatin-based therapy: ___ (prior_oxaliplatin)
- Planned sequence: ___ (approach)

# Resection and/or local therapy

- Resection is preferred over locally ablative procedures for liver metastases
- For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
- Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (REC-C and REC-E)
- For lung metastases, surgery, thermal ablation, and SBRT can be considered (REC-C and REC-E)
- Hepatic artery infusion ± systemic chemotherapy is also an option (category 2B)
    - Only at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - VEGF inhibitor contraindicated

# No previous immunotherapy — checkpoint inhibitor immunotherapy first

- Checkpoint inhibitor immunotherapy (preferred) (REC-F 5 of 17)
- Then Observation (REC-10A)
- or Then resection and/or local therapy
    - Hepatic artery infusion ± systemic chemotherapy option applies to the resection (category 2B)

# No previous immunotherapy — resection and/or local therapy first

- Resection and/or local therapy
- Then adjuvant treatment
    - FOLFOX
    - or CAPEOX

# Previous immunotherapy or contraindication — resection and/or local therapy first

- Resection and/or local therapy
- Then adjuvant treatment
    - Observation, preferred for previous oxaliplatin-based therapy
    - or Systemic therapy ± biologic therapy (REC-F)
        - Category 2B for biologic therapy

# Previous immunotherapy or contraindication — neoadjuvant chemotherapy first

- Neoadjuvant chemotherapy 2–3 mo
    - FOLFOX
    - or CAPEOX
- Then resection and/or local therapy
- Then adjuvant treatment
    - FOLFOX
    - or CAPEOX
    - or Observation

# Next

- After completion of treatment, go to Surveillance (REC-10)
- After checkpoint inhibitor immunotherapy with observation, surveillance following nonoperative management (REC-10A)
