+++
id           = "genetics_ceg/HGAST-1"
gid          = "genetics_ceg"
ref          = "HGAST-1"
page         = 72
title        = "Genetic testing criteria for gastric cancer risk"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["HRS-1", "HRS-3", "HGAST-2", "HGAST-3"]

[facets]
disease   = "genetics_ceg"
histology = ["adenocarcinoma", "signet-ring"]
biomarker = ["cdh1", "ctnna1", "apc", "atm", "bmpr1a", "brca1", "brca2", "palb2", "smad4", "stk11", "tp53", "mlh1", "msh2", "msh6", "epcam", "lynch"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "gastric_cancer_history"
type = "text"
[[variables]]
name = "age_at_gastric_dx"
type = "number"
[[variables]]
name = "gastric_histology"
type = "text"
[[variables]]
name = "lobular_breast_history"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "gastric_polyps"
type = "text"
[[variables]]
name = "polyposis_syndrome"
type = "text"
+++

# Source

- NCCN Hereditary Gastric Cancer v1.2026, HGAST-1, p72
- Genetic testing criteria for gastric cancer risk
- Genes such as APC (including APC promoter 1B), ATM, BMPR1A, BRCA1, BRCA2, CDH1, CTNNA1, Lynch syndrome genes (MLH1, MSH2, EPCAM, MSH6), PALB2, SMAD4, STK11, TP53
- Nomenclature of CDH1-associated DGC is evolving; Online Mendelian Inheritance in Man (OMIM) nomenclature refers to this as "diffuse gastric and lobular breast cancer syndrome (DGLB)"
- The Panel recognizes that based on clinical judgment, additional individuals may warrant testing for CDH1
    - These may include families that have DGC and other manifestations such as cleft lip/palate and Maori ancestry
- These criteria identified 80% of mutation carriers from a group consisting of mostly unselected mutation carriers independent of clinical phenotype, and would not result in a high number of patients unnecessarily tested (Lerner BA, et al. J Med Genet 2025;62:57-61)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Personal history of gastric cancer: ___ (gastric_cancer_history)
- Age at gastric cancer diagnosis: ___ (age_at_gastric_dx)
- Gastric cancer histology and stage: ___ (gastric_histology)
- Personal history of lobular breast cancer: ___ (lobular_breast_history)
- Family history of gastric cancer, by degree of relative and age at diagnosis: ___ (family_history)
- Gastric polyp count, location, and antral sparing on endoscopy: ___ (gastric_polyps)
- Known or suspected polyposis or hamartomatous syndrome: ___ (polyposis_syndrome)

# Testing is clinically indicated in the following scenarios

- See General Testing Criteria (HRS-1)
- Individual with a personal history of gastric adenocarcinoma
    - Diagnosed <50 y
    - Diagnosed >=50 y (category 2B)
- Individual with personal history of gastric cancer meeting Lynch syndrome-based testing criteria
- Individual with a personal history of diffuse gastric cancer (DGC) at any age
    - DGC refers to the histologic appearance of diffuse-type, poorly cohesive gastric cancer, often with a residual component of SRCC morphology, extending beyond the submucosa (WHO 2022)
    - DGC is also clinically recognized as having the phenotype linitis plastica
- Individual with a personal history of stage T1a signet ring cell carcinoma (SRCC) at any age
- Individual with lobular breast cancer and personal or family history of diffuse gastric cancer
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate, Testing Criteria For High-Penetrance Breast Cancer Susceptibility Genes

# Family history criteria

- Family history of gastric cancer, any one of the following
    - >=2 first-degree or second-degree relatives with gastric cancer including >=1 diagnosed at age <=50 y
    - >=2 first-degree or second-degree relatives with gastric cancer including >=1 confirmed DGC regardless of age
    - >=3 first-degree or second-degree relatives with gastric cancer regardless of age

# Polyposis and syndrome-based criteria

- Individual with suspicion for gastric adenocarcinoma and proximal polyposis of the stomach (GAPPS), based on having either
    - Personal history of >100 gastric fundic gland polyps restricted to the body and fundus with antral sparing, and no evidence of colorectal or duodenal polyposis; OR
    - >=1 first-degree relative with GAPPS
    - GAPPS as described by Worthley DL, Phillips KD, Wayte N, et al. Gut 2012;61:774-779
- Individual who meets clinical criteria for JPS or PJS, including based on hamartomatous polyps of the stomach
- Individual meeting criteria for testing based on NCCN Guidelines for Neuroendocrine and Adrenal Tumors, such as gastrinoma, pheochromocytoma, or paraganglioma

# Next

- See General Testing Criteria, HRS-1
- Individual with gastric cancer meeting Lynch syndrome-based testing criteria, go to HRS-3
- Individual meeting the diffuse gastric cancer, lobular breast cancer, or gastric cancer family history criteria above, go to HGAST-2
- Individual with suspicion for GAPPS, go to HGAST-3
