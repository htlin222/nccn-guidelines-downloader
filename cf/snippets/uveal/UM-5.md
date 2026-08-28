+++
id           = "uveal/UM-5"
gid          = "uveal"
ref          = "UM-5"
page         = 12
title        = "Workup and treatment for ocular recurrence of uveal melanoma"
nccn_version = "2.2026"
nccn_date    = "03/18/26"
generated    = "2026-08-28"
see_also     = ["UM-6", "UM-B"]

[facets]
disease   = "uveal"
stage     = "recurrent"
timepoint = "recurrence"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "side"
type = "enum"
options = ["left", "right"]
[[variables]]
name = "prior_treatment"
type = "text"
[[variables]]
name = "recurrence_pattern"
type = "enum"
options = ["intraocular", "extraocular", "orbital after prior enucleation"]
[[variables]]
name = "extent"
type = "text"
+++

# Source

- NCCN Melanoma: Uveal v2.2026, UM-5, p12
- Applies to ocular recurrence
- Principles of Radiation Therapy: UM-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (side) eye
- Ocular recurrence
- Prior treatment: ___ (prior_treatment)
- Recurrence pattern: ___ (recurrence_pattern)
- Extent of local recurrence / distant metastasis: ___ (extent)

# Workup

- History and physical exam
- Biopsy if clinically appropriate
    - Extraocular recurrence or metastasis should be confirmed histologically whenever possible, or if clinically indicated
    - Biopsy techniques may include core needle biopsy, if possible, or otherwise fine-needle aspiration (FNA)
    - Consider genetic testing if it might affect treatment options
    - Intraocular recurrence can often be diagnosed and managed without a biopsy
    - Additional prognostic FNA biopsy may be valuable
- Ocular orbital imaging, if not previously done or as clinically indicated
- Imaging to evaluate extent of local recurrence / distant metastasis, and/or for baseline staging
    - The most frequent site of metastasis is the liver; other sites include lungs, skin/soft tissue, and bones
    - MRI abdomen with IV gadolinium-based contrast (preferred)
    - CT chest/abdomen/pelvis with IV iodinated contrast
    - CT chest with or without IV contrast
    - Whole-body FDG-PET/CT
    - In select patients with renal failure and/or iodinated contrast allergy, MR abdomen with gadolinium-based contrast is the preferred imaging study over CT
    - If no IV contrast can be administered, MR without contrast is superior to nonenhanced CT
    - Ultrasound of the liver can be used in select patients; limited value given its operator-dependent nature, limited sensitivity in patients with obesity, and lack of specificity
    - Brain MRI with IV contrast may be performed if neurologic symptoms are present, but routine CNS imaging is not recommended
    - Abdominal imaging should be performed with IV contrast unless contraindicated

# Treatment for intraocular recurrence, limited to eye, no orbital involvement

- RT, plaque brachytherapy or particle beam (UM-B)
- or Enucleation
- or Laser ablation
    - For small recurrences in patients who cannot undergo RT or surgery, transpupillary thermotherapy is recommended

# Treatment for extraocular involvement

- Consider surgical resection
    - May potentially include partial orbital tumor resection, enucleation, or exenteration
    - With or without RT to orbit (UM-B)
    - With or without cryotherapy to orbital tumor
- or RT, plaque brachytherapy or particle beam (UM-B)

# Treatment for orbital involvement in patients with prior enucleation

- Surgical resection
    - May potentially include partial orbital tumor resection, enucleation, or exenteration
- or Cryotherapy to orbital tumor and/or RT to orbit (UM-B)

# Next

- Distant metastatic disease, go to UM-6
