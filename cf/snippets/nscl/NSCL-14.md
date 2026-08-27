+++
id           = "nscl/NSCL-14"
gid          = "nscl"
ref          = "NSCL-14"
page         = 40
title        = "Clinical assessment and initial treatment of stage IIIB (T4, N2), stage IIIC (T4, N3), and stage IVA, M1a pleural or pericardial effusion"
nccn_version = "7.2026"
nccn_date    = "08/07/26"
generated    = "2026-08-27"
see_also     = ["NSCL-13", "NSCL-15", "NSCL-17", "NSCL-18", "NSCL-19"]

[facets]
disease   = "nscl"
stage     = ["III", "IV"]
biomarker = "egfr"
timepoint = ["workup", "staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["stage IIIB (T4, N2)", "stage IIIC (T4, N3)", "stage IVA M1a pleural effusion", "stage IVA M1a pericardial effusion"]
[[variables]]
name = "contralateral_node"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "ipsilateral_node"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "egfr"
type = "enum"
options = ["exon 19 deletion", "L858R mutation", "no exon 19 deletion or L858R mutation", "pending"]
[[variables]]
name = "effusion_cytology"
type = "enum"
options = ["negative", "positive", "indeterminate", "not done"]
+++

# Source

- NCCN Non-Small Cell Lung Cancer v7.2026, NSCL-14, p40
- Applies to clinical assessment of stage IIIB (T4, N2), stage IIIC (T4, N3), and stage IVA, M1a pleural or pericardial effusion
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Presentation ___ (presentation)
- Contralateral mediastinal node ___ (contralateral_node)
- Ipsilateral mediastinal node ___ (ipsilateral_node)
- EGFR ___ (egfr)
- Pleural or pericardial fluid cytology ___ (effusion_cytology)

# Pretreatment evaluation, stage IIIB (T4, N2) and stage IIIC (T4, N3)

- Biomarker testing including EGFR
- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive FDG-PET/CT scan findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If FDG-PET/CT scan is positive in the mediastinum, lymph node status needs pathologic confirmation
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast
- Pathologic confirmation of N2–3 disease by either
    - Mediastinoscopy
    - Supraclavicular lymph node biopsy
    - Thoracoscopy
    - Needle biopsy
    - Mediastinotomy
    - EUS biopsy
    - EBUS biopsy

# Pretreatment evaluation, stage IVA, M1a pleural or pericardial effusion

- FDG-PET/CT scan, if not previously done
    - Performed skull base to mid-thigh
    - Positive FDG-PET/CT scan findings for mediastinal nodal or distant disease need pathologic or other radiologic confirmation
    - If FDG-PET/CT scan is positive in the mediastinum, lymph node status needs pathologic confirmation
- Brain MRI with and without contrast
    - If MRI is not possible, CT of head with contrast
- Biomarker testing (NSCL-19)
- Thoracentesis or pericardiocentesis
    - Add thoracoscopy if thoracentesis is indeterminate
    - Most pleural (pericardial) effusions with lung cancer are a result of the tumor
    - In a few patients, multiple microscopic examinations of pleural (pericardial) fluid are negative for tumor, and fluid is non-bloody and not an exudate
    - If these elements and clinical judgment dictate that the effusion is not related to the tumor, the effusion should be excluded as a staging descriptor

# Initial treatment, stage IIIB (T4, N2) and stage IIIC (T4, N3)

- Contralateral mediastinal node negative
    - Ipsilateral mediastinal node negative (T4, N0–1), Treatment for Stage IIIA (NSCL-7)
    - Ipsilateral mediastinal node positive (T4, N2), definitive concurrent chemoradiation (category 1)
- Contralateral mediastinal node positive (T4, N3)
    - Definitive concurrent chemoradiation (category 1)
- Definitive concurrent chemoradiation
    - Principles of Radiation Therapy (NSCL-C)
    - Concurrent Chemoradiation Regimens (NSCL-F)
- After definitive concurrent chemoradiation
    - Durvalumab, if no EGFR exon 19 deletion or L858R mutation (category 1)
    - Or osimertinib, if EGFR exon 19 deletion or L858R mutation (category 1)
    - Concurrent Chemoradiation Regimens (NSCL-F)
    - For patients who have received sequential chemoradiation, durvalumab can be considered as consolidation immunotherapy or, if EGFR exon 19 deletion or L858R mutation, osimertinib is recommended
- Metastatic disease found on evaluation
    - Treatment for metastasis limited sites (NSCL-15) or distant disease (NSCL-18)

# Initial treatment, stage IVA, M1a pleural or pericardial effusion

- Effusion negative for tumor
    - Treatment according to TNM stage
- Effusion positive for tumor
    - Local therapy if necessary (eg, pleurodesis, ambulatory small catheter drainage, pericardial window)
    - Plus treatment for stage IV disease, solitary site or distant disease (NSCL-19)

# Next

- Ipsilateral mediastinal node negative (T4, N0–1), go to Treatment for Stage IIIA (NSCL-7)
- After definitive concurrent chemoradiation and consolidation, go to Surveillance (NSCL-17)
- Metastatic disease, limited sites, go to NSCL-15
- Metastatic disease, distant, go to NSCL-18
- Effusion positive for tumor, go to Advanced or metastatic disease (NSCL-19)
