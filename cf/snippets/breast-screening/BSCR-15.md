+++
id           = "breast-screening/BSCR-15"
gid          = "breast-screening"
ref          = "BSCR-15"
page         = 23
title        = "Follow-up evaluation after core needle biopsy"
nccn_version = "1.2026"
nccn_date    = "03/05/26"
generated    = "2026-08-30"
see_also     = ["BSCR-16", "BSCR-1", "BSCR-7", "BSCR-9", "BSCR-14"]

[facets]
disease   = "breast-screening"
timepoint = ["diagnosis", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right", "bilateral"]
[[variables]]
name = "lesion"
type = "text"
[[variables]]
name = "imaging_findings"
type = "text"
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "pathology_category"
type = "enum"
options = ["benign", "indeterminate", "malignant"]
[[variables]]
name = "concordance"
type = "enum"
options = ["concordant", "discordant"]
+++

# Source

- NCCN Breast Cancer Screening and Diagnosis v1.2026, BSCR-15, p23
- Applies to follow-up evaluation after core needle biopsy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) breast
- Lesion biopsied ___ (lesion)
- Imaging findings ___ (imaging_findings)
- Core needle biopsy pathology ___ (pathology)
- Pathology category ___ (pathology_category)
- Concordance with imaging ___ (concordance)
    - Concordance established by radiologist/breast specialist after review of core needle biopsy pathology report and imaging findings
    - This may require discussion/review with pathologist

# Benign pathology

- Pathology is concordant with imaging findings
    - Screening (BSCR-1)
        - Physical examination and/or imaging at 6 or 12 months for up to 1 year may be considered to assess for changes
        - There may be variability on the follow-up interval of physical examination and/or imaging based on the level of suspicion
        - While most would return to annual screening, there is the option of physical examination with or without further imaging for individuals ˂40 years
- Benign and image discordant
    - Surgical excision (BSCR-16)
        - In certain situations, at the discretion of the radiologist, repeat attempt at percutaneous sampling may be warranted

# Indeterminate pathology, ADH or non-classic LCIS

- Surgical excision (BSCR-16) or repeat core needle biopsy
- ADH
    - Select patients may be suitable for monitoring in lieu of surgical excision
- Non-classic LCIS
    - Clinicians should consider complete excision with negative margins for non-classic LCIS (pleomorphic or florid LCIS) on a core biopsy
    - Outcomes data regarding treatment of individuals with non-classic LCIS are limited, due in part to a paucity of histologic categorization of variants of LCIS

# Indeterminate pathology, other specific histologies

- For select patients with other specific histologies, routine excision is generally not required
    - Classic LCIS
    - ALH
    - Flat epithelial atypia (FEA)
    - Papillomas without atypia
    - Fibroepithelial lesions favoring fibroadenoma
    - Radial scars adequately sampled without atypia
- Other histologies that may require additional tissue
    - Mucin-producing lesions
    - Potential phyllodes tumor
    - Papillary lesions
    - Radial scar
    - Histologies of concern to pathologist
- Discordant with imaging
    - Surgical excision (BSCR-16)
- Pathology is concordant with imaging findings
    - Screening (BSCR-1)
    - Or physical examination and/or imaging at 6 to 12 mo for up to 1 y to assess for changes
        - There may be variability on the follow-up interval of physical examination and/or imaging based on the level of suspicion
    - And counseling for risk assessment, see NCCN Guidelines for Breast Cancer Risk Reduction

# Malignant pathology

- See NCCN Guidelines for Breast Cancer

# Next

- Benign and concordant with imaging, go to BSCR-1
- Benign and image discordant, surgical excision, go to BSCR-16
- ADH or non-classic LCIS, surgical excision, go to BSCR-16
- Other specific histologies discordant with imaging, surgical excision, go to BSCR-16
- Other specific histologies concordant with imaging, go to BSCR-1
- Malignant, see NCCN Guidelines for Breast Cancer
