+++
id           = "pain/PAIN-4"
gid          = "pain"
ref          = "PAIN-4"
page         = 13
title        = "Management of pain in opioid-naive patients, by pain intensity"
nccn_version = "2.2026"
nccn_date    = "07/13/26"
generated    = "2026-08-28"
see_also     = ["PAIN-3", "PAIN-6", "PAIN-7", "PAIN-A", "PAIN-B", "PAIN-G"]

[facets]
disease   = "pain"
timepoint = "supportive"

[[variables]]
name = "pain_score"
type = "text"
[[variables]]
name = "pain_category"
type = "enum"
options = ["mild", "moderate", "severe", "pain crisis"]
[[variables]]
name = "current_opioid"
type = "text"
[[variables]]
name = "short_acting_doses_per_day"
type = "number"
+++

# Source

- NCCN Adult Cancer Pain v2.2026, PAIN-4, p13
- Applies to opioid-naive patients
    - Those not chronically receiving opioid analgesic on a daily basis, and therefore have not developed significant tolerance
    - Opioid tolerant includes patients who are chronically receiving opioid analgesic on a daily basis
    - FDA identifies tolerance as, for a week or longer, at least 25 mcg/h fentanyl patch
    - FDA identifies tolerance as, for a week or longer, at least 60 mg of morphine daily
    - FDA identifies tolerance as, for a week or longer, at least 30 mg of PO oxycodone daily
    - FDA identifies tolerance as, for a week or longer, at least 8 mg of PO hydromorphone daily
    - FDA identifies tolerance as, for a week or longer, an equianalgesic dose of another opioid
- Pain intensity rating (PAIN-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Pain intensity rating ___ (pain_score) (PAIN-A)
- Pain intensity band ___ (pain_category)
- Opioid analgesic currently taken on a daily basis ___ (current_opioid)
- Confirmed opioid-naive by the definition above

# Mild pain

- See General Principles on PAIN-3
- AND first consider non-opioids and adjuvant therapies (PAIN-G)
    - Unless these are contraindicated due to adverse effects
    - Unless these are contraindicated due to potential drug interactions
    - Unless these are contraindicated due to comorbid conditions

# Moderate/severe pain

- See General Principles on PAIN-3
- AND non-opioids and adjuvant therapies as appropriate, with short-acting opioids as needed (PAIN-G)
- Start and titrate short-acting opioid, every 3-4 hours as needed (PAIN-G 10 of 22)
    - More frequent dosing may be indicated in select situations
    - Select, extended-release opioids may also be indicated for opioid-naive patients in rare circumstances
- Choose one short-acting opioid
    - Morphine 5 mg (solution), or immediate release (IR) 7.5 mg (1/2 of a 15 mg tablet)
    - Hydromorphone 2 mg orally (PO)
    - Oxycodone IR 2.5-5 mg, with or without acetaminophen 325 mg
        - Non-opioid analgesic (nonsteroidal anti-inflammatory drugs [NSAIDs] and acetaminophen) prescribing (PAIN-E)
    - Hydrocodone 5 mg with acetaminophen 325 mg
        - Non-opioid analgesic (nonsteroidal anti-inflammatory drugs [NSAIDs] and acetaminophen) prescribing (PAIN-E)
    - May consider half tablet for lower dose titration in patients who are frail or older
- Buprenorphine is an option for patients who may be more sensitive to full agonist opioid side effects (PAIN-G 14 of 22)
    - 5 mcg/h transdermal patch every 7 days
    - Or buccal film 75 mcg 1-2 times/day
    - Buprenorphine can take hours to days to take effect
    - Treat severe pain with IR opioids
- Number of short-acting doses needed per day ___ (short_acting_doses_per_day)
    - If multiple doses of short-acting opioid are consistently needed per day, consider addition of a long-acting opioid
        - Based on the total daily dose
        - If appropriate based on expected trajectory of pain

# Severe pain/pain crisis

- For acute, severe pain or pain crisis, consider hospital or inpatient hospice admission to achieve patient-specific goals for comfort and function (PAIN-6)

# Titrate and reassess

- Titrate further as needed
- If pain is inadequately controlled, reevaluate working diagnosis with a comprehensive pain assessment (PAIN-B)
- Consider radiation oncology, pain medicine, and/or palliative care consultation (PAIN-L)
- Consider opioid rotation if dose-limiting adverse effects are noted

# Next

- If pain is stable, see Ongoing Care (PAIN-7)
- If pain is inadequately controlled, reevaluate working diagnosis (PAIN-B)
- Acute, severe pain or pain crisis, go to PAIN-6
