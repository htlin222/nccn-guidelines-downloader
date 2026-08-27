+++
id           = "prostate/PROS-17"
gid          = "prostate"
ref          = "PROS-17"
page         = 34
title        = "Workup and treatment of M1 CRPC, and the split between adenocarcinoma and small cell/NEPC"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-8", "PROS-16", "PROS-18"]

[facets]
disease   = "prostate"
histology = ["adenocarcinoma", "small-cell", "neuroendocrine"]
stage     = "IV"
timepoint = ["metastatic", "workup", "relapsed-refractory"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "testosterone"
type = "number"
[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "bone_mets"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "biopsy_histology"
type = "text"
[[variables]]
name = "hrr"
type = "text"
[[variables]]
name = "msi"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-17, p34
- Applies to CRPC with imaging studies positive for metastases
- CRPC is prostate cancer that progresses clinically, radiographically, or biochemically despite castrate levels of serum testosterone (<50 ng/dL)
- ADT alone (PROS-G) or observation are recommended for asymptomatic patients with metastatic disease or M0 CRPC and life expectancy ≤5 years
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- CRPC, imaging studies positive for metastases
- Serum testosterone ___ (testosterone), castrate level is <50 ng/dL
- PSA ___ (psa)
- Sites of metastases ___ (met_sites)
- Bone metastases ___ (bone_mets)
- Metastatic lesion biopsy ___ (biopsy_histology)
- HRR ___ (hrr) / MSI or dMMR ___ (msi) / TMB ___ (tmb)
- Life expectancy ___ (life_expectancy)

# Workup

- Metastatic lesion biopsy
    - Histologic evidence of both adenocarcinoma and small cell carcinoma may be present, in which case treatment can follow either pathway
    - Treat as adenocarcinoma if biopsy is not feasible or not performed
- Somatic testing for homologous recombination repair (HRR), microsatellite instability (MSI)/mismatch repair deficiency (dMMR), and tumor mutational burden (TMB)
    - Recommended if not previously done
    - Re-evaluation may be considered
    - Germline testing for HRR mutations is recommended if not performed previously
    - Principles of Genetics and Molecular/Biomarker Analysis (PROS-C)

# Additional treatment options

- Continue ADT to maintain castrate levels of serum testosterone (<50 ng/dL)
    - For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- Bone antiresorptive therapy, if bone metastases present
    - Denosumab (category 1, preferred)
    - Zoledronic acid
    - Principles of Survivorship in Prostate Cancer (PROS-B)
- Palliative RT for painful bone metastases
    - Principles of Radiation Therapy (PROS-J)
- Best supportive care

# Small cell/neuroendocrine prostate cancer (NEPC), first-line and subsequent treatment options

- Document castrate levels of testosterone if progression occurs on ADT
    - Principles of Imaging (PROS-E) and Discussion
- Chemotherapy
    - Cisplatin/etoposide
    - Carboplatin/etoposide
    - Docetaxel/carboplatin
    - Cabazitaxel/carboplatin
        - Cabazitaxel 20 or 25 mg/m² plus carboplatin area under the curve [AUC] 4 mg/mL per min with growth factor support can be considered for fit patients with aggressive variant metastatic CRPC (mCRPC), or with unfavorable genomics
        - Aggressive variant is visceral metastases, low PSA and bulky disease, high lactate dehydrogenase [LDH], high carcinoembryonic antigen [CEA], lytic bone metastases, NEPC histology
        - Unfavorable genomics is defects in at least 2 of PTEN, TP53, and RB1
    - For additional options, see NCCN Guidelines for Small Cell Lung Cancer
    - For details on the efficacy and safety of these agents, see Principles of Non-Hormonal Systemic Therapy (PROS-N)
- Best supportive care

# Next

- Adenocarcinoma, go to PROS-18
- Small cell/neuroendocrine prostate cancer (NEPC), use the first-line and subsequent treatment options on this page
- Both adenocarcinoma and small cell carcinoma present, treatment can follow either pathway
