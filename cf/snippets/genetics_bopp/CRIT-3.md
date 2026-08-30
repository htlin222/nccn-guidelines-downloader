+++
id           = "genetics_bopp/CRIT-3"
gid          = "genetics_bopp"
ref          = "CRIT-3"
page         = 29
title        = "When testing for high-penetrance breast cancer susceptibility genes may be considered, and when the yield is low"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2", "CRIT-2A", "EVAL-B"]

[facets]
disease   = "genetics_bopp"
biomarker = ["brca1", "brca2"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "age_at_dx"
type = "number"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "meets_crit2"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "brca_probability"
type = "text"
[[variables]]
name = "probability_model"
type = "enum"
options = ["Tyrer-Cuzick", "BRCAPro", "CanRisk"]
[[variables]]
name = "gleason"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-3, p29
- Testing criteria for high-penetrance breast cancer susceptibility genes, continued from CRIT-2
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Age at breast cancer diagnosis: ___ (age_at_dx)
- Personal cancer history: ___ (personal_cancer_history)
- Meets any of the criteria on CRIT-2: ___ (meets_crit2)
- Close blood relatives with breast, ovarian, pancreatic, or prostate cancer: ___ (family_history)
- Probability of a BRCA1/2 P/LP variant by a prior probability model: ___ (brca_probability)
- Prior probability model used: ___ (probability_model)
- Gleason Score, if prostate cancer: ___ (gleason)

# Testing may be considered in the following scenarios

- Requires appropriate pre-test education and access to post-test management
- Personal history of breast cancer at age ≤65 y not meeting any of the above criteria (CRIT-2)
    - Testing includes breast cancer genes plus other inherited cancer genes consistent with family phenotype
    - It is cautioned that the majority of those PVs will be in moderate-penetrance genes, which are over-represented in older affected individuals
    - Access to an experienced genetic counseling team to discuss management options is particularly important in this setting
- Personal history of breast cancer diagnosed at any age with ≥1 close blood relative with intermediate-risk prostate cancer with intraductal/cribriform histology
    - Close blood relatives include first-, second-, and third-degree relatives on the same side of the family (EVAL-B)
    - See Initial Risk Stratification and Staging Workup in NCCN Guidelines for Prostate Cancer
- Individuals with a 2.5%-5% probability of a BRCA1/2 P/LP variant based on prior probability models
    - Applies to unaffected individuals, and to affected individuals who do not meet the above criteria (CRIT-2)
    - Eg, Tyrer-Cuzick, BRCAPro, CanRisk
    - Testing for PVs in other genes should take into consideration factors such as patient preferences, turnaround time, and insurance restrictions to particular labs, and thus particular panels
    - The prevalence of VUS increases with testing of additional genes
    - Pre-test education on the challenges in managing PVs in genes associated with specific syndromes, eg, CDH1 and TP53 given their expanding clinical phenotypes, in the absence of a family history typical of such syndromes
        - Does not apply for de novo PVs
    - Pre-test education regarding the uncertain clinical utility of identifying certain PVs, eg, monoallelic MUTYH
- Personal history of malignant phyllodes tumors
    - See Discussion

# Low probability (<2.5%) that testing will have findings of documented high-penetrance genes

- Female diagnosed with breast cancer at age >65 y, with no close relative with breast, ovarian, pancreatic, or prostate cancer
    - Close blood relatives include first-, second-, and third-degree relatives on the same side of the family (EVAL-B)
- Diagnosed with localized prostate cancer with Gleason Score <7 and no close relative with breast, ovarian, pancreatic, or prostate cancer
