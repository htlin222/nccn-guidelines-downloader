+++
id           = "mds/MDS-4"
gid          = "mds"
ref          = "MDS-4"
page         = 10
title        = "Management of lower-risk disease (IPSS-R very-low-, low-, intermediate-risk)"
nccn_version = "3.2026"
nccn_date    = "01/12/26"
generated    = "2026-08-27"
see_also     = ["MDS-3", "MDS-5", "MDS-8"]

[facets]
disease   = "mds"
histology = "myelodysplastic"
biomarker = ["del5q", "idh1", "idh2"]
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ipssr_category"
type = "enum"
options = ["very-low", "low", "intermediate"]
[[variables]]
name = "ipssr_score"
type = "number"
[[variables]]
name = "cytopenias"
type = "text"
[[variables]]
name = "cytogenetics"
type = "text"
[[variables]]
name = "marrow_blasts"
type = "number"
[[variables]]
name = "idh_status"
type = "enum"
options = ["midh1", "midh2", "none"]
+++

# Source

- NCCN Myelodysplastic Syndromes v3.2026, MDS-4, p10
- Applies to lower-risk disease: IPSS-R very-low-, low-, and intermediate-risk disease
- Given its more accurate risk stratification, the IPSS-R categorization is preferred, although the other systems also have good value
- Presence of comorbidities should also be considered for evaluation of prognosis (see Comorbidity Indices in the Discussion)
- If the disease is initially managed as lower risk but fails to respond, move to higher risk management strategies
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- IPSS-R risk category ___ (ipssr_category)
- IPSS-R score ___ (ipssr_score)
    - IPSS-R intermediate-risk MDS may be managed as lower risk if the score is 3.5 or below, versus higher risk if the score is above 3.5
- Clinically significant cytopenia(s) ___ (cytopenias)
    - Symptomatic anemia
    - Clinically relevant thrombocytopenia or neutropenia
- Cytogenetics ___ (cytogenetics)
    - del(5q) with or without one other cytogenetic abnormality, except those involving chromosome 7
    - No del(5q), with or without other cytogenetic abnormalities
- Marrow blasts ___ (marrow_blasts) percent
- IDH mutation status ___ (idh_status)
    - Mutant IDH1 (mIDH1)
    - Mutant IDH2 (mIDH2)
    - No mIDH
- Comorbidities considered in the prognostic assessment

# Supportive care

- Supportive care as an adjunct to treatment, for clinically significant cytopenia(s) (MDS-8)

# Symptomatic anemia

- del(5q) with or without one other cytogenetic abnormality, except those involving chromosome 7, see MDS-5
- No del(5q), with or without other cytogenetic abnormalities, see MDS-5

# Clinically relevant thrombocytopenia or neutropenia

- Clinical trial
- Azacitidine
    - Some studies have demonstrated clinical benefit with low doses of azacitidine or decitabine for lower-risk MDS
- Decitabine
    - Some studies have demonstrated clinical benefit with low doses of azacitidine or decitabine for lower-risk MDS
- Decitabine and cedazuridine
    - Decitabine and cedazuridine (DEC-C) could be a substitution for intravenous decitabine in patients with IPSS intermediate-1 and above
- Useful in certain circumstances: immunosuppressive therapy (IST), with or without eltrombopag, for select patients
    - Patients generally 60 years or younger, and with 5% or fewer marrow blasts
    - Or those with hypocellular marrows, PNH clone positivity, or STAT3-mutant cytotoxic T-cell clones
    - IST includes equine antithymocyte globulin (ATG), with or without cyclosporin A
    - For severe thrombocytopenia, eltrombopag alone could be considered

# Disease progression, no response, or relapse

- Treatment failure would be considered if no response within 3-6 months
    - Response should be evaluated based on International Working Group (IWG) criteria
- Reevaluation with bone marrow and/or molecular testing is recommended
- Consider hypomethylating agents (HMAs), if not already receiving
    - Some studies have demonstrated clinical benefit with low doses of azacitidine or decitabine for lower-risk MDS
    - For patients with severe or refractory thrombocytopenia, eltrombopag or romiplostim can be considered
- Or ivosidenib, if mutant IDH1 (mIDH1)
- Or enasidenib, if mutant IDH2 (mIDH2)

# Subsequent therapy by IDH mutation status

- If mIDH1: ivosidenib, if not previously used
- If mIDH2: enasidenib, if not previously used
- No mIDH
    - Clinical trial
    - Consider alloHCT for select patients
        - Patients with IPSS intermediate-1, IPSS-R intermediate, and WHO-Based Prognostic Scoring System (WPSS) intermediate-risk MDS with severe cytopenias would also be considered candidates for HCT
        - Matched sibling, unrelated donor, haploidentical donor, or cord blood donor, including standard and reduced-intensity preparative approaches, may be considered

# Next

- Symptomatic anemia, go to MDS-5
- Clinically significant cytopenia(s) needing supportive care, see MDS-8
- Initially managed as lower risk but fails to respond, move to higher risk management strategies
