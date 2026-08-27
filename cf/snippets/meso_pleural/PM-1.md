+++
id           = "meso_pleural/PM-1"
gid          = "meso_pleural"
ref          = "PM-1"
page         = 5
title        = "Initial evaluation of recurrent pleural effusion and/or pleural thickening"
nccn_version = "3.2026"
nccn_date    = "07/08/26"
generated    = "2026-08-27"
see_also     = ["PM-2", "PM-A"]

[facets]
disease   = "meso_pleural"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "presentation"
type = "enum"
options = ["recurrent-pleural-effusion", "pleural-thickening", "both"]
[[variables]]
name = "biopsy_route"
type = "enum"
options = ["thoracoscopic", "abrams-needle", "ct-guided-core", "open"]
[[variables]]
name = "cytology"
type = "text"
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Mesothelioma: Pleural v3.2026, PM-1, p5
- Applies to recurrent pleural effusion and/or pleural thickening
- There are no data to suggest that screening improves survival
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) hemithorax
- Presentation ___ (presentation)
    - Recurrent pleural effusion
    - Pleural thickening

# Initial evaluation

- Chest CT with contrast
- Thoracentesis for cytologic assessment
    - Cytology result ___ (cytology)
- Pleural biopsy, route ___ (biopsy_route)
    - Thoracoscopic biopsy, preferred
    - Abrams needle
    - CT-guided core biopsy
    - Open biopsy
    - Minimize number of ports
- Soluble mesothelin-related peptide (SMRP), optional
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Diagnosis

- Pleural mesothelioma confirmed ___ (pathology)
    - Confirmation follows Principles of Pathologic Review (PM-A)
- Management by a multidisciplinary team with experience in pleural mesothelioma recommended

# Next

- Pleural mesothelioma confirmed, go to Pretreatment Evaluation (PM-2)
