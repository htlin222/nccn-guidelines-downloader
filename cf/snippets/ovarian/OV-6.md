+++
id           = "ovarian/OV-6"
gid          = "ovarian"
ref          = "OV-6"
page         = 12
title        = "Monitoring/follow-up off treatment, and workup of recurrent disease"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-1", "OV-7", "OV-A", "OV-C", "OV-D"]

[facets]
disease   = "ovarian"
stage     = ["I", "II", "III", "IV", "recurrent"]
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["I", "II", "III", "IV"]
[[variables]]
name = "interval_since_primary"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "previous_chemo"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "clinical_relapse"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "genetic_eval_done"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "biomarker_testing_done"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Epithelial Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer v4.2026, OV-6, p12
- Monitoring/follow-up applies to stage I, II, III, and IV after primary treatment, for patients not receiving treatment
- Recurrent disease workup applies to rising CA-125 or clinical relapse, with or without previous chemotherapy
- Principles of Imaging: OV-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, stage ___ (stage) after primary treatment
- Interval since completion of primary treatment ___ (interval_since_primary)
- CA-125 ___ (ca125), tracked only if initially elevated
- Previous chemotherapy ___ (previous_chemo)
- Clinical relapse ___ (clinical_relapse)
- Genetic risk evaluation previously done ___ (genetic_eval_done)
- Tumor biomarker testing previously done ___ (biomarker_testing_done)

# Monitoring/follow-up for patients not receiving treatment

- Visits every 2–4 mo for 2 y, then 3–6 mo for 3 y, then annually after 5 y
- Physical exam, including pelvis exam as clinically indicated
- Imaging studies as clinically indicated, see Principles of Imaging (OV-A)
- CBC and chemistry profile as indicated
- CA-125 or other tumor markers, if initially elevated
    - There are data regarding the utility of CA-125 for monitoring of ovarian cancer after completion of primary therapy
    - See the Society of Gynecologic Oncology (SGO) position statement and Discussion
- Refer for genetic risk evaluation, if not previously done
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- Long-term wellness care, see NCCN Guidelines for Survivorship

# Recurrent disease, applies to every pattern below

- Consider symptom management and best supportive care, see NCCN Guidelines for Palliative Care
- Refer for palliative care assessment, if appropriate
- Imaging studies as clinically indicated, see Principles of Imaging (OV-A)
    - Surveillance imaging may be indicated when tumor markers are considered unreliable
    - Surveillance imaging may be indicated when the physical exam is unreliable
    - Surveillance imaging may be indicated when there is a high risk of recurrence
- Tumor biomarker testing, if not previously done
    - Validated biomarker testing should be performed in a Clinical Laboratory Improvement Amendments (CLIA)-approved facility
    - Use the most recent available tumor tissue
    - Include tests to identify potential benefit from targeted therapeutics with tumor-specific or tumor-agnostic benefit, if prior testing did not include these markers
        - HER2 status, by immunohistochemistry (IHC)
        - PD-L1, IHC, combined positive score (CPS)
        - BRCA1/2
        - HRD status
        - Microsatellite instability (MSI)
        - Mismatch repair (MMR)
        - Tumor mutational burden (TMB)
        - BRAF
        - KRAS
        - FRα (FOLR1)
        - RET
        - NTRK1/2/3
    - Multigene panel testing (MGPT) may be particularly important in LCOC with limited approved therapeutic options (OV-C)

# Next

- Rising CA-125, no previous chemotherapy, go to Primary Treatment (OV-1)
- Clinical relapse, no previous chemotherapy, go to Primary Treatment (OV-1)
- Clinical relapse, previous chemotherapy, go to Therapy for Persistent Disease or Recurrence (OV-7)
- Serially rising CA-125, previous chemotherapy, one of
    - Delay treatment until clinical relapse
    - Immediate treatment for recurrent disease (category 2B)
        - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
