+++
id           = "colon/COL-2"
gid          = "colon"
ref          = "COL-2"
page         = 10
title        = "Workup of colon cancer appropriate for resection (nonmetastatic), and the MMR/MSI branch out of it"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-A", "COL-B", "COL-I", "COL-2A", "COL-3", "COL-12"]

[facets]
disease   = "colon"
timepoint = ["workup", "staging"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_site"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "mmr_status"
type = "enum"
options = ["pMMR/MSS", "dMMR/MSI-H", "pending"]
[[variables]]
name = "cea"
type = "text"
+++

# Source

- NCCN Colon Cancer v2.2026, COL-2, p10
- Applies to colon cancer appropriate for resection (nonmetastatic)
- Suspected or proven metastatic adenocarcinoma is handled separately (COL-2A)
- All patients with colon cancer should be counseled for family history and considered for risk assessment
    - For suspected LS, FAP, and attenuated FAP, see the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- For tools to aid in optimal assessment and care of older adults with cancer, see the NCCN Guidelines for Older Adult Oncology
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Tumor site ___ (tumor_site)
- ___ (ctnm)
- Colon cancer appropriate for resection, nonmetastatic
- MMR/MSI ___ (mmr_status)
- CEA ___ (cea)

# Workup

- Biopsy
- MMR/MSI testing
    - Principles of Pathologic Review (COL-B)
- Testing for somatic PI3K pathway alterations, for stage II–III
    - Includes mutations in PIK3CA exon 9 and 20
    - Other PIK3CA, PIK3R1, and PTEN mutations
    - Deep deletions of PTEN
    - Aspirin should not be initiated until after recovery from surgery
    - For patients receiving adjuvant therapy and aspirin, aspirin can be given concurrently with adjuvant chemotherapy
- Pathology review
    - Principles of Pathologic Review (COL-B)
- Colonoscopy
- C/A/P CT
    - Principles of Imaging (COL-A)
- Consider abdomen/pelvis MRI
    - Principles of Imaging (COL-A)
    - Consider an MRI to assist with the diagnosis of rectal cancer versus colon cancer (eg, low-lying sigmoid tumor)
    - The rectum lies below a virtual line from the sacral promontory to the upper edge of the symphysis as determined by MRI
- Complete blood count (CBC)
- Chemistry profile
- Carcinoembryonic antigen (CEA)
- FDG-PET/CT is not indicated
    - Principles of Imaging (COL-A)
- Fertility risk discussion/counseling in appropriate patients
- Test for genetic variants of DPYD prior to initiating capecitabine or fluorouracil, unless immediate treatment is necessary (FDA Boxed Warning)
    - Avoid use in patients with certain homozygous or compound heterozygous DPYD variants that result in complete DPD deficiency
    - No specific test is recommended, and there are insufficient data to inform dose adjustments for many of the DPYD variants
    - Principles of Pharmacogenetics (COL-I)

# Next

- pMMR/MSS, go to COL-3
- dMMR/MSI-H or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, tumor mutational burden [TMB] >50 mut/Mb), go to COL-12
- Suspected or proven metastatic adenocarcinoma, go to COL-2A
