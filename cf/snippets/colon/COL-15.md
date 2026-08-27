+++
id           = "colon/COL-15"
gid          = "colon"
ref          = "COL-15"
page         = 24
title        = "dMMR/MSI-H or POLE/POLD1 ultra-hypermutated disease with resectable metachronous metastases: initial and adjuvant treatment"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-9", "COL-8", "COL-A", "COL-C", "COL-D", "COL-E", "COL-16"]

[facets]
disease   = "colon"
stage     = ["IV", "recurrent"]
timepoint = ["recurrence", "metastatic", "primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_msi"
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
options = ["none", "previous immunotherapy", "contraindication to immunotherapy"]
[[variables]]
name = "prior_oxaliplatin"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colon Cancer v2.2026, COL-15, p24
- Applies to dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb)
- Applies to resectable metachronous metastases
- Branches on whether immunotherapy was previously received, or is contraindicated
- Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MMR or MSI status ___ (mmr_msi)
- TMB ___ (tmb)
- Sites of metachronous metastases ___ (met_sites)
- Disease is resectable
- Previous immunotherapy ___ (prior_immunotherapy)
- Previous oxaliplatin-based therapy ___ (prior_oxaliplatin)

# Initial treatment, no previous immunotherapy

- Checkpoint inhibitor immunotherapy (preferred) (COL-D 5 of 17)
    - Only for candidates for immunotherapy; those who are not are treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
    - Followed by resection and/or local therapy
- or Resection and/or local therapy

# Initial treatment, previous immunotherapy or contraindication

- Resection and/or local therapy
- or Neoadjuvant chemotherapy (2–3 mo), followed by resection and/or local therapy
    - FOLFOX
    - or CAPEOX

# Resection and local therapy, conditions that apply to every arm above

- Resection is preferred over locally ablative procedures
- Hepatic artery infusion ± systemic chemotherapy (category 2B) is also an option
    - Only at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - VEGF inhibitor contraindicated
- For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
- Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (COL-C and COL-E)
- For lung metastases, surgery, thermal ablation, and SBRT can be considered (COL-C and COL-E)

# Adjuvant treatment, up to 6 mo perioperative treatment

- Principles of Imaging (COL-A)
- After checkpoint inhibitor immunotherapy then resection and/or local therapy
    - Observation
    - or FOLFOX
    - or CAPEOX
    - or FOLFOX + atezolizumab
    - or CAPEOX + atezolizumab
    - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
- After resection and/or local therapy without neoadjuvant chemotherapy
    - Observation (preferred for previous oxaliplatin-based therapy)
    - or Systemic therapy ± biologic therapy (COL-D) (category 2B for biologic therapy)
- After neoadjuvant chemotherapy then resection and/or local therapy
    - FOLFOX
    - or CAPEOX
    - or Observation

# Next

- Surveillance (COL-8)
