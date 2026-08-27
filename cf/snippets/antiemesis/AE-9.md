+++
id           = "antiemesis/AE-9"
gid          = "antiemesis"
ref          = "AE-9"
page         = 22
title        = "Emesis prophylaxis for adult oral anticancer agents of moderate to high emetic risk"
nccn_version = "2.2026"
nccn_date    = "06/24/2026"
generated    = "2026-08-27"
see_also     = ["AE-13"]

[facets]
disease   = "antiemesis"
timepoint = "supportive"

[[variables]]
name = "po_agent"
type = "text"
[[variables]]
name = "daily_dose"
type = "text"
[[variables]]
name = "concurrent_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "other_agents"
type = "text"
[[variables]]
name = "cycles_done"
type = "number"
[[variables]]
name = "risk_factors"
type = "text"
+++

# Source

- NCCN Adult Antiemesis v2.2026, AE-9, p22
- Adult oral anticancer agents, emetogenic potential and emesis prevention
- These antiemetic recommendations apply to PO anticancer therapy only
    - When combined with IV agents in a combination anticancer therapy regimen, follow the antiemetic recommendations for the agent with the highest level of emetogenicity
    - If multiple PO agents are combined, emetic risk may increase and require prophylaxis
- Table framework is based on the clinical experience of Panel members and on published emetogenicity classifications
- All recommendations category 2A unless otherwise indicated

# Assessment

- PO anticancer agent: ___ (po_agent)
- Dose: ___ (daily_dose)
- Concurrent RT: ___ (concurrent_rt)
- Other agents in the anticancer regimen, PO or IV: ___ (other_agents)
- Cycles already completed on this agent: ___ (cycles_done)
- Patient-specific emetic risk factors: ___ (risk_factors)

# Moderate to high emetic risk level

- Moderate to high emetic risk is a 30% or greater frequency of emesis
    - Frequency is the proportion of patients who experience emesis in the absence of effective antiemetic prophylaxis
- Prophylaxis required on days of PO anticancer agent administration

# Agents of moderate to high emetic risk

- Azacitidine
    - If patient is tolerating after first 2 cycles, may change to PRN dosing
- Busulfan 4 mg/day or more
- Ceritinib
- Cyclophosphamide 100 mg/m2/day or more
- Fedratinib
- Lomustine, single day
- Midostaurin
- Mitotane
- Selinexor
    - Emerging data and clinical practice suggest adding low-dose olanzapine and/or NK1 RA or 5-HT3 RA for nausea prevention
- Temozolomide above 75 mg/m2/day
- Temozolomide 75 mg/m2/day or less with concurrent RT

# Prophylaxis, required

- Start before anticancer therapy and continue daily on each day of anticancer therapy
- Order does not imply preference
- 5-HT3 RA, choose one
    - Granisetron 1 to 2 mg total dose PO daily
    - Granisetron 3.1 mg/24-h transdermal patch every 7 days
    - Ondansetron 8 to 16 mg total dose PO daily
- or Olanzapine 2.5 to 10 mg PO daily at bedtime
- Choose the antiemetic regimen based on the drug with the highest emetic risk as well as patient-specific risk factors
- Multiday regimens, see Principles of Managing Multiday Emetogenic Chemotherapy Regimens (AE-A)
- See Pharmacologic Considerations for Antiemetic Prescribing (AE-B)

# Next

- Emesis despite prophylaxis, go to Breakthrough Treatment (AE-13)
