+++
id           = "pancreatic/PANC-3"
gid          = "pancreatic"
ref          = "PANC-3"
page         = 14
title        = "Treatment of borderline resectable disease with no metastases"
nccn_version = "3.2026"
nccn_date    = "08/06/2026"
generated    = "2026-08-27"
see_also     = ["PANC-1", "PANC-2", "PANC-4", "PANC-A", "PANC-B", "PANC-C"]

[facets]
disease   = "pancreatic"
histology = "adenocarcinoma"
timepoint = ["workup", "staging", "neoadjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy_status"
type = "enum"
options = ["positive", "not confirmed", "not yet done"]
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "jaundice"
type = "enum"
options = ["present", "absent"]
+++

# Source

- NCCN Pancreatic Adenocarcinoma v3.2026, PANC-3, p14
- Applies to borderline resectable disease, no metastases
- Resectability status defined by Criteria Defining Resectability Status at Diagnosis (PANC-C)
- Diagnosis, imaging, and staging per Principles of Diagnosis, Imaging, and Staging (PANC-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Borderline resectable (PANC-C), no metastases
- Biopsy ___ (biopsy_status)
- Baseline CA 19-9 ___ (ca19_9)
- Obstructive jaundice ___ (jaundice)

# Initial step

- Refer to high-volume center for evaluation

# Workup, biopsy positive

- EUS-guided biopsy preferred, if not previously done
    - Per Principles of Diagnosis, Imaging, and Staging (PANC-A)
    - Core biopsy recommended, if possible, to obtain adequate tissue for molecular profiling or other ancillary studies
- Consider staging laparoscopy
    - Per Principles of Diagnosis, Imaging, and Staging (PANC-A)
- Baseline CA 19-9
    - Elevated CA 19-9 does not necessarily indicate cancer or advanced disease
    - CA 19-9 may be elevated as a result of biliary obstruction, infection (cholangitis), or inflammation, benign or malignant
    - CA 19-9 will be undetectable in individuals who are Lewis antigen-negative
    - Consider obtaining CEA and CA-125 in patients who are nonsecreting, or those with normal CA 19-9 levels
- Consider PET
- Consider ERCP with stent placement
    - Per Principles of Obstructive Jaundice and Tissue Acquisition Management (PANC-B)
- Tumor/somatic molecular profiling, if clinically indicated
- Genetic testing for inherited mutations, recommended for any patient with confirmed pancreatic cancer
    - Use comprehensive gene panels for hereditary cancer syndromes
    - Genetic counseling for patients who test positive for a pathogenic mutation (ATM, BRCA1, BRCA2, CDKN2A, MLH1, MSH2, MSH6, PALB2, PMS2, STK11, and TP53)
    - Genetic counseling for patients with a positive family history of cancer, especially pancreatic cancer, regardless of mutation status
    - See NCCN Guidelines for Genetic/Familial High Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate

# Cancer not confirmed

- Exclude autoimmune pancreatitis
- Repeat biopsy
    - Biopsy positive, take the workup above, genetic testing included

# Next

- Biopsy positive, go to neoadjuvant therapy (PANC-4)
