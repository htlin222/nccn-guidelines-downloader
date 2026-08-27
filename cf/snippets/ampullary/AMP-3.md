+++
id           = "ampullary/AMP-3"
gid          = "ampullary"
ref          = "AMP-3"
page         = 9
title        = "Workup of ampullary adenocarcinoma, and the split into localized versus metastatic disease"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-A", "AMP-G", "AMP-4", "AMP-6"]

[facets]
disease   = "ampullary"
histology = "adenocarcinoma"
timepoint = ["workup", "staging"]
biomarker = ["alk", "nrg1", "ntrk", "ros1", "ret", "braf", "brca", "kras", "her2-amplified", "msi-h", "dmmr", "tmb-high"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lft"
type = "text"
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "mets"
type = "enum"
options = ["none", "present"]
[[variables]]
name = "subtype"
type = "enum"
options = ["pancreatobiliary", "intestinal", "unknown"]
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-3, p9
- Applies to a clinical presentation of adenocarcinoma
- Principles of Diagnosis, Imaging, and Staging: AMP-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ampullary adenocarcinoma
- Liver function test ___ (lft)
- Baseline CA 19-9 ___ (ca19_9)
- Carcinoembryonic antigen (CEA) ___ (cea)
- Metastatic disease on imaging ___ (mets)
- Histologic subtype ___ (subtype)

# Workup

- CT chest, and pancreatic protocol CT (abdomen and pelvis)
    - See Principles of Diagnosis, Imaging, and Staging (AMP-A)
- Liver function test
- Baseline CA 19-9
- Carcinoembryonic antigen (CEA)
- Consider endoscopic retrograde cholangiopancreatography (ERCP)/percutaneous transhepatic cholangiography (PTC) as clinically indicated
- Consider genetic testing for inherited mutations
    - Recommended for any patient with confirmed ampullary adenocarcinoma, or a positive family history of cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling recommended for patients who test positive for a pathogenic mutation (ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, TP53)
    - Genetic counseling also recommended for patients with a positive family history of cancer, regardless of mutation status
- Multidisciplinary consultation
    - Consider involving expertise from diagnostic imaging, interventional endoscopy, medical oncology, radiation oncology, surgery, pathology, geriatric medicine, genetic counseling, and palliative care
    - Principles of Palliation and Supportive Care (AMP-G)
    - Consider consultation with a registered dietitian
    - See NCCN Guidelines for Older Adult Oncology, and NCCN Guidelines for Palliative Care

# If no metastatic disease

- Consider MRI for indeterminate liver lesions as clinically indicated
    - See Principles of Diagnosis, Imaging, and Staging (AMP-A)
- Histologic subtype pancreatobiliary versus intestinal, if possible

# If metastatic disease

- Biopsy confirmation from a metastatic site preferred
    - Core biopsy recommended, if possible, to obtain adequate tissue for molecular profiling or other ancillary studies
- Consider molecular profiling of tumor tissue as clinically indicated
    - Tumor/somatic profiling, preferably using a next-generation sequencing (NGS) assay
    - Recommended for patients with metastatic disease who are candidates for anti-cancer therapy, to identify clinically actionable and/or emerging alterations, if clinically indicated
    - Fusions: ALK, NRG1, NTRK, ROS1, FGFR2, RET
    - Mutations: BRAF, BRCA1/2, KRAS, PALB2
    - Amplifications: HER2
    - Microsatellite instability (MSI)
    - Mismatch repair deficiency (dMMR)
    - Tumor mutational burden (TMB)
    - Comprehensive genomic profiling via an FDA-approved and/or validated NGS-based assay
    - HER2 overexpression via immunohistochemistry (IHC), with or without fluorescence in situ hybridization (FISH)
    - RNA sequencing assays preferred for detecting RNA fusions, because gene fusions are better detected by RNA-based NGS
    - Testing on tumor tissue preferred; cell-free DNA testing can be considered if tumor tissue testing is not feasible

# Next

- Localized disease, go to AMP-4
- Metastatic disease, go to AMP-6
