+++
id           = "cervical/CERV-9"
gid          = "cervical"
ref          = "CERV-9"
page         = 20
title        = "Treatment of an incidental invasive squamous or usual type adenocarcinoma found after simple total hysterectomy, stage IB1 (not meeting conservative surgery criteria)-IB2"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-8", "CERV-10", "CERV-5"]

[facets]
disease   = "cervical"
histology = ["squamous", "adenocarcinoma"]
stage     = "I"
timepoint = ["primary-treatment", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "enum"
options = ["squamous", "usual type adenocarcinoma"]
[[variables]]
name = "pathologic_stage"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative margins", "positive margins"]
[[variables]]
name = "gog_sedlis"
type = "enum"
options = ["not met", "met"]
[[variables]]
name = "imaging_result"
type = "enum"
options = ["negative for metastases", "positive for distant metastases"]
[[variables]]
name = "cisplatin_tolerance"
type = "enum"
options = ["tolerant", "intolerant"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-9, p20
- Incidental finding of invasive squamous or usual type adenocarcinoma after simple total hysterectomy
- Applies to stage IB1 (not meeting conservative surgery criteria)-IB2
    - AND negative margins on hysterectomy
    - AND GOG/Sedlis criteria not met, see GOG/Sedlis Criteria (CERV-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Invasive carcinoma found incidentally after simple total hysterectomy
- Histology ___ (histology)
- Pathologic stage ___ (pathologic_stage)
- Hysterectomy margins ___ (margin_status)
- GOG/Sedlis criteria ___ (gog_sedlis), see GOG/Sedlis Criteria (CERV-E)
- Imaging ___ (imaging_result), per Principles of Imaging (CERV-B)
- Cisplatin ___ (cisplatin_tolerance)

# Imaging negative for metastases, treatment

- Pelvic EBRT + brachytherapy
    - Per Principles of Radiation Therapy (CERV-D)
    - With or without concurrent platinum-containing chemotherapy
        - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
- or Complete parametrectomy/upper vaginectomy + pelvic lymphadenectomy
    - With or without para-aortic lymph node sampling (category 2B for para-aortic lymph node sampling)

# Findings after complete parametrectomy/upper vaginectomy + pelvic lymphadenectomy

- Negative nodes; no residual disease
    - No further treatment on this page, go to Surveillance (CERV-10)
- Positive nodes and/or positive surgical margin and/or positive parametrium
    - Pelvic EBRT, per Principles of Radiation Therapy (CERV-D)
        - Para-aortic lymph node EBRT if para-aortic lymph node positive
    - Plus concurrent platinum-containing chemotherapy (category 1)
        - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
    - With or without individualized brachytherapy, if positive vaginal margin
        - Per Principles of Radiation Therapy (CERV-D)

# Imaging positive for distant metastases

- Biopsy suspicious areas as indicated
- Biopsy negative
    - EBRT + concurrent platinum-containing chemotherapy + brachytherapy
        - EBRT and brachytherapy per Principles of Radiation Therapy (CERV-D)
        - Cisplatin as a single agent, or carboplatin if cisplatin intolerant
        - See Systemic Therapy for Cervical Cancer (CERV-F)
- Biopsy positive
    - Systemic therapy, see Systemic Therapy for Cervical Cancer (CERV-F)
    - With or without individualized EBRT, per Principles of Radiation Therapy (CERV-D)

# Next

- After pelvic EBRT + brachytherapy, go to Surveillance (CERV-10)
- After complete parametrectomy with negative nodes and no residual disease, go to Surveillance (CERV-10)
- After pelvic EBRT + concurrent chemotherapy for positive nodes, positive margin, or positive parametrium, go to Surveillance (CERV-10)
- After EBRT + concurrent chemotherapy + brachytherapy for biopsy-negative suspicious areas, go to Surveillance (CERV-10)
