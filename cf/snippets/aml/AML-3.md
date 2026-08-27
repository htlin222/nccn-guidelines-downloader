+++
id           = "aml/AML-3"
gid          = "aml"
ref          = "AML-3"
page         = 34
title        = "Follow-up and re-induction after cytarabine-based induction"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-5", "AML-6", "AML-9", "AML-B", "AML-E", "AML-G", "AML-H", "AML-I", "AML-J"]

[facets]
disease   = "aml"
histology = "myeloid"
biomarker = ["flt3", "any"]
timepoint = ["induction", "consolidation", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "induction_regimen"
type = "text"
[[variables]]
name = "bm_date"
type = "text"
[[variables]]
name = "bm_finding"
type = "enum"
options = ["residual-disease", "hypoplasia", "ambiguous"]
[[variables]]
name = "flt3"
type = "enum"
options = ["itd", "tkd", "none"]
[[variables]]
name = "mds_related"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "cardiac"
type = "text"
[[variables]]
name = "trial"
type = "enum"
options = ["available", "not-available"]
[[variables]]
name = "donor"
type = "enum"
options = ["identified", "awaiting-identification"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-3, p34
- Applies to follow-up and re-induction after cytarabine-based induction
- Systemic therapy per Principles of Systemic Therapy for AML (AML-E)
- Consider clinical trials for patients with disease with targeted molecular abnormalities
- Footnotes on AML-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Cytarabine-based induction regimen given ___ (induction_regimen)
- Follow-up bone marrow aspirate and biopsy done ___ (bm_date)
- Marrow finding ___ (bm_finding)
- FLT3 ___ (flt3)
- Therapy-related AML, antecedent MDS/CMML, or cytogenetic or molecular changes consistent with MDS ___ (mds_related)
- Cardiac function ___ (cardiac)
- Clinical trial ___ (trial)
- Donor ___ (donor)

# Follow-up bone marrow after induction

- Consider follow-up bone marrow aspirate and biopsy 14–21 days after start of therapy
    - Monitoring during therapy, see AML-G
    - When using a cytarabine-based induction regimen with doses of cytarabine >100 to 200 mg/m2, consider delaying bone marrow aspirate and biopsy to D21
    - There are limited prospective data to support this recommendation
- Residual disease
    - If ambiguous, repeat bone marrow biopsy within 7 days before proceeding with therapy
    - Proceed to re-induction
- Hypoplasia
    - Hypoplasia is defined as cellularity <20% of which the residual blasts are <5% (ie, blast percentage of residual cellularity)
    - Await recovery

# Re-induction options for residual disease

- Cytarabine
- Standard 7 + 3 (daunorubicin or idarubicin)
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- 5 + 2 [(daunorubicin or idarubicin) or (mitoxantrone for age ≥60 y)]
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- Standard 7 + 3 (daunorubicin or idarubicin) + midostaurin, for FLT3 mutated (ITD or TKD)
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- Standard 7 + 3 or 5 + 2 (daunorubicin or idarubicin) + quizartinib, for FLT3-ITD only
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- HMA (azacitidine or decitabine) + venetoclax
    - Venetoclax combination regimens may be continued for patients whose disease demonstrates clinical improvement (CR/CR with incomplete hematologic recovery [CRi]), with consideration of subsequent transplant, where appropriate
    - Patients whose disease has progressed to AML from MDS after significant exposure to HMAs (ie, azacitidine, decitabine) may be less likely to derive benefit from continued treatment with HMAs compared to patients who are HMA-naive; alternative treatment strategies should be considered
    - Patients with cytopenias with disease in remission should take breaks between cycles; for more details about cycle length, see Principles of Venetoclax (AML-J)
- CPX-351/dual-drug liposomal encapsulation of cytarabine and daunorubicin
    - For therapy-related AML other than CBF-AML, antecedent MDS/CMML, or cytogenetic or molecular changes consistent with MDS
    - Preferred only if given in induction
    - Bone marrow aspirate and biopsy 14–21 days after start of therapy
- Consider regimens for relapsed/refractory disease, including targeted therapies, if lack of response to induction
    - Response criteria, see AML-I
    - Therapy for Relapsed/Refractory Disease (AML-9)

# Documenting remission status

- Bone marrow aspirate and biopsy to document remission status upon count recovery, or by day 42 at the latest in the setting of delayed count recovery
    - When performed, bone marrow aspirate and biopsy should include cytogenetic and molecular studies, as appropriate
    - For measurable (minimal) residual disease (MRD) assessment, see AML-H
    - Response criteria, see AML-I
- Response
    - Screening LP, see AML-B
- Lack of response to induction, primary refractory

# Lack of response to induction or primary refractory

- Allogeneic HCT, see NCCN Guidelines for Hematopoietic Cell Transplantation
- Cytarabine (if not previously used as treatment for persistent disease at day 15) ± anthracycline (daunorubicin or idarubicin), if a clinical trial is not available while awaiting identification of a donor
    - For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course
- Therapy for Relapsed/Refractory Disease (AML-9)
- Best supportive care

# Next

- Residual disease at 14–21 days, proceed to re-induction
- Hypoplasia, await recovery, then document remission status at count recovery
- Response after intensive re-induction, go to consolidation (AML-6)
- Response after HMA + venetoclax re-induction, continue lower intensity therapy (AML-5)
- Lack of response to induction or primary refractory, go to AML-9
