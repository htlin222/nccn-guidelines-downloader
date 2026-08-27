+++
id           = "ampullary/AMP-2"
gid          = "ampullary"
ref          = "AMP-2"
page         = 8
title        = "Treatment of an ampullary adenoma, by resectability and margin status"
nccn_version = "2.2026"
nccn_date    = "02/10/2026"
generated    = "2026-08-27"
see_also     = ["AMP-1", "AMP-3"]

[facets]
disease   = "ampullary"
timepoint = ["primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "lesion"
type = "text"
[[variables]]
name = "endoscopic_removal_possible"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive", "pending", "not-applicable"]
+++

# Source

- NCCN Ampullary Adenocarcinoma v2.2026, AMP-2, p8
- Applies to a clinical presentation of ampullary adenoma
- Principles of Surgical Technique: AMP-C
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Ampullary adenoma
- ___ (lesion)
- Endoscopic removal possible: ___ (endoscopic_removal_possible)
- Margins: ___ (margin_status)

# Endoscopic removal

- Endoscopic removal, per Principles of Surgical Technique (AMP-C)
- Negative margins
    - Endoscopic surveillance
- Positive margins, choose one
    - Re-excision (AMP-C)
        - Negative margins after re-excision, endoscopic surveillance
        - Positive margins after re-excision, surgical ampullectomy or pancreatoduodenectomy
    - Surgical ampullectomy (AMP-C)
        - Should be performed at a high-volume tertiary center
        - Can be chosen at surgical centers where there is expertise for this technique
        - No surveillance afterwards
    - Pancreatoduodenectomy (AMP-C)
        - Should be performed at a high-volume tertiary center
        - No surveillance afterwards

# If endoscopic removal not possible

- Pancreatoduodenectomy (AMP-C)
    - Should be performed at a high-volume tertiary center
    - No surveillance afterwards

# Next

- Adenocarcinoma, go to AMP-3
- Adenoma with negative margins, endoscopic surveillance
- Adenoma after surgical ampullectomy or pancreatoduodenectomy, no surveillance
