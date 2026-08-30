+++
id           = "genetics_bopp/CRIT-5"
gid          = "genetics_bopp"
ref          = "CRIT-5"
page         = 31
title        = "Testing criteria for pancreatic cancer susceptibility genes"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-2", "CRIT-4", "CRIT-6", "GENE-1"]

[facets]
disease   = "genetics_bopp"
histology = ["adenocarcinoma", "neuroendocrine"]
biomarker = ["atm", "brca1", "brca2", "cdkn2a", "mlh1", "msh2", "msh6", "epcam", "palb2", "stk11", "tp53"]
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "pancreatic_diagnosis"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "relationship_to_affected"
type = "text"
[[variables]]
name = "affected_relative_testable"
type = "enum"
options = ["yes", "no", "deceased"]
[[variables]]
name = "ancestry"
type = "text"
[[variables]]
name = "family_history"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-5, p31
- Testing criteria for pancreatic cancer susceptibility genes
- Genes such as ATM, BRCA1, BRCA2, CDKN2A, LS genes (MLH1, MSH2, MSH6, EPCAM), PALB2, STK11, and TP53 (GENE-A)
- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- For personal or family history of breast cancer, see CRIT-2; for ovarian cancer, see CRIT-4; for prostate cancer, see CRIT-6
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Pancreatic cancer diagnosis: ___ (pancreatic_diagnosis)
- Histology: ___ (histology)
- Relationship to the individual diagnosed with pancreatic cancer: ___ (relationship_to_affected)
- Affected individual available to test: ___ (affected_relative_testable)
- Ancestry: ___ (ancestry)
- Family history: ___ (family_history)

# Testing is clinically indicated in the following scenarios

- See General Testing Criteria on CRIT-1
- Exocrine pancreatic cancers
    - All individuals diagnosed with exocrine pancreatic cancer, including acinar cell carcinoma
        - Pancreatic cancer risk is higher in individuals of Ashkenazi Jewish ancestry
        - Genetic testing of Ashkenazi Jewish patients with pancreatic cancer may have a higher yield of P/LP variants than of non-Ashkenazi Jewish patients, see Discussion
        - Increasing evidence suggests that identification of a BRCA1/2 P/LP variant may direct use of targeted therapies for patients with pancreatic cancer, see NCCN Guidelines for Pancreatic Adenocarcinoma
    - First-degree relatives of individuals diagnosed with exocrine pancreatic cancer
        - Testing of first-degree relatives should only be done if it is impossible to test the individual who has pancreatic cancer
        - Some second-degree relatives may meet testing criteria based on additional family history
        - Approximately 2%–5% of unselected cases of pancreatic adenocarcinoma will have a BRCA1/2 P/LP variant
        - The disease is highly aggressive and the option to test the affected relative may not be available in the future, so there may be significant benefit to family members in testing these patients near the time of diagnosis
        - Family history of pancreatic cancer of unknown histology is often assumed to be an exocrine pancreatic cancer
- Neuroendocrine pancreatic tumors, see NCCN Guidelines for Neuroendocrine and Adrenal Tumors

# Next

- Criteria met, go to GENE-1
- If testing criteria not met, consider testing criteria for other hereditary syndromes
- If criteria for other hereditary syndromes not met, then cancer screening as per NCCN Screening Guidelines
