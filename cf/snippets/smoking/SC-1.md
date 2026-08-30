+++
id           = "smoking/SC-1"
gid          = "smoking"
ref          = "SC-1"
page         = 12
title        = "Initial evaluation of patient smoking, and routing by smoking status"
nccn_version = "1.2026"
nccn_date    = "04/06/2026"
generated    = "2026-08-30"
see_also     = ["SC-2", "SC-4", "SC-A", "SC-B"]

[facets]
disease   = "smoking"
timepoint = "supportive"

[[variables]]
name = "ever_smoked_cigarettes"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "last_cigarette"
type = "text"
[[variables]]
name = "other_products"
type = "text"
[[variables]]
name = "smoking_status"
type = "enum"
options = ["smoked within last 30 days", "formerly smoked", "never smoked"]
+++

# Source

- NCCN Smoking Cessation v1.2026, SC-1, p12
- Evaluation and assessment of patient smoking, for all patients with cancer
- General Principles of the Smoking Cessation Guidelines
- These algorithms can be applied for any other tobacco or nicotine-containing product
- For lung cancer screening recommendations, see NCCN Guidelines for Lung Cancer Screening
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Initial evaluation may be completed by any member of the health care team
    - Physicians, nurses, medical assistants, health educators, pharmacists, tobacco treatment specialists, or other dedicated staff
- Have you ever smoked cigarettes? ___ (ever_smoked_cigarettes)
    - If yes, when was the last time you smoked a cigarette? ___ (last_cigarette)
- Have you ever, or do you currently, use other tobacco or nicotine-containing products? ___ (other_products)
    - eg, pipes, cigars, hookah, cigarillos, e-cigarettes/vaping, smokeless tobacco, nicotine pouches
    - Patients who use multiple tobacco- or nicotine-containing products may have more difficulty achieving abstinence
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health (Practical Concerns), see DIS-A
- Current smoking status: ___ (smoking_status)

# Documentation and standing rules

- Document smoking status of all tobacco products in the patient health record
    - Includes e-cigarettes and other non-combustible nicotine-containing products
    - Repeat the assessment at every visit
- Offer treatment for smoking to all people with cancer who smoke, regardless of cancer stage or prognosis
    - Smoking-associated risks for patients with cancer, see SC-B

# Status

- Individuals who have smoked within the last 30 days
- Individuals who formerly smoked
    - More than 30 days to 1 year since last smoked
    - More than 1 year since last smoked
- Individuals who have never smoked

# Next

- Individuals who have smoked within the last 30 days, go to assessment of individuals who have smoked within last 30 days (SC-2)
- Individuals who formerly smoked, either more than 30 days to 1 year or more than 1 year since last smoked, go to assessment of individuals who formerly smoked (SC-4)
- Individuals who have never smoked, encourage the patient to remain abstinent from smoking and not to use any combustible products
    - Encourage patients with cancer to achieve and maintain abstinence from all combustible tobacco products (eg, cigarettes, pipes, cigars, hookah, cigarillos) and alternative nicotine products
    - For information about e-cigarettes and other non-combustible nicotine-containing products, see Principles of Alternative Approaches to Treatment of Smoking (SC-A)
