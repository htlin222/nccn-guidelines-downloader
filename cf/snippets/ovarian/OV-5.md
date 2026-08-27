+++
id           = "ovarian/OV-5"
gid          = "ovarian"
ref          = "OV-5"
page         = 11
title        = "Maintenance therapy after primary therapy for stage II-IV disease"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-6", "OV-7"]

[facets]
disease   = "ovarian"
stage     = ["II", "III", "IV"]
biomarker = ["brca", "any"]
timepoint = "maintenance"

[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["CR", "PR"]
[[variables]]
name = "brca_status"
type = "text"
[[variables]]
name = "hr_status"
type = "enum"
options = ["deficient", "proficient", "unknown"]
[[variables]]
name = "bev_used"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Epithelial Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer v4.2026, OV-5, p11
- Applies to stage II, III, IV post primary therapy, with CR or PR
    - CR means no definitive evidence of disease
    - Data are limited for maintenance therapy with a PARPi for patients with stage II disease
- Post primary treatment recommendations apply to high-grade serous or grade 2 or 3 endometrioid carcinoma
    - Consider for clear cell carcinoma or carcinosarcoma with a BRCA1/2 mutation
- In the absence of a BRCA1/2 mutation, HRD status has been correlated with magnitude of benefit from PARPi maintenance in clinical trials
    - For PARPi therapy in advanced stage disease, include measure of HR (OV-C)
- See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
- All recommendations category 2A unless stated otherwise

# Assessment

- Stage ___ (stage)
- ___ (histology)
- Response to primary therapy: ___ (response)
- Germline or somatic BRCA1/2 P/LP variant: ___ (brca_status)
- HR status: ___ (hr_status)
- Bevacizumab used during primary chemotherapy: ___ (bev_used)

# Maintenance therapy if germline or somatic BRCA1/2 P/LP variant

- If bevacizumab not used during primary chemotherapy
    - Olaparib (category 1)
    - or Niraparib (category 1)
    - or Rucaparib
    - or Observe, for select stage II disease with CR
- If bevacizumab used during primary chemotherapy
    - Olaparib + Bevacizumab (category 1)
    - or Niraparib + Bevacizumab, if unable to tolerate Olaparib
    - or single-agent Olaparib, Niraparib, or Rucaparib
        - After first-line therapy with bevacizumab, data are limited on maintenance therapy with a single-agent PARPi for patients with a germline or somatic BRCA1/2 P/LP variant
        - Based on the magnitude of benefit of PARPi maintenance therapy for other subgroups, single-agent PARPi can be considered

# Maintenance therapy if BRCA1/2 wild-type or unknown and HR deficient

- If bevacizumab not used during primary chemotherapy
    - Olaparib
    - or Niraparib
    - or Rucaparib
    - or Observe, if CR
- If bevacizumab used during primary chemotherapy
    - Olaparib + Bevacizumab (category 1)
    - or Niraparib + Bevacizumab, if unable to tolerate Olaparib
    - or Bevacizumab
    - or Olaparib

# Maintenance therapy if BRCA1/2 wild-type or unknown and HR proficient or HR unknown

- If bevacizumab not used during primary chemotherapy
    - Observe, if CR
    - or Therapy for Persistent Disease or Recurrence (OV-7)
- If bevacizumab used during primary chemotherapy
    - Bevacizumab

# Next

- Monitoring/Follow-Up (OV-6)
- Persistent disease or recurrence, go to Therapy for Persistent Disease or Recurrence (OV-7)
