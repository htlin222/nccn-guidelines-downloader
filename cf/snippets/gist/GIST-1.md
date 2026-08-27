+++
id           = "gist/GIST-1"
gid          = "gist"
ref          = "GIST-1"
page         = 6
title        = "Workup at primary presentation and management based on the initial diagnostic evaluation"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-2", "GIST-3", "GIST-4", "GIST-A", "GIST-B", "GIST-C", "GIST-F", "ST-1"]

[facets]
disease   = "gist"
histology = "gist"
biomarker = ["kit", "pdgfra"]
timepoint = ["workup", "diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "size_cm"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["very-small-gastric-gist", "mass-suspicious-for-gist"]
[[variables]]
name = "genotype"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable-minimal-morbidity", "resectable-significant-morbidity", "unresectable-or-metastatic"]
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, GIST-1, p6
- Workup at primary presentation, and management based on the results of the initial diagnostic evaluation
- All patients should be evaluated and treated by a multidisciplinary team with expertise and experience in gastrointestinal stromal tumors (GIST)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Primary site ___ (site)
- Size ___ (size_cm) cm
- Presentation ___ (presentation)
    - Very small gastric GIST <2 cm
    - Mass known to be or clinically suspicious for GIST
- Genotype ___ (genotype)
- Resectability ___ (resectability)

# Very small gastric GIST <2 cm

- Consider endoscopic ultrasound-guided fine-needle aspiration biopsy (EUS-FNAB) (GIST-A)
- Or endoscopic ultrasound-guided core needle biopsy (EUS-CNB) (GIST-A)
- Assess for high-risk EUS features
    - Irregular border
    - Cystic spaces
    - Ulceration
    - Echogenic foci
    - Heterogeneity
- Assess for high-risk pathologic biopsy features
    - Presence of mitoses
    - Tumor necrosis
- No high-risk EUS or biopsy features
    - Consider periodic endoscopic surveillance (GIST-F)
        - Endoscopic ultrasonography surveillance should only be considered after a thorough discussion with the patient regarding the risks and benefits
    - Or consider periodic radiographic surveillance (GIST-F)
- High-risk EUS features, or high-risk biopsy features
    - Complete surgical resection (GIST-C)

# Mass known to be or clinically suspicious for GIST

- Stage per AJCC Staging, 8th Edition (ST-1)
- Imaging (GIST-F)
- Genotyping should be performed when medical therapy is being considered
    - Mutational analysis may predict response to therapy with tyrosine kinase inhibitors (TKIs) (GIST-B)
    - Tumors with succinate dehydrogenase (SDH) deficiency or NF1 mutations that lack mutations in KIT/PDGFRA may be considered for observation, as most, but not all, have more indolent behavior
- If neoadjuvant therapy is planned, biopsy for diagnosis, molecular testing, and (if feasible) risk stratification (GIST-A)
    - See NCCN Guidelines for Soft Tissue Sarcoma if the pathology results indicate sarcomas of gastrointestinal origin other than GIST

# Resectability of a mass known to be or suspicious for GIST

- Resectable with minimal morbidity
    - Complete surgical resection (GIST-C)
- Resectable with significant morbidity
    - Neoadjuvant therapy for genotype-sensitive disease should be considered for locally advanced GIST in certain anatomical locations (eg, rectum, esophageal and esophagogastric junction, duodenum)
    - Also consider it if a multivisceral resection would be required to resect all gross tumor
    - Also consider it in patients who have significant comorbidities and are not fit for surgery
    - Extensive surgery associated with significant morbidity (ie, total gastrectomy to reduce risk of recurrence in stomach) is generally not recommended for SDH-deficient GIST with multifocal disease
- Unresectable or metastatic disease
    - Consider baseline chest imaging

# Next

- No high-risk EUS or biopsy features, periodic endoscopic or radiographic surveillance (GIST-F)
- After complete surgical resection, postoperative outcomes and treatment, go to GIST-3
- Resectable with significant morbidity, see GIST-2 for neoadjuvant therapy based on molecular testing to decrease surgical morbidity
- Unresectable or metastatic disease, go to GIST-4
