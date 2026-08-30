+++
id           = "genetics_ceg/POLYP-1"
gid          = "genetics_ceg"
ref          = "POLYP-1"
page         = 83
title        = "Who to test for adenomatous polyposis, and what to do with each testing result"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HRS-1", "POLYP-1A", "SPS-1", "FAP-1", "AFAP-1", "MAP-1", "IAP-1", "GENE-1", "GENE-11"]

[facets]
disease   = "genetics_ceg"
biomarker = ["apc", "mutyh", "fap", "afap", "serrated-polyposis", "axin2", "grem1", "pole", "pold1", "msh3", "nthl1"]
timepoint = "genetic-testing"

[[variables]]
name = "adenoma_count"
type = "text"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "age_at_diagnosis"
type = "number"
[[variables]]
name = "chrpe"
type = "text"
[[variables]]
name = "extracolonic_features"
type = "text"
[[variables]]
name = "family_pv"
type = "text"
[[variables]]
name = "family_polyposis"
type = "text"
[[variables]]
name = "somatic_apc"
type = "text"
[[variables]]
name = "test_result"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, POLYP-1, p83
- Adenomatous polyposis testing criteria, the testing strategy that follows from risk status, and where each result goes
- Footnotes for this page are on POLYP-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Cumulative adenoma count: ___ (adenoma_count)
- Personal cancer history: ___ (personal_cancer_history)
- Age at cancer diagnosis: ___ (age_at_diagnosis)
- Congenital hypertrophy of retinal pigment epithelium (CHRPE), multifocal/bilateral or unilateral: ___ (chrpe)
- Desmoid tumor or hepatoblastoma: ___ (extracolonic_features)
- Known PV in an adenomatous polyposis gene in the family: ___ (family_pv)
- Family history of polyposis, and whether the family is willing/able to have testing: ___ (family_polyposis)
- P/LP APC variant identified on tumor somatic testing: ___ (somatic_apc)
- Genetic testing result to date: ___ (test_result)

# Recommend testing if a personal history of ≥1 of the following criteria

- ≥20 cumulative adenomas
- Known PV in adenomatous polyposis gene in family
- Multifocal/bilateral congenital hypertrophy of retinal pigment epithelium (CHRPE)
    - Also known as retinal pigment epithelium (RPE) hamartomas associated with FAP (RPEH-FAP)
- Cribriform-morular variant of papillary thyroid cancer
- Family history of polyposis and family unwilling/unable to have testing

# Consider testing if a personal history of ≥1 of the following criteria

- Between 10–19 cumulative adenomas
    - Age of onset, family history, personal history of CRC, and/or presence of other features may influence whether genetic testing is offered in these situations
- Desmoid tumor
- Hepatoblastoma
- Unilateral CHRPE
- Individual meets criteria for SPS (SPS-1) with at least some adenomas

# Germline testing after a P/LP APC variant on tumor somatic testing

- In individuals with any cancer with a P/LP APC variant identified on tumor somatic testing, germline testing should be considered for either of the following
    - Those meeting ≥1 of the other adenomatous testing criterion above, after reevaluation of personal and family history
    - Those diagnosed age <30 y with any cancer
- This should prompt a careful evaluation of personal and family history of the individual to determine the yield of germline sequencing
    - Somatic APC P/LP variants are common in many tumor types in absence of a germline P/LP variant
    - Mandelker D, et al. Ann Oncol 2019;30:1221-1231

# Testing strategy when a PV is already known in the family

- Risk status: PV(s) known
- Strategy: genetic testing for familial PV
    - Additional testing may be indicated based on personal and family medical history
- Positive for familial APC PV
    - To determine classical FAP vs AFAP, see FAP/AFAP-1
- Positive for biallelic MUTYH PV
    - Go to MAP-1
- Positive for known familial PV in another polyposis gene (GENE-1)
    - Manage as if positive for the known familial PV (GENE-1)
- Positive for monoallelic (single copy) MUTYH PV / heterozygote (carrier)
    - Go to GENE-11
    - Siblings of a patient with MUTYH-associated polyposis (MAP) are recommended to have site-specific testing for the familial PVs
    - Full sequencing of MUTYH may be considered in an unaffected parent when the other parent has MAP
        - If the unaffected parent is found to have one MUTYH PV, testing the adult offspring for the familial MUTYH PVs is indicated
        - If the unaffected parent is not tested, comprehensive testing of MUTYH should be considered in the adult offspring
    - Testing of adult offspring of MUTYH heterozygotes should be offered if the other parent is also a heterozygote
        - Could still be offered if the other parent is not a heterozygote and management would change, if they have a first-degree relative affected with CRC
        - Or to inform reproductive risks, since their future children could be at risk for MAP
- Negative for familial PV
    - Personal history of ≥10 adenomas, go to IAP-1
    - <10 adenomas, see NCCN Guidelines for Colorectal Cancer Screening

# Testing strategy when no PV is known

- Risk status: no known PVs in any polyposis gene
    - There are clinically relevant yet rarer genes that can cause a polyposis syndrome that may be phenotypically indistinguishable from APC/MUTYH polyposis
- Strategy: germline multigene panel testing (MGPT) (HRS-A)
    - MGPT should include all polyposis and CRC genes (Stanich P, et al. Clin Gastroenterol Hepatol 2019;17:2008-2015)
    - Rare PVs associated with adenomatous polyposis include, but are not limited to, monoallelic PVs in AXIN2, GREM1, POLE, and POLD1, and biallelic PVs in MLH3, MSH3, MBD4, and NTHL1
    - If evaluation is based on family history of ≥1 relative with polyposis, then type of polyps in the affected relative, if known, may guide testing
- PV identified
    - See appropriate hereditary CRC syndrome
- PV not identified, or genetic testing not done
    - If individual has ≥10 adenomas, go to IAP-1
    - If individual has <10 adenomas, see NCCN Guidelines for Colorectal Cancer Screening

# Next

- Positive for familial APC PV, go to FAP/AFAP-1 to determine classical FAP vs AFAP
- Positive for biallelic MUTYH PV, go to MAP-1
- Positive for a known familial PV in another polyposis gene, go to GENE-1
- Positive for monoallelic (single copy) MUTYH PV, go to GENE-11
- No PV identified or testing not done, with ≥10 adenomas, go to IAP-1
- No PV identified or testing not done, with <10 adenomas, see NCCN Guidelines for Colorectal Cancer Screening
- Meets criteria for SPS with at least some adenomas, see SPS-1
