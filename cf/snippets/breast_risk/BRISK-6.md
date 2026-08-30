+++
id           = "breast_risk/BRISK-6"
gid          = "breast_risk"
ref          = "BRISK-6"
page         = 11
title        = "Choice of risk-reducing agent by menopausal status, and the surveillance that goes with it"
nccn_version = "1.2026"
nccn_date    = "08/29/25"
generated    = "2026-08-30"
see_also     = ["BRISK-B", "BRISK-8"]

[facets]
disease   = "breast_risk"
timepoint = ["risk-reduction", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "uterus"
type = "enum"
options = ["intact", "absent"]
[[variables]]
name = "bone_density"
type = "text"
[[variables]]
name = "genetic_predisposition_or_thoracic_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "agent"
type = "enum"
options = ["clinical trial", "tamoxifen", "raloxifene", "aromatase inhibitor", "none"]
+++

# Source

- NCCN Breast Cancer Risk Reduction v1.2026, BRISK-6, p11
- Risk-reducing agent and surveillance
- See BRISK-B for risk reduction agents and details on dosing
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Menopausal status: ___ (menopausal_status)
- Uterus: ___ (uterus)
- Baseline bone density: ___ (bone_density)
- Known genetic predisposition or prior thoracic RT: ___ (genetic_predisposition_or_thoracic_rt)
- Risk-reducing agent selected: ___ (agent)

# Determining menopausal status

- Clinical trials in breast cancer have utilized a variety of definitions of menopause
- Menopause is generally the permanent cessation of menses
    - As the term is utilized in breast cancer management, it includes a profound and permanent decrease in ovarian estrogen synthesis
- Reasonable criteria for determining menopause include any of the following
    - Prior bilateral oophorectomy
    - Age 60 years or older
    - Age under 60 years and amenorrhea for 12 or more months in the absence of chemotherapy, tamoxifen, or toremifene
    - Ovarian suppression and follicle-stimulating hormone (FSH) and estradiol in the postmenopausal range
- If taking tamoxifen or toremifene and age under 60 years, reasonable criteria include FSH and plasma estradiol level in postmenopausal ranges

# Risk-reducing agent, premenopausal

- Clinical trial
    - Individuals in a clinical trial should have a baseline exam, follow-up, and monitoring as per protocol
- or Tamoxifen (category 1)
    - See BRISK-B for risk reduction agents and details on dosing
- For patients with a known genetic predisposition or prior thoracic RT, the recommendation for the use of risk-reducing agents is category 2A

# Risk-reducing agent, postmenopausal

- Factors guiding choice of risk-reducing endocrine agent
    - Low baseline bone density, choose raloxifene over aromatase inhibitors
- Clinical trial
    - Individuals in a clinical trial should have a baseline exam, follow-up, and monitoring as per protocol
- or Tamoxifen (category 1)
    - See BRISK-B for risk reduction agents and details on dosing
- or Raloxifene (category 1)
    - See BRISK-B for risk reduction agents and details on dosing
- or Aromatase inhibitors (category 1)
    - See BRISK-B for risk reduction agents and details on dosing
- For patients with a known genetic predisposition or prior thoracic RT, the recommendation for the use of risk-reducing agents is category 2A

# Surveillance

- Surveillance according to NCCN Guidelines for Breast Cancer Screening and Diagnosis, for those at increased risk for breast cancer
- Routine age-appropriate gynecologic screening, for individuals with intact uterus on tamoxifen
    - Routine endometrial ultrasound and biopsy are not recommended for individuals in the absence of other symptoms
- Ophthalmology exam if cataracts or vision problems
- Monitor bone density while on aromatase inhibitors

# Next

- For management while on endocrine agent, see BRISK-8
