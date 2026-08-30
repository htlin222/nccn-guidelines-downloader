+++
id           = "ped_sts/PRMS-6"
gid          = "ped_sts"
ref          = "PRMS-6"
page         = 9
title        = "Local control of a mass of the vulva, vagina, or uterus fundus/cervix"
nccn_version = "1.2026"
nccn_date    = "02/17/2026"
generated    = "2026-08-28"
see_also     = ["PRMS-D", "PRMS-E", "PRMS-F", "PRMS-10"]

[facets]
disease    = "ped_sts"
timepoint  = "primary-treatment"
intent     = "curative"
population = "fertility"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "enum"
options = ["vulva", "vagina", "uterus-fundus", "cervix"]
[[variables]]
name = "margins"
type = "enum"
options = ["negative", "positive", "unknown"]
[[variables]]
name = "clinical_group"
type = "text"
[[variables]]
name = "foxo1"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "fertility_wish"
type = "text"
+++

# Source

- NCCN Pediatric Soft Tissue Sarcoma v1.2026, PRMS-6, p9
- Applies to a mass of the vulva, vagina, or uterus fundus/cervix
- Initial radical surgery is not indicated for some genitourinary RMS sites (ie, vulva, vagina)
    - Conservative surgical intervention for vaginal RMS, with primary chemotherapy and RT (external beam RT [EBRT] or brachytherapy) for Group II or III disease, results in excellent 5-year survival rates
    - See Principles of Surgery
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Site of mass: ___ (site)
- Margin status: ___ (margins)
- Clinical Group: ___ (clinical_group)
- FOXO1 gene fusion status: ___ (foxo1)
- Desire for future fertility: ___ (fertility_wish)

# Initial local control decision

- Attempt at R0 excision if feasible without impact to form or function (PRMS-D)
- If R0 excision is not feasible without impact to form or function
    - Vulvar or transvaginal biopsy (PRMS-E)
        - Principles of Pathologic Assessment
        - Adequate biopsy is required and should provide sufficient tissue to establish the diagnosis and for further molecular genetic analysis
        - Definitive local control can often be achieved by chemotherapy alone
- For a mass of the uterus fundus/cervix
    - Initial radical hysterectomy may be considered for patients who do not desire future fertility, after shared decision-making with their treating team
    - For patients who desire future fertility, recommend biopsy followed by local control with attempts at preserving fertility
    - See Principles of Surgery and Principles of Survivorship

# After attempted R0 excision

- Negative margins
    - Clinical Group I
- Positive or unknown margins
    - Primary re-excision if R0 resection can be accomplished without significant morbidity (PRMS-D)
        - If there is suspicion or knowledge of residual tumor after the initial resection, PRE should be employed unless this would result in loss of form or function
    - Negative margins after re-excision, Clinical Group I
    - Clinical Group II (R1) or III (R2) if margins cannot be cleared surgically

# Next

- Clinical Group I, FOXO1 gene fusion-positive
    - Systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F)
- Clinical Group I, FOXO1 gene fusion-negative
    - Systemic therapy (as indicated for risk group) (PRMS-10)
- Clinical Group II (R1) or III (R2), including after vulvar or transvaginal biopsy when R0 excision was not feasible
    - Systemic therapy (as indicated for risk group) (PRMS-10) and RT (PRMS-F) and Evaluate for DPE (PRMS-D)
