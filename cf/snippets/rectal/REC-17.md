+++
id           = "rectal/REC-17"
gid          = "rectal"
ref          = "REC-17"
page         = 30
title        = "dMMR/MSI-H or POLE/POLD1 ultra-hypermutated rectal cancer with resectable metachronous metastases: initial and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-11", "REC-12", "REC-18", "REC-10", "REC-10A", "REC-F"]

[facets]
disease   = "rectal"
stage     = ["IV", "recurrent"]
biomarker = ["dmmr", "msi-h", "pole", "pold1", "tmb-high"]
timepoint = ["recurrence", "metastatic", "neoadjuvant", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biomarker_basis"
type = "enum"
options = ["dMMR/MSI-H", "POLE mutation", "POLD1 mutation"]
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "prior_immunotherapy"
type = "enum"
options = ["none", "previous immunotherapy", "contraindication to immunotherapy"]
[[variables]]
name = "prior_oxaliplatin"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-17, p30
- Applies to dMMR/MSI-H, or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb)
- Applies to resectable metachronous metastases
- Adjuvant treatment is up to 6 mo of perioperative treatment
    - Imaging per Principles of Imaging (REC-A)
- Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Biomarker basis for this pathway: ___ (biomarker_basis)
- TMB ___ (tmb)
- Metachronous metastases, resectable
- Sites of metastatic disease: ___ (met_sites)
- Previous immunotherapy: ___ (prior_immunotherapy)
- Previous oxaliplatin-based therapy: ___ (prior_oxaliplatin)

# Resection and local therapy, applies to every path below

- Resection is preferred over locally ablative procedures for liver metastases
- For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
- Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (REC-C and REC-E)
- For lung metastases, surgery, thermal ablation, and SBRT can be considered (REC-C and REC-E)
- Hepatic artery infusion ± systemic chemotherapy (category 2B) is also an option at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - VEGF inhibitor contraindicated

# No previous immunotherapy

- Checkpoint inhibitor immunotherapy, preferred (REC-F 5 of 17)
    - Then observation (REC-10A)
    - or Then resection and/or local therapy
- or Resection and/or local therapy
    - Then adjuvant FOLFOX or CAPEOX

# Previous immunotherapy or contraindication

- Resection and/or local therapy
    - Then observation, preferred for previous oxaliplatin-based therapy
    - or Then systemic therapy ± biologic therapy (REC-F), category 2B for biologic therapy
- or Neoadjuvant chemotherapy (2–3 mo), FOLFOX or CAPEOX
    - Then resection and/or local therapy
    - Then adjuvant FOLFOX or CAPEOX, or observation

# Next

- After treatment, go to surveillance (REC-10)
- Observation after checkpoint inhibitor immunotherapy without resection, go to REC-10A
- Not a candidate for immunotherapy, treat as recommended for pMMR/MSS disease
