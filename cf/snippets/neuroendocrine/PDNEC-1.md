+++
id           = "neuroendocrine/PDNEC-1"
gid          = "neuroendocrine"
ref          = "PDNEC-1"
page         = 53
title        = "Evaluation, treatment, and surveillance of extrapulmonary poorly differentiated neuroendocrine carcinoma"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["CP-1", "NUP-1", "NET-9"]

[facets]
disease   = "neuroendocrine"
histology = ["neuroendocrine", "large-cell", "small-cell"]
timepoint = ["workup", "primary-treatment", "metastatic", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "histology"
type = "enum"
options = ["neuroendocrine carcinoma", "large cell carcinoma", "small cell carcinoma", "MiNEN"]
[[variables]]
name = "ki67"
type = "text"
[[variables]]
name = "nonneuroendocrine_component"
type = "text"
[[variables]]
name = "extent"
type = "enum"
options = ["resectable", "locoregional unresectable", "metastatic"]
+++

# Source

- NCCN Neuroendocrine and Adrenal Tumors v1.2026, PDNEC-1, p53
- Applies to extrapulmonary poorly differentiated neuroendocrine neoplasms
- This page is for poorly differentiated neuroendocrine carcinoma (PDNEC) and not high-grade NET
    - Not all high-grade (Ki-67 >20%) neuroendocrine neoplasms are poorly differentiated, see WDG3-1
- Supporting references: Eads JR, et al. Endocr Relat Cancer 2023;30:e220206 and Sorbye H, et al. J Neuroendocrinol 2023;35:e13249
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary site ___ (primary_site)
- Histology ___ (histology)
- Ki-67 ___ (ki67)
- Non-neuroendocrine component ___ (nonneuroendocrine_component)
- Disease extent ___ (extent)

# Tumor type

- Neuroendocrine carcinoma (NEC) (NE-E)
- Large or small cell carcinoma
- Mixed neuroendocrine-nonneuroendocrine neoplasm (MiNEN)
- PDNECs are often associated with non-neuroendocrine components such as adeno or squamous cell carcinoma
    - Management of these tumors is controversial
    - Chemotherapy regimens for the non-neuroendocrine components may be considered

# Evaluation

- Recommended
    - Multiphasic chest/abdomen/pelvis CT (NE-B)
        - Multiphasic imaging studies are performed with IV contrast in arterial and portal venous phases
    - Or chest CT and abdomen/pelvis MRI (NE-B)
    - Molecular profiling of tumor tissue
        - Recommended for patients with locoregional unresectable or metastatic disease who are candidates for anticancer therapy, to identify actionable alterations
        - Testing on tumor tissue is preferred
        - ctDNA testing can be considered if tumor tissue testing is not feasible
- As appropriate
    - Brain MRI or CT with contrast
    - FDG-PET/CT (NE-B)
    - Biochemical evaluation as clinically indicated (NE-A)
- SSTR-based imaging (SSTR-PET/CT or SSTR-PET/MRI) is not part of the routine evaluation of PDNECs

# Treatment

- Combination of immune checkpoint inhibitors + chemotherapy is investigational for all patients with extrapulmonary PDNECs
- Resectable
    - Therapy options depend on sites of disease, options may include
        - Resection (NE-D) + adjuvant chemotherapy (NE-G) ± RT (NE-I)
        - Neoadjuvant chemotherapy (NE-G) ± RT (NE-I) + resection (NE-D)
        - Chemotherapy alone (NE-G)
        - Definitive chemoradiation with cisplatin + etoposide or carboplatin + etoposide
- Locoregional, unresectable
    - Concurrent or sequential RT (NE-I) + chemotherapy (NE-G)
    - Or chemotherapy (NE-G)
- Metastatic
    - Chemotherapy (NE-G)
    - If progression, go to NE-G

# Surveillance

- Resectable disease: every 12 wk for 1 y, then every 6 mo
- Locoregional unresectable or metastatic disease: every 6-16 wk
- Earlier, if symptoms
- At each visit
    - H&P
    - Appropriate imaging studies
        - Chest CT ± contrast and abdomen/pelvis MRI with contrast
        - Or multiphasic chest/abdomen/pelvis CT (NE-B)
- See NCCN Guidelines for Survivorship

# Next

- Resectable, treat per the resectable options above, then surveillance every 12 wk for 1 y, then every 6 mo
- Locoregional unresectable, RT (NE-I) + chemotherapy (NE-G) or chemotherapy (NE-G), then surveillance every 6-16 wk
- Metastatic, chemotherapy (NE-G), then surveillance every 6-16 wk
- Progression on chemotherapy, go to NE-G
- High-grade but not poorly differentiated, go to WDG3-1
