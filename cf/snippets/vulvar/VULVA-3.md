+++
id           = "vulvar/VULVA-3"
gid          = "vulvar"
ref          = "VULVA-3"
page         = 8
title        = "Adjuvant therapy to the primary site based on primary tumor risk factors"
nccn_version = "2.2026"
nccn_date    = "01/06/26"
generated    = "2026-08-28"
see_also     = ["VULVA-2", "VULVA-4", "VULVA-C", "VULVA-D", "VULVA-8"]

[facets]
disease   = "vulvar"
timepoint = "adjuvant"

[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive-invasive", "positive-hsil"]
[[variables]]
name = "close_margin"
type = "text"
[[variables]]
name = "lvsi"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "depth_of_invasion"
type = "text"
[[variables]]
name = "pattern_of_invasion"
type = "text"
[[variables]]
name = "nodal_involvement"
type = "text"
[[variables]]
name = "resectable"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Vulvar Cancer (Squamous Cell Carcinoma and Adenocarcinoma) v2.2026, VULVA-3, p8
- Applies to adjuvant therapy to the primary site, chosen on primary tumor risk factors after surgery for the primary tumor
- Surgery per Principles of Surgery (VULVA-C)
- Radiation per Principles of Radiation Therapy (VULVA-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Margin status of the primary tumor ___ (margin_status)
- Other primary risk factors
    - Close tumor margins ___ (close_margin)
    - Lymphovascular space invasion (LVSI) ___ (lvsi)
    - Tumor size ___ (tumor_size)
    - Depth of invasion ___ (depth_of_invasion)
    - Pattern of invasion, spray or diffuse ___ (pattern_of_invasion)
    - Nodal involvement, as an indicator of LVSI ___ (nodal_involvement)
        - May also impact selection of adjuvant therapy to the primary site
- Resectable without removing proximal urethra / bladder / anus ___ (resectable)

# Negative margins

- Observe
- Or adjuvant external beam radiation therapy (EBRT), based on the other risk factors listed above
    - Principles of Radiation Therapy (VULVA-D)

# Positive margins for invasive disease

- Re-excision
    - Principles of Surgery (VULVA-C)
    - If re-excision gives negative margins for invasive disease
        - Observe, or adjuvant EBRT based on the other risk factors listed above
    - If re-excision still leaves positive margin(s) for invasive disease
        - Adjuvant EBRT (VULVA-D)
- Unresectable without removing proximal urethra / bladder / anus
    - Adjuvant EBRT (VULVA-D)

# Positive margins for HSIL

- Positive margins for HSIL are noninvasive disease
- Management of positive margins for HSIL should be individualized

# Next

- Surveillance (VULVA-8)
