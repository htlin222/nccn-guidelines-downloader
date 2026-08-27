+++
id           = "cervical/CERV-1"
gid          = "cervical"
ref          = "CERV-1"
page         = 10
title        = "Workup and clinical stage assignment for newly diagnosed cervical cancer"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-A", "CERV-B", "ST-1", "CERV-2", "CERV-3", "CERV-5", "CERV-13"]

[facets]
disease   = "cervical"
histology = ["squamous", "adenocarcinoma", "small-cell", "neuroendocrine"]
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "staging"]
population = "fertility"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "fertility_sparing"
type = "enum"
options = ["considering", "not considering"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-1, p10
- Applies to workup and clinical stage assignment of cervical cancer
- All staging in these guidelines is based on updated 2018 FIGO staging (ST-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (histology)
- Clinical stage ___ (clinical_stage)
- Fertility sparing: ___ (fertility_sparing)

# Workup

- History and physical (H&P)
- Complete blood count (CBC), including platelets
- Cervical biopsy, pathologic review
    - Principles of Pathology (CERV-A)
- Cone biopsy as indicated
    - See Discussion for indications for cone biopsy
- Liver function test (LFT) / renal function studies
- Imaging
    - Principles of Imaging (CERV-B)
- Smoking cessation and counseling intervention, if indicated
    - See NCCN Guidelines for Smoking Cessation
- Consider HIV testing
    - Especially in younger patients
    - Patients with cervical cancer and HIV should be referred to an HIV specialist
    - Patients with HIV should be treated for cervical cancer as per these guidelines
    - Modifications to cancer treatment should not be made solely on the basis of HIV status
    - See NCCN Guidelines for Cancer in People with HIV
- Consider examination under anesthesia (EUA) cystoscopy/proctoscopy
    - Based on symptoms, barrel-shaped lesions, or anterior vaginal involvement
    - For suspicion of bladder/bowel involvement, cystoscopy/proctoscopy with biopsy is required
- Consider options for fertility sparing, or referral to reproductive endocrinology and infertility (REI) specialist
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Next

- Squamous cell cancer, adenocarcinoma, or adenosquamous carcinoma
    - Stage IA1
        - Fertility sparing, go to Primary Treatment (CERV-2)
        - Non-fertility sparing, go to Primary Treatment (CERV-3) and (CERV-4)
    - Stage IA2
        - Fertility sparing, go to Primary Treatment (CERV-2)
        - Non-fertility sparing, go to Primary Treatment (CERV-4) and (CERV-5)
    - Stage IB1, Stage IB2, Stage IIA1, go to Primary Treatment (CERV-5)
    - Stage IB3, Stage IIA2, go to Primary Treatment (CERV-5)
    - Stage IIB, Stage III, Stage IVA, go to Primary Treatment (CERV-7)
    - Stage IVB, go to Treatment (CERV-12)
- Small cell neuroendocrine carcinoma of the cervix (NECC), go to Primary Workup (CERV-13)
- Incidental finding of invasive cancer after simple hysterectomy, go to Treatment (CERV-8)
