+++
id           = "waldenstroms/LPL-2"
gid          = "waldenstroms"
ref          = "LPL-2"
page         = 8
title        = "Risk-stratified follow-up of asymptomatic WM, and when to start treatment"
nccn_version = "1.2027"
nccn_date    = "08/11/26"
generated    = "2026-08-27"
see_also     = ["LPL-1", "LPL-1A", "LPL-3"]

[facets]
disease   = "waldenstroms"
timepoint = ["surveillance", "primary-treatment"]

[[variables]]
name = "bm_involvement"
type = "number"
[[variables]]
name = "igm"
type = "number"
[[variables]]
name = "b2m"
type = "number"
[[variables]]
name = "albumin"
type = "number"
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "intermediate", "high"]
+++

# Source

- NCCN Waldenström Macroglobulinemia / Lymphoplasmacytic Lymphoma v1.2027, WM/LPL-2, p8
- Applies to asymptomatic or minimally symptomatic WM
    - Reserve therapy only for symptomatic patients, as untreated asymptomatic patients have similar survival compared to age- and sex-matched individuals of the general population
- All recommendations category 2A unless otherwise indicated

# Assessment

- Asymptomatic or minimally symptomatic WM
- Bone marrow involvement ___ (bm_involvement) %
- Serum IgM level ___ (igm) mg/dL
- Serum beta-2 microglobulin level ___ (b2m) mg/L
- Serum albumin level ___ (albumin) g/dL
- Asymptomatic WM risk score result: ___ (risk_group) risk

# Asymptomatic WM risk score

- Calculate the asymptomatic Waldenström macroglobulinemia (WM) risk score using
    - Bone marrow involvement (%)
    - Serum IgM level (mg/dL)
    - Serum beta-2 microglobulin level (mg/L)
    - Serum albumin level (g/dL)
- Risk score calculator is available at www.awmrisk.com
- All values are taken at approximately the same time

# Follow-up

- Low risk
    - Median time to progression 9.2 years
    - Monitor every 12 months with CBC, CMP, SPEP, serum immunoglobulins
- Intermediate risk
    - Median time to progression 4.8 years
    - Monitor every 6 months with CBC, CMP, SPEP, serum immunoglobulins
- High risk
    - Median time to progression 1.8 years
    - Monitor every 3 months with CBC, CMP, SPEP, serum immunoglobulins

# Indications for treatment

- Confirm symptoms are not related to or caused by other comorbidities
- Symptoms related to
    - Hyperviscosity
        - Retinal examination once a year if serum IgM level is greater than 3000 mg/dL
    - Neuropathy
    - Organomegaly
    - Amyloidosis
    - Cold agglutinin disease
        - Detection of cold agglutinins in the absence of symptoms does not represent a criterion to treat
    - Cryoglobulinemia
        - Detection of cryoglobulins in the absence of symptoms does not represent a criterion to treat
    - Anemia and other cytopenias
    - Bulky adenopathy
    - B symptoms
- Or if asymptomatic with high levels of IgM, greater than 6000 mg/dL

# Next

- Indication for treatment present, go to primary treatment (LPL-3)
- No indication for treatment, continue risk-based monitoring above
