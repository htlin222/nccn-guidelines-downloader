+++
id           = "cervical/CERV-7"
gid          = "cervical"
ref          = "CERV-7"
page         = 18
title        = "Primary treatment of clinical stage IIB-IVA cervical cancer"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-1", "CERV-B", "CERV-D", "CERV-F", "CERV-10"]

[facets]
disease   = "cervical"
stage     = ["II", "III", "IV"]
timepoint = ["primary-treatment", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "figo_stage"
type = "text"
[[variables]]
name = "distant_mets"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "para_aortic_nodes"
type = "enum"
options = ["involved", "not involved", "unknown"]
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-7, p18
- Applies to clinical stage IIB-IVA, primary treatment
- Principles of Imaging (CERV-B)
- Principles of Radiation Therapy (CERV-D)
- Systemic Therapy for Cervical Cancer (CERV-F)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Clinical stage ___ (figo_stage)
- Distant metastases on further radiologic workup: ___ (distant_mets)
- Para-aortic nodes by imaging or pathology: ___ (para_aortic_nodes)
- Cisplatin tolerance: ___ (cisplatin_tolerance)

# Staging workup for distant metastases

- Further radiologic workup for metastatic disease as clinically indicated (CERV-B)
- If positive for distant metastases, biopsy suspicious areas as indicated

# Negative for distant metastases

- EBRT (CERV-D)
    - Extended-field RT is recommended when para-aortic nodes are involved by imaging or confirmed on pathology
    - Extended-field RT may also be added in select patients with positive pelvic nodes such as common iliac metastasis
    - Induction chemotherapy (carboplatin/paclitaxel) followed by single-agent cisplatin (or carboplatin) and radiation given according to the INTERLACE protocol could be considered (CERV-F)
- Concurrent platinum-containing chemotherapy
    - Cisplatin as a single agent
    - Carboplatin if cisplatin intolerant
- Brachytherapy (CERV-D)
- With or without concurrent and maintenance pembrolizumab (CERV-F)
    - Cisplatin (or carboplatin)/RT and pembrolizumab for FIGO 2014 stage IIIA, IIIB, and IVA (category 1)
    - Cisplatin (or carboplatin)/RT and pembrolizumab for select FIGO 2018 stage III-IVA (category 2B)
    - Category 2B is for FIGO 2018 stage IIIC purely on nodal metastasis without concomitant tumor characteristics defined in 2014 FIGO stage IIIA-IIIB
    - If the FIGO 2018 staging of stage III overlaps with FIGO 2014 IIIA/IIIB staging, category 1 can be applied to cisplatin (or carboplatin) + pembrolizumab

# Biopsy positive for distant metastases

- Systemic therapy (CERV-F)
- With or without individualized RT (CERV-D)
    - Consider ablative therapy for 1-5 metastatic lesions (category 2B) if the primary has been controlled

# Next

- Go to Surveillance (CERV-10)
