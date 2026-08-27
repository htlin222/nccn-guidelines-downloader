+++
id           = "neuroendocrine/PHEO-1"
gid          = "neuroendocrine"
ref          = "PHEO-1"
page         = 54
title        = "Tumor type evaluation of pheochromocytoma/paraganglioma before first-line treatment"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["AGT-1", "PHEO-2", "NET-1", "PDNEC-1"]

[facets]
disease   = "neuroendocrine"
histology = "neuroendocrine"
timepoint = ["workup", "diagnosis", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_type"
type = "enum"
options = ["pheochromocytoma", "paraganglioma"]
[[variables]]
name = "tumor_site"
type = "text"
[[variables]]
name = "metanephrines"
type = "text"
[[variables]]
name = "catecholamines"
type = "text"
[[variables]]
name = "adrenal_imaging"
type = "text"
[[variables]]
name = "genetic_testing"
type = "text"
[[variables]]
name = "mets_suspected"
type = "enum"
options = ["yes", "no", "unknown"]
+++

# Source

- NCCN Neuroendocrine and Adrenal Tumors v1.2026, PHEO-1, p54
- Applies to pheochromocytoma/paraganglioma (PCC/PGL), tumor type evaluation before first-line treatment
- Principles of pathology (NE-E)
- Consider medical alert ID for hormonally secreting PCCs and PGLs in situ or metastatic disease
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (tumor_type)
- Site ___ (tumor_site)
- Plasma free or 24-h urine fractionated total metanephrines ___ (metanephrines)
- Fractionated catecholamines ___ (catecholamines)
- Adrenal protocol CT or MRI ___ (adrenal_imaging)
- Genetic counseling and testing ___ (genetic_testing)
- Metastatic or multifocal disease suspected ___ (mets_suspected)

# Recommended evaluation

- Plasma free or 24-h urine fractionated total metanephrines and catecholamines (NE-A 2 of 4)
    - Review concurrent medication(s) for those that may interfere with plasma metanephrines evaluation
    - Elevations that are 3 times above the upper limit of normal are diagnostic
    - For cervical PGL, measuring serum and/or 24-hour urine fractionated catecholamines (for dopamine) or methoxytyramine (if available) may be appropriate
        - Methoxytyramine is helpful as the metabolite of dopamine in cervical tumors, but it is not commercially available in many places
    - Both catecholamines and metanephrines/normetanephrines can represent false-positive results
        - Some investigators support the use of fractionated urinary and/or plasma catecholamines as a way to differentiate false-positive results and to differentiate epinephrine-secreting PCC
- Adrenal protocol CT or MRI, if not already done (AGT-1)
- Genetic counseling and testing for inherited genetic syndromes (NE-F)

# If metastatic or multifocal disease is suspected, as appropriate (NE-B)

- Data on the role of functional imaging in PCC/PGL are evolving and the preferred method remains unclear
- Multiphasic abdomen/pelvis CT or MRI
    - Multiphasic imaging studies are performed with IV contrast in arterial and portal venous phases
- SSTR-PET/CT or SSTR-PET/MRI
    - Skull vertex to mid-thigh, with multiphase IV contrast when possible
    - SSTR-PET tracers: 68Ga-DOTATATE, 64Cu-DOTATATE, and 68Ga-DOTATOC
- FDG-PET/CT, skull base to mid-thigh
- Chest CT with or without contrast
- Meta-iodobenzylguanidine (MIBG) scan with single-photon emission CT (SPECT)/CT
    - MIBG scans are less sensitive than FDG-PET and 68Ga-DOTATATE for metastatic and multifocal PCCs/PGLs, in patients with von Hippel Lindau (VHL) and succinate dehydrogenase (SDH) syndromes, but not in patients with MEN1 or NF1 syndromes or some patients with sporadic PCC
    - SPECT/CT imaging of involved sites is recommended
    - Obtain MIBG scan if considering treatment with I131-MIBG
- Consider molecular profiling of tumor tissue
    - Consider tumor/somatic molecular profiling for patients with locoregional unresectable/metastatic disease who are candidates for anticancer therapy, to identify actionable alterations
    - Testing on tumor tissue is preferred; ctDNA testing can be considered if tumor tissue testing is not feasible

# Next

- After evaluation, go to first-line treatment, PHEO-2
