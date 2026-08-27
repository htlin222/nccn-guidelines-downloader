+++
id           = "gtn/HM-1"
gid          = "gtn"
ref          = "HM-1"
page         = 7
title        = "Hydatidiform mole workup, initial treatment, monitoring, and hCG findings"
nccn_version = "2.2026"
nccn_date    = "11/21/25"
generated    = "2026-08-28"
see_also     = ["HM-A", "HM-2", "GTN-A", "DIS-A"]

[facets]
disease   = "gtn"
timepoint = ["workup", "primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mole_type"
type = "enum"
options = ["complete", "partial"]
[[variables]]
name = "hcg"
type = "text"
[[variables]]
name = "rh"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "days_to_normalization"
type = "number"
+++

# Source

- NCCN Guidelines Version 2.2026, Hydatidiform Mole, HM-1, p7
- Applies to complete or partial hydatidiform mole
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (mole_type) hydatidiform mole
- hCG ___ (hcg) mIU/mL
- Rh ___ (rh)

# Workup

- History and physical (H&P)
- Imaging, see Principles of Imaging (HM-A)
- Quantitative human chorionic gonadotropin (hCG) assay
    - If hCG is elevated with no evidence of disease on imaging, consider possibility of luteinizing hormone (LH) crossover, pituitary hCG, or phantom hCG
    - Consult with laboratory medicine/pathology to test for phantom hCG with serial dilution study or comparison of serum to urine hCG
- Complete blood count (CBC) differential and platelet count
- Liver/renal/thyroid function tests/chemistry profile
- Blood type and screen
    - Administer Rho(D) immune globulin if Rh negative
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Initial treatment

- Suction dilation and curettage (D&C), preferably under ultrasound guidance
    - Use largest curette feasible
    - Sharp curettage after suction
    - Use uterotonic drugs after initiating evacuation of uterus
    - Consider adding tranexamic acid (TXA) if necessary
    - Oxytocin receptors may be absent
    - Prophylactic chemotherapy with methotrexate or dactinomycin may be considered at the time of evacuation, in patients at high risk for post-molar GTN, when hCG follow-up is unavailable or unreliable
        - Age >40 years
        - hCG >100,000 mIU/mL
        - Excessive uterine enlargement
        - Theca lutein cysts >6 cm
- or Hysterectomy with salpingectomy
    - May be considered as initial treatment for hydatidiform mole in patients who do not wish to preserve fertility

# Monitoring

- A formal follow-up program allows for early detection of GTN and limits exposure to combination chemotherapy
- See Principles of Pathology (GTN-A)
- H&P 1 month after initial treatment
- hCG assay every 1–2 weeks until normalized
- Systemic hormonal contraception, oral contraceptives preferred
    - Oral contraceptives are preferred over intrauterine devices (IUDs) because they suppress endogenous LH/follicle-stimulating hormone (FSH), which may interfere with hCG measurement at low levels

# Findings and additional evaluation

- Normal hCG levels for 3 consecutive assays
    - Partial hydatidiform mole (PHM): 1 additional hCG assay at least 1 month from final consecutively normal hCG assay
    - Complete hydatidiform mole: monthly hCG assay for 3–6 months
        - Time from D&C to hCG normalization ___ (days_to_normalization) days
        - If <56 days, consider 3 months
        - If ≥56 days, consider 6 months
- Persistent hCG elevation (plateau or rise)

# Next

- Persistent hCG elevation (plateau or rise), persistent post-molar gestational trophoblastic neoplasia (GTN), go to HM-2
