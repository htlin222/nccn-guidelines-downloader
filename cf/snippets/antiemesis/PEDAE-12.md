+++
id           = "antiemesis/PEDAE-12"
gid          = "antiemesis"
ref          = "PEDAE-12"
page         = 53
title        = "Breakthrough treatment for pediatric anticancer therapy-induced nausea/vomiting"
nccn_version = "2.2026"
nccn_date    = "06/24/2026"
generated    = "2026-08-28"
see_also     = ["PEDAE-9", "AE-13"]

[facets]
disease   = "antiemesis"
timepoint = "supportive"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "weight"
type = "number"
[[variables]]
name = "bsa"
type = "number"
[[variables]]
name = "anticancer_therapy"
type = "text"
[[variables]]
name = "current_antiemetics"
type = "text"
[[variables]]
name = "symptom"
type = "enum"
options = ["nausea", "vomiting", "both"]
[[variables]]
name = "drug_classes_in_use"
type = "text"
[[variables]]
name = "olanzapine_in_prevention_regimen"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "dopamine_antagonist_in_use"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "nk1_ra_in_use"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cellular_or_ici_therapy"
type = "enum"
options = ["cellular therapy", "ICI therapy", "neither"]
[[variables]]
name = "anxiety"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pediatric Antiemesis v2.2026, PEDAE-12, p53
- Applies to any nausea/vomiting on pediatric anticancer therapy
- Pharmacologic Considerations for Antiemetic Prescribing: AE-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Weight ___ (weight) kg
- BSA ___ (bsa) m2
- Current anticancer therapy: ___ (anticancer_therapy)
- Current antiemetic regimen: ___ (current_antiemetics)
- Any nausea/vomiting: ___ (symptom)
- Drug classes already in the current regimen: ___ (drug_classes_in_use)
- Olanzapine already part of the acute and delayed emesis prevention regimen: ___ (olanzapine_in_prevention_regimen)
- A dopamine-receptor antagonist already in use: ___ (dopamine_antagonist_in_use)
- NK1 RA given concomitantly: ___ (nk1_ra_in_use)
- Cellular therapy or ICI therapy: ___ (cellular_or_ici_therapy)
- Anxiety may be contributing to breakthrough CINV: ___ (anxiety)

# General principle

- Add one agent from a different drug class to the current regimen

# Breakthrough agents, one from a drug class not already in use

- Atypical antipsychotic
    - Olanzapine 0.05-0.2 mg/kg (2.5-10 mg) PO daily (bedtime)
        - When not used as part of the acute and delayed emesis prevention regimen
- Cannabinoid
    - Dronabinol 2.5-10 mg PO every 6-8 hours
        - Dronabinol PO solution has greater PO bioavailability than dronabinol capsules
        - 2.1 mg PO solution = 2.5 mg capsules
- Anticholinergics
    - Scopolamine 1.5 mg transdermal patch, 0.5-1 patch every 72 hours
        - Do not cut patches
        - If 1/2 patch is needed, remove only 1/2 of the backing prior to application
        - Cover with occlusive dressing to keep in place
- Dopamine-receptor antagonists
    - The Panel would discourage combining multiple dopamine-receptor antagonists, as this could increase the risk of extrapyramidal reactions
    - When used for breakthrough CINV, a single drug from this class could be utilized
    - No clinically significant drug-drug interactions with short-term use of antiemetics have emerged to date in randomized clinical trials
    - Metoclopramide 0.1-0.25 mg/kg PO/IV every 6 hours (max 10 mg/dose)
    - Phenothiazine
        - Prochlorperazine 0.1 mg/kg PO/IV every 6 hours (max 10 mg/dose)
        - Promethazine 0.25-0.5 mg/kg (6.25-25 mg/dose) PO/IV every 6 hours
            - Only for patients 2 years of age or older
- 5-HT3 RA
    - Granisetron 0.01-0.04 mg/kg IV once
    - Granisetron 0.04 mg/kg PO every 12-24 hours (max 2 mg/day)
    - Ondansetron 0.15 mg/kg or 5 mg/m2 PO/IV every 8-24 hours
        - Max 16 mg/dose or 0.45 mg/kg/day
        - Not to exceed 3 doses/day (max 24 mg/day)
- Corticosteroid
    - Dexamethasone PO/IV every 12-24 hours
        - Use of corticosteroid premedications should be avoided with cellular therapies
        - Clinicians may wish to consider a dexamethasone-sparing approach with ICI therapy as well (AE-B)
        - No optimal pediatric dexamethasone dose has been identified
        - Dexamethasone doses may be individualized
        - Consider doses of 5-10 mg/m2/day once daily or divided
        - Dexamethasone should be reduced by 50% when given concomitantly with NK1 RAs
- Benzodiazepine
    - Lorazepam 0.025-0.05 mg/kg/dose PO/IV every 6 hours (max 2 mg/dose)
        - Especially for patients where anxiety may be contributing to breakthrough CINV

# Next

- Nausea and vomiting controlled
    - Continue breakthrough medications, on a schedule, not PRN
- Nausea and/or vomiting uncontrolled
    - Re-evaluate and consider dose adjustments
    - And/or sequentially add one agent from a different drug class
    - Consider changing antiemetic therapy to higher level primary treatment for next cycle
