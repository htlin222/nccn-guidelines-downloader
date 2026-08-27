+++
id           = "aml/APL-5"
gid          = "aml"
ref          = "APL-5"
page         = 20
title        = "Postconsolidation therapy and PCR monitoring for molecular relapse in APL"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["APL-2", "APL-3", "APL-6", "APL-7"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["mrd-positive", "mrd-negative"]
timepoint = ["consolidation", "maintenance", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "risk"
type = "enum"
options = ["low-risk", "high-risk"]
[[variables]]
name = "consolidation_end"
type = "text"
[[variables]]
name = "pcr_result"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "pcr_date"
type = "text"
[[variables]]
name = "pcr_lab"
type = "text"
[[variables]]
name = "assay_sensitivity"
type = "text"
[[variables]]
name = "maintenance_in_protocol"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Acute Promyelocytic Leukemia (Age >=18 years) v5.2026, APL-5, p20
- Applies to APL after completion of consolidation therapy
- All recommendations category 2A unless otherwise indicated
- References on APL-7

# Assessment

- ___ (age) yo, APL
- Risk group ___ (risk)
- Consolidation completed ___ (consolidation_end)
- Long interruptions during consolidation: yes / no
- Maintenance therapy included in the initial treatment protocol ___ (maintenance_in_protocol)
- Most recent PCR ___ (pcr_result), drawn ___ (pcr_date)
- Performing lab ___ (pcr_lab), assay sensitivity level for positivity ___ (assay_sensitivity)

# Document molecular remission after consolidation

- PCR performed on a blood sample at completion of consolidation, to document molecular remission
- PCR negative
    - Maintenance therapy, if included in the initial treatment protocol
    - Then monitor by PCR for up to 2 y after completion of treatment
- PCR positive
    - Repeat PCR for confirmation within 4 wks

# Monitoring after completion of treatment

- Monitor by PCR for up to 2 y after completion of treatment
    - Prior practice guidelines recommended monitoring blood by PCR every 3 mo for 2 y to detect molecular relapse
    - Still endorsed for patients with high-risk disease
    - Still endorsed for patients who had long interruptions during consolidation
    - Low-risk disease in molecular remission at completion of consolidation: risk of relapse is low, and monitoring may not be necessary outside the setting of a clinical trial
    - With newer, more effective regimens, the value of long-term monitoring is less certain
- Monitoring PCR negative
    - Continue to monitor by PCR for up to 2 y after completion of treatment
- Monitoring PCR positive
    - Repeat PCR for confirmation within 4 wks

# Confirming a positive PCR

- Second blood sample in 2-4 weeks, in a reliable laboratory
- Send to the same lab as the previous sample, to maintain the same level of sensitivity
- The PCR testing lab should indicate the level of sensitivity of its assay for positivity
    - Most clinical labs have a sensitivity level of 10-4
- Consider consultation with a physician experienced in molecular diagnostics if results are equivocal

# Next

- Second test positive, molecular relapse confirmed, first relapse, treat as Therapy for Relapse (APL-6)
- Second test negative, frequent monitoring every 3 mo for 2 y is strongly recommended, to confirm that the test remains negative
- PCR negative, continue monitoring by PCR for up to 2 y after completion of treatment
