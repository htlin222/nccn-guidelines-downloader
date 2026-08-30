+++
id           = "wilms_tumor/WILMS-2"
gid          = "wilms_tumor"
ref          = "WILMS-2"
page         = 11
title        = "Findings and initial treatment for a renal tumor, by resectability, laterality, and predisposing condition"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-3", "WILMS-5", "WILMS-6", "WILMS-8", "WILMS-10", "WILMS-11", "WILMS-C", "WILMS-D", "WILMS-E", "WILMS-I", "ST-1"]

[facets]
disease   = "wilms_tumor"
timepoint = ["primary-treatment", "neoadjuvant"]

[[variables]]
name = "age"
type = "text"
[[variables]]
name = "laterality"
type = "enum"
options = ["unilateral", "unilateral multifocal", "bilateral"]
[[variables]]
name = "predisposing_condition"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "resectable"
type = "enum"
options = ["resectable", "not resectable"]
[[variables]]
name = "tumor_size"
type = "number"
[[variables]]
name = "nodes_sampled"
type = "number"
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-2, p11
- Findings and initial treatment for a renal tumor
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) old
- Renal tumor laterality ___ (laterality)
    - Unilateral renal tumors
        - Limited data exist for patients with unilateral multifocal tumors, so the NCCN Panel recommends that either approach is reasonable
    - Bilateral renal tumors
- Largest tumor dimension ___ (tumor_size) cm
- Predisposing condition ___ (predisposing_condition)
    - Genetic disorders such as Denys-Drash, WAGR, Beckwith-Wiedemann, Frasier, and Perlman syndromes
    - Contralateral nephrogenic rests in children <12 months
    - Ten percent to 33% of WT occurs in children with predisposing conditions
    - Children with known predisposing conditions should be screened for WT with PE and abdominal US every 3 months until 7 years of age (ie, all of year 6)
    - See Principles of Cancer Risk Assessment and Counseling (WILMS-I)
- Tumor resectability ___ (resectable)
    - Renal tumors may be unresectable at diagnosis because of tumor size
    - Tumor thrombus extending above the hepatic veins
    - Bilateral tumors
    - Involvement of surrounding organs
    - Pulmonary function compromise from extensive metastatic disease

# Unilateral renal tumor, tumor resectable

- Primary nephrectomy with regional LN sampling
    - Nephrectomy and regional LN sampling are recommended as initial therapy for resectable tumors
    - LN sampling MUST be performed for adequate staging
    - Obtain a minimum of >5 nodes: ___ (nodes_sampled) sampled
    - Take nodes from areas in renal hilum anatomically expected to represent nodes associated with kidney
    - Principles of Pathology (WILMS-C)
    - Principles of Surgery (WILMS-D)
    - COG Staging of Wilms Tumor (ST-1)
- Pathologic confirmation of WT: ___ (pathology)
    - For FHWT, perform molecular analysis to identify loss of heterozygosity (LOH) of 1p, 16q, 11p, and 1q gain
    - If tumor is not WT, refer to appropriate specialist or NCCN Guidelines, if available

# Unilateral renal tumor, tumor not resectable, no predisposing condition

- Tumor biopsy
    - Biopsy is strongly recommended to obtain a histologic diagnosis and molecular biomarkers, which are used for risk classification and treatment decisions
    - See Principles of Biopsy (WILMS-E)
- Pathologic confirmation of WT: ___ (pathology)
    - For FHWT, perform molecular analysis to identify loss of heterozygosity (LOH) of 1p, 16q, 11p, and 1q gain
    - If tumor is not WT, refer to appropriate specialist or NCCN Guidelines, if available

# Unilateral renal tumor, tumor not resectable, predisposing condition

- Delay tumor resection
    - For tumors <2 cm, consider close surveillance given the challenge of differentiating WT from proliferating nephrogenic rests
- Tumor biopsy not indicated
    - Initial biopsy is not recommended for children with unilateral tumor and known predisposing condition
    - Biopsy should be considered for children in this category who also are >10 years of age, or with concern for pathology other than WT

# Bilateral renal tumors, with or without predisposing condition

- Delay tumor resection
    - For tumors <2 cm, consider close surveillance given the challenge of differentiating WT from proliferating nephrogenic rests
    - Small nodules that are presumed to be nephrogenic rest on imaging can be observed without resection or biopsy
- Tumor biopsy not indicated
    - Initial biopsy is not recommended for children with imaging findings of bilateral renal tumors
    - Biopsy should be considered for children in this category who also are >10 years of age, or with concern for pathology other than WT

# Next

- Unilateral resected tumor, favorable histology: adjuvant treatment for unilateral favorable histology WT (FHWT), go to WILMS-3
- Unilateral resected tumor with anaplasia: adjuvant treatment for unilateral WT with anaplasia, go to WILMS-10
- Initially unresectable unilateral FHWT with no predisposing condition: neoadjuvant treatment, go to WILMS-5
- Unresectable unilateral WT with no predisposing condition and with anaplasia: neoadjuvant treatment, go to WILMS-11
- Unilateral renal tumor with predisposing condition: neoadjuvant treatment, go to WILMS-6
- Initially unresectable bilateral renal tumor: neoadjuvant treatment, go to WILMS-8
