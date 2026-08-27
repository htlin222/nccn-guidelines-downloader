+++
id           = "cervical/CERV-13"
gid          = "cervical"
ref          = "CERV-13"
page         = 24
title        = "Workup and primary/adjuvant treatment of small cell neuroendocrine carcinoma of the cervix"
nccn_version = "2.2026"
nccn_date    = "11/10/25"
generated    = "2026-08-27"
see_also     = ["CERV-A", "CERV-B", "CERV-C", "CERV-D", "CERV-F", "CERV-10", "CERV-14"]

[facets]
disease   = "cervical"
histology = ["small-cell", "neuroendocrine"]
stage     = ["I", "II", "III", "IV"]
timepoint = ["workup", "primary-treatment", "neoadjuvant", "adjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "disease_extent"
type = "enum"
options = ["confined to the cervix", "locally advanced", "metastatic"]
[[variables]]
name = "primary_surgery_suitable"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "hysterectomy_done"
type = "enum"
options = ["not applicable", "done", "not done"]
+++

# Source

- NCCN Cervical Cancer v2.2026, CERV-13, p24
- Applies to small cell neuroendocrine carcinoma of the cervix (NECC)
- Histology confirmed by Principles of Pathology (CERV-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Small cell neuroendocrine carcinoma of the cervix (NECC), Principles of Pathology (CERV-A)
- Stage ___ (stage)
- Tumor size ___ (tumor_size)
- Disease extent ___ (disease_extent)
    - Disease confined to the cervix, Stage IA1–1B2 (tumor ≤4 cm) or Stage IB3 (tumor >4 cm)
    - Locally advanced disease (Stage IIA–IVA)
    - Metastatic disease (Stage IVB)
- Suitable for primary surgery ___ (primary_surgery_suitable)
- Radical hysterectomy ___ (hysterectomy_done)

# Primary workup

- Additional imaging, Principles of Imaging (CERV-B [3 of 4])
    - Precedes disease confined to the cervix, locally advanced disease, and metastatic disease alike

# Disease confined to the cervix, Stage IA1–1B2 (tumor ≤4 cm)

- Radical hysterectomy, Principles of Evaluation and Surgical Staging (CERV-C)
    - + SLN mapping or pelvic lymphadenectomy
    - Preferred if suitable for primary surgery
    - ± para-aortic lymph node sampling
    - Adjuvant treatment after this arm
        - Chemotherapy (Cisplatin/Etoposide or Carboplatin/Etoposide), Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
        - or Chemoradiation, Principles of Radiation Therapy (CERV-D)
            - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin (or carboplatin if cisplatin intolerant) + etoposide
            - The first two cycles of chemotherapy can be given concurrently with RT (on Days 1 and 22)
            - The subsequent two cycles are given after RT
        - Then surveillance (CERV-10)
- or Chemoradiation (CERV-D) + brachytherapy (CERV-D)
    - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin (or carboplatin if cisplatin intolerant) + etoposide
    - The first two cycles of chemotherapy can be given concurrently with RT (on Days 1 and 22)
    - The subsequent two cycles are given after RT
    - Adjuvant treatment after this arm
        - Consider additional systemic therapy (CERV-F 2 of 4)
        - Then surveillance (CERV-10)

# Disease confined to the cervix, Stage IB3 (tumor >4 cm)

- Chemoradiation (CERV-D) + brachytherapy (CERV-D), preferred
    - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin (or carboplatin if cisplatin intolerant) + etoposide
    - The first two cycles of chemotherapy can be given concurrently with RT (on Days 1 and 22)
    - The subsequent two cycles are given after RT
    - Adjuvant treatment after this arm
        - Consider additional systemic therapy (CERV-F 2 of 4)
        - Then surveillance (CERV-10)
- or Neoadjuvant chemotherapy (Cisplatin/Etoposide or Carboplatin/Etoposide), Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
    - Then consider radical hysterectomy, Principles of Evaluation and Surgical Staging (CERV-C)
    - Radical hysterectomy done
        - Consider adjuvant RT (CERV-D) or Chemoradiation (CERV-D)
            - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin (or carboplatin if cisplatin intolerant) + etoposide
            - The first two cycles of chemotherapy can be given concurrently with RT (on Days 1 and 22)
            - The subsequent two cycles are given after RT
        - Then consider additional systemic therapy (CERV-F 2 of 4)
        - Then surveillance (CERV-10)
    - Radical hysterectomy not done
        - Chemoradiation (CERV-D) + brachytherapy (CERV-D), preferred
            - Concurrent platinum-containing chemotherapy with EBRT utilizes cisplatin (or carboplatin if cisplatin intolerant) + etoposide
            - The first two cycles of chemotherapy can be given concurrently with RT (on Days 1 and 22)
            - The subsequent two cycles are given after RT
        - Then consider additional systemic therapy (CERV-F 2 of 4)
        - Then surveillance (CERV-10)

# Locally advanced disease (Stage IIA–IVA)

- Go to CERV-14

# Metastatic disease (Stage IVB)

- Systemic therapy (preferred), Systemic Therapy for Cervical Cancer (CERV-F 2 of 4)
- or Best supportive care (See NCCN Guidelines for Palliative Care)

# Next

- Disease confined to the cervix, after adjuvant treatment, go to surveillance (CERV-10)
- Locally advanced disease (Stage IIA–IVA), go to CERV-14
- Metastatic disease (Stage IVB), systemic therapy (CERV-F 2 of 4) or best supportive care
