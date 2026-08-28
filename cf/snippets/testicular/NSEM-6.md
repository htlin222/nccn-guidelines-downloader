+++
id           = "testicular/NSEM-6"
gid          = "testicular"
ref          = "NSEM-6"
page         = 21
title        = "First-line chemotherapy and postchemotherapy management for nonseminoma, stage IS through IIIC and brain metastases"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-7", "NSEM-8", "TEST-B", "TEST-D", "TEST-E", "TEST-H"]

[facets]
disease    = "testicular"
stage      = ["I", "II", "III"]
timepoint  = ["primary-treatment", "metastatic", "surveillance"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IS", "IIA", "IIB", "IIC", "IIIA", "IIIB", "IIIC"]
[[variables]]
name = "risk"
type = "enum"
options = ["good", "intermediate", "poor"]
[[variables]]
name = "afp"
type = "number"
[[variables]]
name = "hcg"
type = "number"
[[variables]]
name = "ldh"
type = "number"
[[variables]]
name = "residual_size"
type = "number"
+++

# Source

- NCCN Testicular Cancer v2.2026, NSEM-6, p21
- Applies to nonseminoma, clinical stage IS, IIA, IIB, IIC, IIIA, IIIB, IIIC, and brain metastases
- Risk Classification for Advanced Disease (TEST-D)
- First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma
- Clinical stage ___ (stage)
- Risk classification (TEST-D) ___ (risk)
- Mediastinal primary: no / yes
- Brain metastases: no / yes
- Serum AFP ___ (afp)
- Serum beta-hCG ___ (hcg)
- Serum LDH ___ (ldh) x ULN
- Increased risk for bleomycin toxicity, such as reduced GFR or older age: no / yes
- Postchemotherapy residual mass ___ (residual_size) cm, transaxial long axis

# Good risk: stage IS, IIA, IIB, IIC, IIIA

- Risk Classification for Advanced Disease (TEST-D)
- First-line chemotherapy (TEST-E)
    - BEP for 3 cycles (category 1)
        - BEP = Bleomycin/Etoposide/Cisplatin
        - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced GFR or older age
    - or EP for 4 cycles (category 1)
        - EP = Etoposide/Cisplatin

# Intermediate risk and poor risk: stage IIIB, IIIC

- Risk Classification for Advanced Disease (TEST-D)
- Mediastinal primary nonseminoma is poor-risk disease
    - Should be treated with either VIP or BEP, with careful pulmonary functioning monitoring
- Referral to a high-volume center is recommended for patients with poor-risk disease
- Consider referral to a high-volume center for patients with intermediate-risk disease
- First-line chemotherapy (TEST-E)
    - BEP for 4 cycles (category 1, preferred)
        - BEP = Bleomycin/Etoposide/Cisplatin
        - Consider a bleomycin-free regimen in patients at increased risk for bleomycin toxicity, such as those with reduced GFR or older age
        - If intermediate risk is based only on LDH 1.5-3 times the ULN, then BEP for 3 cycles or EP for 4 cycles can be considered
    - or VIP for 4 cycles (category 1)
        - VIP = Etoposide/Ifosfamide/Cisplatin

# Brain metastases

- First-line chemotherapy as for poor-risk disease (TEST-E)
- Plus or minus RT, if clinically indicated
- Plus or minus surgery, if clinically indicated
- Referral to a high-volume center is recommended for patients with poor-risk disease

# Response assessment after treatment

- CT with contrast, or MRI with and without contrast, of C/A/P is recommended
- Plus any other sites of disease
- FDG-PET/CT has no role in assessing treatment response and residual masses following chemotherapy in patients with nonseminoma

# Postchemotherapy: negative markers with no mass, or residual mass under 1 cm on CT scans

- Residual mass measured as transaxial long axis
- If original stage IS
    - Surveillance
- If original stage T any N1-3, M0-1
    - Surveillance
    - or Nerve-sparing bilateral RPLND in selected cases (category 2B)
        - Patients with subcentimeter residual nodes who have teratoma or yolk sac tumor in their primary tumor may be at higher risk of teratoma or viable germ cell elements in the post-chemotherapy residual nodes
        - More data are still needed to know if they are at a higher risk of relapse or worse outcomes
        - All locoregional treatment is recommended within 4 weeks of CT or MRI, and within 2 weeks of confirmation of normal tumor markers
        - Referral to a high-volume center is recommended
        - Principles of Surgery for Germ Cell Tumors (TEST-H)

# Postchemotherapy: residual masses

- Residual masses with or without abnormal AFP and/or beta-hCG levels
    - Recommend referral to a high-volume center for residual masses with abnormal AFP and/or beta-hCG levels
    - Postchemotherapy Management (NSEM-7)

# Next

- Surveillance, see Follow-up for Nonseminoma, Table 10 (TEST-B 2 of 3)
- Residual masses with or without abnormal AFP and/or beta-hCG levels, go to Postchemotherapy Management (NSEM-7)
- For recurrence, see Second-Line Therapy (NSEM-8)
