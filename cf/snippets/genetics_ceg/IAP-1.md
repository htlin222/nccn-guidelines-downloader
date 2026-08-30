+++
id           = "genetics_ceg/IAP-1"
gid          = "genetics_ceg"
ref          = "IAP-1"
page         = 107
title        = "Surveillance and management of a personal history of idiopathic adenomatous polyposis"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["IAP-2", "FAP-1", "FAP-B", "FAP-C", "FAP-D", "HRS-A", "GENE-1"]

[facets]
disease   = "genetics_ceg"
timepoint = ["genetic-testing", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cumulative_adenomas"
type = "number"
[[variables]]
name = "adenomas_last_colonoscopy"
type = "number"
[[variables]]
name = "age_at_threshold"
type = "number"
[[variables]]
name = "polyposis_gene_testing"
type = "text"
[[variables]]
name = "prior_childhood_cancer_therapy"
type = "text"
[[variables]]
name = "endoscopic_manageability"
type = "enum"
options = ["manageable-by-colonoscopy-and-polypectomy", "cannot-be-managed-endoscopically"]
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric v1.2026, IAP-1, p107
- Idiopathic adenomatous polyposis (IAP) is defined as an individual with cumulative lifetime ≥10 to 20 adenomas without a PV identified in a polyposis gene
- This page covers a personal history of adenomas; family history is on IAP-2
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Cumulative lifetime adenomas ___ (cumulative_adenomas)
- Adenomas at most recent colonoscopy ___ (adenomas_last_colonoscopy)
- Age at which the patient met the cumulative adenoma threshold ___ (age_at_threshold)
- Adenoma burden ___ (endoscopic_manageability)
- Polyposis gene testing ___ (polyposis_gene_testing)
    - No PV identified in a polyposis gene
    - Prior to managing as IAP, multigene testing including all polyposis and CRC genes should be strongly considered
    - PVs associated with adenomatous polyposis include, but are not limited to, monoallelic PVs in APC, GREM1, POLE, POLD1, and AXIN2, and biallelic PVs in NTHL1, MUTYH, MBD4, MLH3, and MSH3
    - Updated genetic testing may be considered in patients who have previously had limited genetic testing as clinically indicated
    - CRC/polyposis gene list: HRS-A
    - Surveillance recommendations for an identified PV: GENE-1
- Treatment for childhood or young adult cancer ___ (prior_childhood_cancer_therapy)
    - Prior to assigning the diagnosis of IAP, therapy-associated polyposis attributable to treatment for childhood and young adult cancer should be considered as a potential explanation for otherwise unexplained polyposis
    - See NCCN Guidelines for Colorectal Cancer Screening

# Personal history of ≥100 adenomas

- Manage as FAP (FAP-1)

# Personal history of 20 to <100 adenomas, adenoma burden that cannot be managed endoscopically

- Surgical evaluation and counseling if appropriate
- Baseline upper endoscopy at time of next colonoscopy surveillance by age 20–25 y, as on FAP-B
    - Include complete visualization of the ampulla of Vater
        - Cap-assisted endoscopy may be adequate for visualization of the ampulla
    - Repeat following duodenal surveillance guidelines on FAP-C
    - Repeat following gastric surveillance guidelines on FAP-D

# Personal history of 20 to <100 adenomas, adenoma burden manageable by colonoscopy and polypectomy

- High-quality colonoscopy and polypectomy every 1–3 y
    - Repeat at short interval based on residual polyp burden
    - Based on findings at multiple surveillance exams, interval between colonoscopies may be lengthened based on clinical judgment
- Baseline upper endoscopy at time of next colonoscopy surveillance by age 20–25 y, as on FAP-B
    - Include complete visualization of the ampulla of Vater
        - Cap-assisted endoscopy may be adequate for visualization of the ampulla
    - Repeat following duodenal surveillance guidelines on FAP-C
    - Repeat following gastric surveillance guidelines on FAP-D
- Surgical evaluation may be considered if polyps are not manageable or based on patient preference

# Personal history of 10–19 adenomas

- Manage based on clinical judgment
- Frequency of surveillance may be modified based on factors such as
    - Age at which patient met cumulative adenoma threshold
    - Total number of adenomas at most recent colonoscopy
    - More frequent surveillance favored for younger age at meeting threshold
    - More frequent surveillance favored for higher adenoma burden at last colonoscopy
- See NCCN Guidelines for Colorectal Cancer Screening
- Baseline upper endoscopy at time of next colonoscopy surveillance by age 20–25 y (category 2B), as on FAP-B
    - Include complete visualization of the ampulla of Vater
        - Cap-assisted endoscopy may be adequate for visualization of the ampulla
    - Repeat following duodenal surveillance guidelines on FAP-C
    - Repeat following gastric surveillance guidelines on FAP-D

# Next

- Family history of adenomatous polyposis with no PV identified, go to IAP-2
