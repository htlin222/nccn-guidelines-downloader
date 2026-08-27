+++
id           = "rectal/REC-3"
gid          = "rectal"
ref          = "REC-3"
page         = 13
title        = "Clinical stage and primary treatment of rectal cancer without suspected or proven distant metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-3A", "REC-4", "REC-5", "REC-10", "REC-10A"]

[facets]
disease   = "rectal"
stage     = ["I", "II", "III"]
timepoint = ["staging", "primary-treatment", "neoadjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "t1_risk"
type = "enum"
options = ["favorable", "high-risk", "not-applicable"]
[[variables]]
name = "family_history"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-3, p13
- Applies to rectal cancer without suspected or proven distant metastases
- The rectum lies below the peritoneal reflection from the sacral promontory to the upper edge of the symphysis as determined by MRI
- For melanoma histology, see the NCCN Guidelines for Melanoma: Cutaneous
- For tools to aid optimal assessment and care of older adults with cancer, see the NCCN Guidelines for Older Adult Oncology
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, rectal cancer without suspected or proven distant metastases
- Clinical stage ___ (ctnm)
- If T1, risk group ___ (t1_risk)
    - High-risk features include positive margins
    - High-risk features include lymphovascular invasion
    - High-risk features include poorly differentiated tumors
    - High-risk features include sm3 invasion, submucosal invasion to the lower third of the submucosal level
- Family history ___ (family_history)
    - All patients with rectal cancer should be counseled for family history
    - For suspected LS, FAP, and attenuated FAP, see the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Primary treatment, T1 (favorable risk), N0

- Endoscopic submucosal dissection (ESD), see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Adjuvant Treatment (REC-4)
- or Transanal local excision, see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Adjuvant Treatment (REC-4)
- or Transabdominal resection, see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Adjuvant Treatment (REC-5)

# Primary treatment, T1 (high risk), T2, N0

- Transabdominal resection (preferred), see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Adjuvant Treatment (REC-5)
- or Long-course chemo/radiation therapy (RT), with capecitabine or infusional fluorouracil
    - See Principles of Radiation Therapy (REC-E)
- or Short-course RT
    - See Principles of Radiation Therapy (REC-E)
    - Evaluation for short-course RT should be in a multidisciplinary setting, with a discussion of the need for downstaging and the possibility of long-term toxicity
    - For high-risk rectal cancer, the 5-year follow-up of the RAPIDO trial now indicates a statistically higher locoregional recurrence rate with short-course RT
        - High-risk here means clinical tumor stage cT4a or cT4b
        - or extramural vascular invasion (EMVI)
        - or clinical nodal stage c-N2
        - or involved mesorectal fascia (MRF)
        - or enlarged lateral lymph nodes considered to be metastatic

# After long-course chemo/RT or short-course RT

- Consider FOLFOX or CAPEOX
- Restaging, see Principles of Imaging (REC-A)
- Then Transabdominal resection, see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Surveillance (REC-10)
- or Transanal local excision for select patients, see Principles of Surgery and Locoregional Therapies (REC-C)
    - Then Surveillance (REC-10)
- or if complete clinical response, consider surveillance (REC-10A)
    - A watch and wait, nonoperative management approach may be considered in centers with experienced multidisciplinary teams
    - The degree to which risk of local and/or distant recurrence may be increased relative to standard surgical resection has not yet been adequately characterized
    - Decisions for nonoperative management (NOM) should involve a careful discussion with the patient of their risk tolerance
    - See Principles of Nonoperative Management (REC-H)

# Primary treatment, T3, N any; T1-2, N1-2; T4, N any; or locally unresectable or medically inoperable

- Go to REC-3A

# Next

- T1 (favorable risk), N0 after ESD or transanal local excision, go to Adjuvant Treatment (REC-4)
- T1 (favorable risk), N0 after transabdominal resection, go to Adjuvant Treatment (REC-5)
- T1 (high risk), T2, N0 after transabdominal resection, go to Adjuvant Treatment (REC-5)
- After restaging and resection, go to Surveillance (REC-10)
- Complete clinical response with nonoperative management, go to REC-10A
- T3, N any; T1-2, N1-2; T4, N any; or locally unresectable or medically inoperable, go to REC-3A
