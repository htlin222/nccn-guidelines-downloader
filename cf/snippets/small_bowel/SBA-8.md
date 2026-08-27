+++
id           = "small_bowel/SBA-8"
gid          = "small_bowel"
ref          = "SBA-8"
page         = 14
title        = "Workup of metastatic small bowel adenocarcinoma and of serial biomarker elevation"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-4", "SBA-6", "SBA-7"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
stage     = ["IV", "recurrent"]
biomarker = ["kras", "nras", "braf", "erbb2", "msi-h", "pole", "pold1", "ret", "ntrk", "tmb-high"]
timepoint = ["workup", "metastatic", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["metastatic adenocarcinoma", "serial biomarker elevation"]
[[variables]]
name = "ca19_9"
type = "text"
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "mmr_status"
type = "text"
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-8, p14
- Applies to metastatic disease and/or recurrence
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Presentation ___ (presentation)
- CA 19-9 ___ (ca19_9) / CEA ___ (cea)
- MMR or MSI status ___ (mmr_status)

# Workup of metastatic adenocarcinoma

- Potentially resectable visceral or peritoneal metastases are extremely rare for SBA
    - See Discussion for information on metastasectomy and cytoreductive surgery/intraperitoneal chemotherapy, which may be considered for select patients
- Chest/abdomen/pelvis CT
    - Principles of Imaging and Endoscopy (SBA-A)
- CBC
- Chemistry profile
- CA 19-9
- CEA
- Biomarker testing, performed as rapidly as possible following diagnosis, including
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed
    - RAS mutations
    - BRAF V600E mutation
    - HER2 (ERBB2) overexpression/amplification
    - MMR or MSI status, if not previously done
    - Testing should be conducted as part of multigene panel testing (MGPT), which would identify rare and actionable mutations and gene fusions
        - POLE/POLD1
        - RET
        - NTRK 1/2/3
        - Tumor mutational burden (TMB)

# Workup of serial biomarker elevation

- Physical examination
- Endoscopic evaluation(s)
- Chest/abdomen/pelvis CT with contrast

# Next

- Metastatic adenocarcinoma, see Principles of Systemic Therapy (SBA-D)
- Serial biomarker elevation with negative evaluation
    - Consider FDG-PET/CT
    - Reevaluate biomarker and CT with contrast in 3 months
- Serial biomarker elevation with positive evaluation, see workup of metastatic adenocarcinoma above
