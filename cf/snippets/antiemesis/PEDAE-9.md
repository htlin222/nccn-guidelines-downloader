+++
id           = "antiemesis/PEDAE-9"
gid          = "antiemesis"
ref          = "PEDAE-9"
page         = 50
title        = "Emesis prophylaxis for pediatric oral anticancer agents of moderate to high emetic risk"
nccn_version = "2.2026"
nccn_date    = "06/24/2026"
generated    = "2026-08-27"
see_also     = ["PEDAE-12"]

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
name = "weight"
type = "number"
[[variables]]
name = "bsa"
type = "number"
[[variables]]
name = "other_agents"
type = "text"
[[variables]]
name = "risk_factors"
type = "text"
+++

# Source

- NCCN Pediatric Antiemesis v2.2026, PEDAE-9, p50
- Pediatric oral anticancer agents, emetogenic potential and emesis prevention
- These antiemetic recommendations apply to PO anticancer therapy only
    - When combined with IV agents in a combination anticancer therapy regimen, follow the antiemetic recommendations for the agent with the highest level of emetogenicity
    - If multiple PO agents are combined, emetic risk may increase and require prophylaxis
- Table framework is based on the clinical experience of Panel members and on published emetogenicity classifications
- For medications not listed in pediatric tables, refer to adult data when no pediatric-specific information is available
- All recommendations category 2A unless otherwise indicated

# Assessment

- PO anticancer agent: ___ (po_agent)
- Dose: ___ (daily_dose)
- Concurrent RT: ___ (concurrent_rt)
- Weight ___ (weight) kg
- BSA ___ (bsa) m2
- Other agents in the anticancer regimen, PO or IV: ___ (other_agents)
- Patient-specific emetic risk factors: ___ (risk_factors)

# Moderate to high emetic risk level

- Moderate to high emetic risk is a 30% or greater frequency of emesis
    - Frequency is the proportion of patients who experience emesis in the absence of effective antiemetic prophylaxis
- Prophylaxis required on days of PO anticancer agent administration

# Agents of moderate to high emetic risk

- Azacitidine
- Midostaurin
- Cyclophosphamide 100 mg/m2/day or more
- Selinexor
- Lomustine, single day
- Temozolomide above 75 mg/m2/day
- Temozolomide 75 mg/m2/day or less with concurrent RT

# Prophylaxis, required

- Start before anticancer therapy and continue daily on each day of anticancer therapy
- Order does not imply preference
- 5-HT3 RA, choose one
    - Granisetron 0.01 to 0.04 mg/kg IV once
    - or Granisetron 0.04 mg/kg PO every 12 to 24 hours, max 2 mg/day
    - Ondansetron 0.15 mg/kg or 5 mg/m2 PO/IV every 8 to 24 hours
        - Max 16 mg/dose or 0.45 mg/kg/day
        - Not to exceed 3 doses/day, max 24 mg/day
- or Olanzapine 0.05 to 0.2 mg/kg, 2.5 to 10 mg, PO daily at bedtime
- Choose the antiemetic regimen based on the drug with the highest emetic risk as well as patient-specific risk factors

# Next

- Emesis despite prophylaxis, go to Breakthrough Treatment (PEDAE-12)
