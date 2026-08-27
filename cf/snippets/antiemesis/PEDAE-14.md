+++
id           = "antiemesis/PEDAE-14"
gid          = "antiemesis"
ref          = "PEDAE-14"
page         = 55
title        = "Prevention and treatment of pediatric radiation-induced emesis"
nccn_version = "2.2026"
nccn_date    = "06/24/2026"
generated    = "2026-08-28"
see_also     = ["PEDAE-12", "PEDAE-3", "PEDAE-6", "PEDAE-8", "PEDAE-9", "PEDAE-10", "PEDAE-11", "AE-1"]

[facets]
disease   = "antiemesis"
timepoint = ["prevention", "supportive"]

[[variables]]
name = "weight"
type = "number"
[[variables]]
name = "bsa"
type = "number"
[[variables]]
name = "rt_type"
type = "enum"
options = ["upper-abdomen", "localized-site", "tbi"]
[[variables]]
name = "concurrent_anticancer_therapy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "anticancer_regimen"
type = "text"
[[variables]]
name = "highest_risk_modality"
type = "enum"
options = ["anticancer-therapy", "radiation"]
[[variables]]
name = "cellular_or_ici_therapy"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pediatric Antiemesis v2.2026, PEDAE-14, p55
- Pediatric radiation-induced emesis, prevention and treatment
- All recommendations category 2A unless otherwise indicated

# Assessment

- Weight ___ (weight) kg
- BSA ___ (bsa) m2
- Type of radiation therapy: ___ (rt_type)
- Anticancer therapy given with RT: ___ (concurrent_anticancer_therapy)
- Anticancer regimen, if any: ___ (anticancer_regimen)
- Modality with the highest emetic risk: ___ (highest_risk_modality)
- Cellular therapy or ICI therapy in this regimen: ___ (cellular_or_ici_therapy)

# Emetogenic potential by type of radiation therapy

- Radiation-induced nausea/vomiting
    - RT to the upper abdomen or to localized sites
    - Total body irradiation (TBI)
- Anticancer therapy and RT (including TBI)

# Prevention for RT to the upper abdomen or localized sites, and for TBI

- Start pretreatment for each day of RT treatment
- Order does not imply preference
- 5-HT3 RA, choose one
    - Granisetron 0.01–0.04 mg/kg IV once
    - or Granisetron 0.04 mg/kg PO every 12–24 hours, max 2 mg/day
    - Ondansetron 0.15 mg/kg or 5 mg/m2 PO/IV every 8–24 hours
        - Max 16 mg/dose or 0.45 mg/kg/day
        - Not to exceed 3 doses/day, max 24 mg/day
- ± Dexamethasone PO daily
    - Avoid corticosteroid premedications with cellular therapies
    - Clinicians may wish to consider a dexamethasone-sparing approach with ICI therapy as well
    - Pharmacologic considerations for antiemetic prescribing, see (AE-B)
    - No optimal pediatric dexamethasone dose has been identified, and doses may be individualized
    - Consider doses of 5–10 mg/m2/day once daily or divided
    - Reduce dexamethasone by 50% when given concomitantly with NK1 RAs

# Anticancer therapy and RT (including TBI)

- Follow emesis prevention for chemotherapy-induced nausea/vomiting
    - Parenteral emetic risk, high (PEDAE-3)
    - Parenteral emetic risk, moderate (PEDAE-6)
    - Parenteral emetic risk, low and minimal (PEDAE-8)
    - Oral emetic risk, moderate to high, prophylaxis required (PEDAE-9)
    - Oral emetic risk, moderate to high, PRN dosing initially appropriate (PEDAE-10)
    - Oral emetic risk, minimal to low (PEDAE-11)
- If RT is combined with anticancer therapy, antiemetic prophylaxis is based on the modality (anticancer therapy or radiation) with the highest emetic risk (AE-1)

# Next

- Emesis despite prophylaxis, go to Breakthrough Treatment (PEDAE-12)
