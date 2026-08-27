+++
id           = "t-cell/ENKL-1"
gid          = "t-cell"
ref          = "ENKL-1"
page         = 53
title        = "Diagnosis of extranodal NK/T-cell lymphoma and routing to the subtype pathway"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["ENKL-2", "ENKL-C", "TCLYM-A", "TCLYM-E"]

[facets]
disease   = "t-cell"
histology = ["nk-cell", "t-cell"]
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "biopsy_type"
type = "enum"
options = ["excisional", "incisional", "core needle", "FNA", "core needle plus FNA"]
[[variables]]
name = "eber"
type = "text"
[[variables]]
name = "subtype"
type = "enum"
options = ["ENKL nasal type", "extranasal ENKL", "ANKL"]
+++

# Source

- NCCN T-Cell Lymphomas v2.2026, ENKL-1, p53
- Applies to the diagnosis of extranodal NK/T-cell lymphomas
- It is preferred that treatment occur at centers with expertise in the management of this disease
- Principles of Biomarker Testing in T-Cell Lymphomas (TCLYM-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Lesion sampled: ___ (biopsy_site)
- Procedure performed: ___ (biopsy_type)
- EBER-ISH: ___ (eber)
- Subtype: ___ (subtype)

# Essential: hematopathology review

- Review of all slides
- At least one paraffin block representative of the tumor
- Rebiopsy if consult material is nondiagnostic

# Essential: biopsy

- Excisional or incisional biopsy is preferred over core needle biopsy
- FNA biopsy alone is insufficient for the initial diagnosis of lymphoma
    - Necrosis is very common in diagnostic biopsies and may delay diagnosis significantly
    - Biopsy should include the edges of lesions to increase the odds of having viable tissue
    - It is useful to perform multiple nasopharyngeal biopsies, even in areas not clearly involved
- Core needle biopsy is an appropriate alternative to excisional or incisional biopsy under certain circumstances
- Combination of core needle biopsy and FNA biopsy may be sufficient for diagnosis
    - Only when a lymph node is not easily accessible for excisional or incisional biopsy
    - Only in conjunction with appropriate ancillary techniques

# Essential: immunophenotyping

- Adequate immunophenotyping to establish diagnosis
    - Use of Immunophenotyping/Genetic Testing in Differential Diagnosis of NK/T-Cell Neoplasms (TCLYM-E)
- IHC panel, for high clinical suspicion of NK/T-cell lymphoma, the initial panel should include
    - CD2
    - cCD3epsilon
    - CD5
    - CD56
    - TIA1
- Flow cytometry panel may include
    - CD2, CD3, CD4, CD5, CD7, CD8, CD56
    - TCR alpha/beta, TCR gamma/delta
    - TRBC1
- Typical NK-cell immunophenotype: CD20-, CD2+, cCD3epsilon+ (surface CD3-), CD4-, CD5-, CD7-/+, CD8-/+, CD43+, CD45RO+, CD56+, TCR alpha/beta-, TCR gamma/delta-, EBER+
    - TCR and Ig genes are germline (NK lineage)
    - Cytotoxic granule proteins (TIA1, perforin, granzyme B) are usually expressed
- Typical T-cell immunophenotype: CD2+, sCD3+, cCD3e+, CD4, CD5, CD7, CD8 variable, CD56+/-, EBER+, TCR alpha/beta+ or TCR gamma/delta+, cytotoxic granule proteins +
    - TRB and TRG genes are clonally rearranged

# Essential: EBER-ISH and distress

- EBER-ISH
    - A negative result should prompt pathology review for an alternative diagnosis
- Assess for distress
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Useful in certain circumstances

- Molecular analysis to detect clonal TRB and TRG gene rearrangements, or other assessment of clonality
    - Clonal TRB and TRG gene rearrangements alone are not sufficient for diagnosis, as these can also be seen in patients with non-malignant conditions
    - Results should be interpreted in the context of overall presentation
    - Principles of Biomarker Testing in T-Cell Lymphomas (TCLYM-A)
- IHC panel
    - B-cell lineage: CD20
    - T-cell lineage: CD7, CD8, CD4, granzyme B, TCR beta, TCR delta
    - Other: CD30, Ki-67

# Next

- ENKL, nasal type, go to Workup (ENKL-2)
- Extranasal ENKL, go to Workup (ENKL-2)
- ANKL, go to ENKL-C
