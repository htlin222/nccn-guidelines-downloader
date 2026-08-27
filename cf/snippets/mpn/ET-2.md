+++
id           = "mpn/ET-2"
gid          = "mpn"
ref          = "ET-2"
page         = 25
title        = "Treatment for high-risk essential thrombocythemia"
nccn_version = "2.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-27"
see_also     = ["ET-1", "ET-3", "MPN-2", "MPN-H", "MPN-E", "MPN-F", "MPN-C", "ET-A"]

[facets]
disease   = "mpn"
histology = "myeloproliferative"
biomarker = ["jak2", "any"]
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "jak2"
type = "enum"
options = ["mutated", "not detected"]
[[variables]]
name = "thrombosis_history"
type = "text"
[[variables]]
name = "cv_risk_factors"
type = "text"
[[variables]]
name = "acquired_vws"
type = "enum"
options = ["absent", "present", "not assessed"]
[[variables]]
name = "aspirin_dose"
type = "text"
[[variables]]
name = "cytoreductive_therapy"
type = "enum"
options = ["none", "clinical trial", "hydroxyurea", "peginterferon alfa-2a", "anagrelide"]
[[variables]]
name = "response"
type = "enum"
options = ["adequate response", "inadequate response", "loss of response", "disease progression"]
+++

# Source

- NCCN Myeloproliferative Neoplasms v2.2026, ET-2, p25
- Applies to high-risk essential thrombocythemia
    - History of thrombosis at any age
    - Or age >60 years with JAK2 mutation
- Special Considerations in the Treatment of MPN (MPN-H)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- JAK2 mutation ___ (jak2)
- History of thrombosis ___ (thrombosis_history)
- Cardiovascular risk factors ___ (cv_risk_factors)
- Acquired VWS ___ (acquired_vws)
- Current aspirin dose ___ (aspirin_dose)
- Current cytoreductive therapy ___ (cytoreductive_therapy)
- Current response status ___ (response)

# Treatment for all high-risk ET

- Manage cardiovascular risk factors (MPN-H)
- Aspirin 81-100 mg/day
    - Use with caution in patients with acquired VWS
    - Higher-dose aspirin may be appropriate in selected patients as clinically indicated
    - Weigh the risks and benefits of higher-dose aspirin (>100 mg) based on the presence of vasomotor symptoms versus the risk of bleeding
    - Aspirin twice daily may be considered for patients with refractory symptoms or cardiovascular risk factors

# Cytoreductive therapy

- Preferred
    - Clinical trial
    - Hydroxyurea
- Other recommended, based on other patient-specific variables
    - Peginterferon alfa-2a
        - Can be considered for patients in need of cytoreductive therapy who are younger or pregnant, or who defer hydroxyurea
        - If peginterferon alfa-2a is unavailable, use of other available pegylated interferons (eg, ropeginterferon alfa-2b-njft) is appropriate
    - Anagrelide

# Monitoring

- Monitor for new thrombosis
- Monitor for acquired VWS
- Monitor for disease-related major bleeding
- Monitor response and signs/symptoms of disease progression (MPN-E 1 of 2) as clinically indicated
    - Supportive Care for Patients with MPN (MPN-F)
    - Perform bone marrow aspirate and biopsy to rule out disease progression to MF, if there is clinical or laboratory suspicion of MF
    - Normalization of blood counts after initiation of treatment is usually a goal in clinical practice, but it is not associated with long-term clinical benefit
        - There are no evidence-based data to recommend a target WBC or platelet count for patients receiving cytoreductive therapy
        - In selected patients with a severe thrombotic event or other disease-related symptoms, normalization of blood counts might be a goal of treatment
    - Response criteria were developed mainly for use in clinical trials
        - Clinical benefit may not reach the threshold of the 2013 IWG-MRT and ELN Response Criteria for ET (ET-A)
        - Response assessment should be done based on the improvement of disease-related symptoms at the discretion of the clinician

# Next

- Adequate response
- Inadequate response or loss of response, go to ET-3
- Disease progression to post-ET MF, see MPN-2
    - WHO and ICC Diagnostic Criteria for Post-ET MF (MPN-C)
- Disease progression to accelerated/blast phase MPN, see MPN-AP/BP-1
