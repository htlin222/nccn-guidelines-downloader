+++
id           = "ped_all/PEDALL-8"
gid          = "ped_all"
ref          = "PEDALL-8"
page         = 21
title        = "Surveillance after completion of therapy, testing for suspected relapse, and monitoring for late effects"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-I", "PEDALL-9", "PEDALL-10"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["bcr-abl", "any"]
timepoint = ["surveillance", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lineage"
type = "enum"
options = ["b-all", "t-all"]
[[variables]]
name = "therapy_completion_date"
type = "text"
[[variables]]
name = "time_since_completion"
type = "text"
[[variables]]
name = "testicular_exam_applicable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "lft_status"
type = "enum"
options = ["normal", "not yet normal"]
[[variables]]
name = "bcr_abl1_status"
type = "text"
[[variables]]
name = "cumulative_anthracycline_dose"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-8, p21
- Surveillance recommendations apply after completion of chemotherapy, including maintenance
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (lineage)
- Chemotherapy, including maintenance, completed ___ (therapy_completion_date)
- Time since completion of therapy ___ (time_since_completion)
- Testicular exam applicable ___ (testicular_exam_applicable)
- LFTs ___ (lft_status)
- BCR::ABL1 ___ (bcr_abl1_status)
- Cumulative anthracycline dose ___ (cumulative_anthracycline_dose)

# Surveillance schedule

- Year 1, every 1-4 months
    - Physical exam, including testicular exam where applicable
    - CBC with differential
    - LFTs until normal
- Year 2, every 2-6 months
    - Physical exam, including testicular exam where applicable
    - CBC with differential
- Year 3 and later, every 6-12 months or as indicated
    - Physical exam, including testicular exam where applicable
    - CBC with differential

# Procedures and molecular testing

- Bone marrow aspirate for suspected relapse
    - If bone marrow aspirate is done, flow cytometry with additional studies that may include
        - Comprehensive cytogenetics
        - FISH
        - Molecular testing
        - MRD testing
- Cerebrospinal fluid (CSF) for suspected relapse
- Consider periodic BCR::ABL1 transcript-specific quantification, for BCR::ABL1-positive ALL
- See Response Assessment (PEDALL-I) for definitions of relapse

# Monitoring for late effects

- Echocardiogram
    - Frequency based on cumulative anthracycline dose, or sooner as clinically indicated
- Neuropsychological testing as clinically indicated, given increased risk of neurotoxicity in ALL survivors
- Monitor for healthy weight and encourage healthy lifestyle choices, given increased risk of obesity in patients with a history of childhood ALL
- Refer to the ALL Long-Term Follow-up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers from the Children's Oncology Group (COG), http://www.survivorshipguidelines.org
- For psychosocial and behavioral considerations, see the NCCN Guidelines for Adolescent and Young Adult (AYA) Oncology

# Next

- Relapse, B-ALL, go to First Relapse Disease (PEDALL-9)
- Relapse, T-ALL, go to First Relapse Disease (PEDALL-10)
