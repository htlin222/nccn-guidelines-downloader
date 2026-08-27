+++
id           = "gastric/GAST-7"
gid          = "gastric"
ref          = "GAST-7"
page         = 18
title        = "Follow-up/surveillance schedule after treatment, by pathologic stage and modality"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-4", "GAST-8", "GAST-H", "GAST-I"]

[facets]
disease   = "gastric"
histology = "any"
stage     = ["0", "I", "II", "III"]
timepoint = "surveillance"
intent    = "curative"

[[variables]]
name = "stage_group"
type = "enum"
options = ["Tis", "p stage I", "p stage II/III", "yp stage I-III"]
[[variables]]
name = "treatment"
type = "enum"
options = ["ER", "surgical resection", "neoadjuvant +/- adjuvant therapy"]
[[variables]]
name = "gastrectomy"
type = "enum"
options = ["total", "subtotal", "partial", "none"]
[[variables]]
name = "time_since_treatment"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-7, p18
- Applies to follow-up/surveillance after treatment
- Principles of Surveillance (GAST-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (stage_group)
- Treated by ___ (treatment)
- Extent of gastrectomy ___ (gastrectomy)
- Time since treatment ___ (time_since_treatment)
- Symptoms and/or concern for recurrence ___ (symptoms)

# Tis, successfully treated by ER

- H&P
    - Every 3–6 months for 1–2 years
    - Then every 6–12 months for 3–5 years
- CBC and chemistry profile as clinically indicated
- Upper gastrointestinal (GI) endoscopy (EGD)
    - Every 6 months for 1 year, then annually for 3 years
    - For total gastrectomy for curative intent, surveillance follows these recommendations except for endoscopy
        - Endoscopy as clinically indicated for routine surveillance for total gastrectomy unless patients are symptomatic
- Routine imaging (CT chest/abdomen/pelvis with oral and IV contrast) as clinically indicated based on symptoms and concern for recurrence

# p stage I (T1a, T1b, N0) treated by surgical resection or by ER

- H&P
    - Every 3–6 months for 1–2 years
    - Then every 6–12 months for 3–5 years
- CBC and chemistry profile as clinically indicated
- EGD
    - For patients treated by ER, every 6 months for 1 year, then annually for up to 5 years
        - Thereafter, as needed based on symptoms and/or radiographic findings
    - For patients treated by surgical resection, as clinically indicated
    - For total gastrectomy for curative intent, surveillance follows these recommendations except for endoscopy
        - Endoscopy as clinically indicated for routine surveillance for total gastrectomy unless patients are symptomatic
- CT chest/abdomen/pelvis with oral and IV contrast as clinically indicated
    - CT scan preferred; for patients who cannot undergo CT scan, alternative imaging such as PET/CT or MRI as clinically indicated
    - After 5 years, additional follow-up may be considered based on risk factors and comorbidities
- Monitor for nutritional deficiency in patients who have undergone surgical resection (especially after total gastrectomy) and treat as indicated
    - Establish follow-up with appropriate practitioners or specialists for lifelong monitoring and management of potential nutritional sequelae of gastrectomy
    - May include, but is not limited to, vitamin B12, iron, zinc, calcium, and vitamin D deficiencies
    - Consider routine supplementation with a daily multivitamin/mineral complex, vitamin B12, calcium, and vitamin D
    - See Principles of Survivorship (GAST-I 2 of 4)

# p stage II/III or yp stage I–III, treated with neoadjuvant ± adjuvant therapy

- H&P
    - Every 3–6 months for 1–2 years
    - Then every 6–12 months for 3–5 years
- CBC and chemistry profile as clinically indicated
- EGD
    - For patients who had partial or subtotal gastrectomy, as clinically indicated
    - For total gastrectomy for curative intent, surveillance follows these recommendations except for endoscopy
        - Endoscopy as clinically indicated for routine surveillance for total gastrectomy unless patients are symptomatic
- CT chest/abdomen/pelvis with oral and IV contrast
    - Every 6 months for the first 2 years, then annually for up to 5 years
    - CT scan preferred; for patients who cannot undergo CT scan, alternative imaging such as PET/CT or MRI as clinically indicated
    - After 5 years, additional follow-up may be considered based on risk factors and comorbidities
- Monitor for nutritional deficiency in patients who have undergone surgical resection (especially after total gastrectomy) and treat as indicated
    - Establish follow-up with appropriate practitioners or specialists for lifelong monitoring and management of potential nutritional sequelae of gastrectomy
    - May include, but is not limited to, vitamin B12, iron, zinc, calcium, and vitamin D deficiencies
    - Consider routine supplementation with a daily multivitamin/mineral complex, vitamin B12, calcium, and vitamin D
    - See Principles of Survivorship (GAST-I 2 of 4)

# Next

- Recurrence, go to GAST-8
- No recurrence, survivorship, Principles of Survivorship (GAST-I)
