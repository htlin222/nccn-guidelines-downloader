+++
id           = "infections/INF-5"
gid          = "infections"
ref          = "INF-5"
page         = 11
title        = "Management of HBV, HCV, and HIV reactivation or disease before and during cancer-directed therapy"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["INF-1", "INF-3", "INF-4", "INF-6"]

[facets]
disease   = "infections"
timepoint = ["screening", "supportive", "surveillance"]

[[variables]]
name = "planned_therapy"
type = "text"
[[variables]]
name = "hbsag"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "hbcab"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "hbv_viral_load"
type = "text"
[[variables]]
name = "hcv_antibody"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "hcv_viral_load"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "alt"
type = "number"
[[variables]]
name = "hiv"
type = "enum"
options = ["positive", "negative", "not done"]
[[variables]]
name = "hiv_viral_load"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, INF-5, p11
- Applies to screening for HBV, HCV, and HIV prior to induction of immunosuppressive therapy (IST) or chemotherapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- Planned ___ (planned_therapy)
- HBsAg ___ (hbsag)
- HBcAb ___ (hbcab)
- HBV viral load ___ (hbv_viral_load)
- HCV antibody ___ (hcv_antibody)
- HCV viral load ___ (hcv_viral_load)
- ALT ___ (alt)
- HIV ___ (hiv)
- HIV viral load ___ (hiv_viral_load)

# HBV positive

- High risk of HBV is defined as HBsAg+ serology, or HBcAb+ serology, or increasing HBV viral load in patients with planned allogeneic HCT or B-cell-depleting therapy
- Therapy considerations
    - Consult with an expert in hepatitis treatment to determine possible antiviral prophylaxis/treatment
    - Consider delayed IST or other cancer-directed therapy if active infection
- Antiviral therapy, see FEV-C for dosing, spectrum, and specific comments/cautions
    - Entecavir
    - Tenofovir
    - Duration of therapy may depend on various factors and typically needs to be continued beyond the completion of immunosuppression
    - Lamivudine is inferior to entecavir and tenofovir, but may be considered when other agents are unavailable
- Screening and management reference: Hepatitis B Virus Screening and Management for Patients With Cancer Prior to Therapy, ASCO Provisional Clinical Opinion Update, Journal of Clinical Oncology (ascopubs.org)

# HCV antibody positive

- Refer to HCV guidelines, American Association for the Study of Liver Diseases/Infectious Diseases Society of America HCV Guidelines
- Viral load positive
    - Consider concomitant or sequential anti-HCV and cancer-directed therapy
    - Consult infectious disease (ID)/hepatology expert
- Viral load negative
    - No treatment recommended

# HIV positive

- Consult ID/HIV expert to adjust dosing and regimens in context of cancer-directed therapy
- Antiretroviral therapy
- See current HIV management guidelines: https://www.iasusa.org/resources/guidelines and https://clinicalinfo.hiv.gov/en/guidelines

# Surveillance

- Consider testing for drug resistance if clinically significant breakthrough infection is detected
- HBV: continue at least 6-12 months following conclusion of cancer-directed therapy
    - If viral load fails to drop, or previously undetectable PCR becomes positive, consult ID/hepatology expert and discontinue anti-CD20 antibody therapy
- HCV: monitor alanine aminotransferase (ALT) and HCV RNA monthly or as clinically indicated
- HIV: monitor HIV viral load during therapy as clinically indicated

# Next

- Antiviral agent dosing, spectrum, and specific comments/cautions, see FEV-C
- HCV positive viral load, refer to HCV guidelines
- HIV positive, see NCCN Guidelines for Cancer in People with HIV
