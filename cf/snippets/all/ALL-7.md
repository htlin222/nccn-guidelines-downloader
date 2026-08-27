+++
id           = "all/ALL-7"
gid          = "all"
ref          = "ALL-7"
page         = 19
title        = "Surveillance after completion of ALL therapy, and what to check at each visit"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-F", "ALL-1", "ALL-3", "ALL-8"]

[facets]
disease   = "all"
histology = "lymphoblastic"
biomarker = ["ph-positive", "ph-negative"]
timepoint = ["surveillance", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subtype"
type = "enum"
options = ["Ph+ ALL", "Ph-negative ALL"]
[[variables]]
name = "therapy_completed"
type = "text"
[[variables]]
name = "surveillance_year"
type = "number"
[[variables]]
name = "lfts"
type = "text"
[[variables]]
name = "last_marrow"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-7, p19
- Surveillance recommendations apply after completion of chemotherapy, including maintenance
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ALL subtype ___ (subtype)
- Chemotherapy, including maintenance, completed ___ (therapy_completed)
- Currently in surveillance year ___ (surveillance_year)
- LFTs ___ (lfts)
- Last bone marrow aspirate ___ (last_marrow)
- Signs or symptoms suggesting relapse ___ (symptoms)

# Year 1, every 1-3 months

- Physical examination
- CBC with differential
- LFTs until normal

# Year 2, every 3-6 months

- Physical examination
- CBC with differential

# Year 3 and beyond, every 6-12 months or as indicated

- Physical examination
- CBC with differential

# Other general measures

- Bone marrow aspirate can be considered as clinically indicated, at a frequency of up to 3 to 6 months for at least 5 years
    - There is insufficient evidence to guide MRD monitoring for patients with Ph-negative disease following completion of maintenance therapy
    - The approval of blinatumomab, and potentially future therapies for the MRD-positive relapse, may warrant testing in this regard
    - Alternatively, for patients showing evidence of symptomatic relapse, repeat the diagnostic workup as per ALL-1 and ALL-3 as applicable
    - If bone marrow aspirate is done, flow cytometry with additional studies that may include:
        - conventional chromosome analysis
        - FISH
        - molecular testing
        - MRD assessment (ALL-F)
- Periodic BCR::ABL1 transcript-specific quantification, for Ph+ ALL
- Refer to survivorship recommendations in the NCCN Guidelines for Survivorship
- Refer to the ALL Long-term Follow-up Guidelines from the Children's Oncology Group (COG): http://www.survivorshipguidelines.org

# Next

- Relapsed or refractory disease, go to ALL-8
