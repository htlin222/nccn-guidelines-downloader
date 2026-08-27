+++
id           = "head-and-neck/ST-4"
gid          = "head-and-neck"
ref          = "ST-4"
page         = 132
title        = "AJCC TNM staging system, primary tumor (T), for oropharynx (p16-) and hypopharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ST-5", "ORPH-1", "HYPO-1"]

[facets]
disease   = "head-and-neck"
timepoint = "staging"

[[variables]]
name = "primary_site"
type = "enum"
options = ["oropharynx p16-negative", "hypopharynx"]
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "subsites"
type = "text"
[[variables]]
name = "epiglottis_extension"
type = "enum"
options = ["absent", "present", "cannot be assessed"]
[[variables]]
name = "hemilarynx_fixation"
type = "enum"
options = ["absent", "present", "cannot be assessed"]
[[variables]]
name = "adjacent_structures"
type = "text"
[[variables]]
name = "t_category"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ST-4, p132
- Table 3, American Joint Committee on Cancer (AJCC) TNM Staging System for the Oropharynx (p16-) and Hypopharynx, 8th ed., 2017
- Not included: p16-positive (p16+) oropharyngeal cancers
- Not included: nasopharyngeal cancer
- This page covers the primary tumor (T) definitions only
- Used with permission of the American College of Surgeons, Chicago, Illinois; the original source is the AJCC Cancer Staging Manual, Eighth Edition (2017), published by Springer International Publishing

# Assessment

- Primary site: ___ (primary_site)
- Greatest tumor dimension: ___ (tumor_size)
- Subsites of hypopharynx involved, or adjacent site involved: ___ (subsites)
- Extension to lingual surface of epiglottis: ___ (epiglottis_extension)
- Fixation of hemilarynx: ___ (hemilarynx_fixation)
- Adjacent structures invaded: ___ (adjacent_structures)
- T category: ___ (t_category)

# Primary tumor (T), oropharynx (p16-)

- TX, primary tumor cannot be assessed
- Tis, carcinoma in situ
- T1, tumor 2 cm or smaller in greatest dimension
- T2, tumor larger than 2 cm but not larger than 4 cm in greatest dimension
- T3, either of
    - Tumor larger than 4 cm in greatest dimension
    - Extension to lingual surface of epiglottis
- T4, moderately advanced or very advanced local disease
- T4a, moderately advanced local disease, tumor invades any of
    - Larynx
        - Mucosal extension to lingual surface of epiglottis from primary tumors of the base of the tongue and vallecula does not constitute invasion of the larynx
    - Extrinsic muscle of tongue
    - Medial pterygoid
    - Hard palate
    - Mandible
- T4b, very advanced local disease, tumor invades any of
    - Lateral pterygoid muscle
    - Pterygoid plates
    - Lateral nasopharynx
    - Skull base
    - Or encases carotid artery

# Primary tumor (T), hypopharynx

- TX, primary tumor cannot be assessed
- Tis, carcinoma in situ
- T1, tumor limited to one subsite of hypopharynx and/or 2 cm or smaller in greatest dimension
- T2, without fixation of hemilarynx, and any of
    - Tumor invades more than one subsite of hypopharynx
    - Tumor invades an adjacent site
    - Tumor larger than 2 cm but not larger than 4 cm in greatest dimension
- T3, any of
    - Tumor larger than 4 cm in greatest dimension
    - Fixation of hemilarynx
    - Extension to esophageal mucosa
- T4, moderately advanced or very advanced local disease
- T4a, moderately advanced local disease, tumor invades any of
    - Thyroid/cricoid cartilage
    - Hyoid bone
    - Thyroid gland
    - Esophageal muscle
    - Central compartment soft tissue
        - Central compartment soft tissue includes prelaryngeal strap muscles and subcutaneous fat
- T4b, very advanced local disease, tumor invades any of
    - Prevertebral fascia
    - Encases carotid artery
    - Involves mediastinal structures
