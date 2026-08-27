+++
id           = "mds/MDS-2"
gid          = "mds"
ref          = "MDS-2"
page         = 8
title        = "Spectrum of indolent myeloid hematopoietic disorders when MDS criteria are not met"
nccn_version = "3.2026"
nccn_date    = "01/12/26"
generated    = "2026-08-27"
see_also     = ["MDS-1", "MDS-4", "MDS-5", "MDS-C", "MDS-D"]

[facets]
disease   = "mds"
histology = "myeloid"
timepoint = ["diagnosis", "surveillance"]

[[variables]]
name = "cytopenias"
type = "text"
[[variables]]
name = "dysplasia"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "clonality"
type = "text"
[[variables]]
name = "entity"
type = "enum"
options = ["chip", "icus", "lower-risk-ccus", "high-risk-ccus"]
[[variables]]
name = "chrs"
type = "number"
+++

# Source

- NCCN Myelodysplastic Syndromes v3.2026, MDS-2, p8
- Spectrum of indolent myeloid hematopoietic disorders: CHIP, ICUS, lower-risk CCUS, high-risk CCUS
- CHIP: clonal hematopoiesis of indeterminate potential
- ICUS: idiopathic cytopenia of unknown significance
- CCUS: clonal cytopenia of undetermined significance
- All recommendations category 2A unless otherwise indicated

# Assessment

- Cytopenia(s) ___ (cytopenias)
- Dysplasia ___ (dysplasia)
- Clonality ___ (clonality)
    - Clonality is present with one or more of these features
        - A clonal karyotypic abnormality, present in at least 2 metaphases
        - A somatic mutation, present at >2% variant allele frequency (VAF)
    - Evaluation of mutations should include sequencing or panels incorporating the most frequently mutated MDS-related genes as noted on MDS-C
    - Somatic mutations in more rarely mutated genes can also provide evidence for CHIP or CCUS
    - Molecular evidence of clonal hematopoiesis provides information to allow earlier identification of predisposition states for myeloid neoplasms
        - Testing is suggested on MDS-1
- Risk of transformation
- Entity ___ (entity)

# Clinical approach by entity

- CHIP
    - Observation
    - Monitor based on clinical change
- ICUS
    - Observation
    - Monitor yearly
- Lower-risk CCUS
    - Observation
    - Monitor yearly
- High-risk CCUS
    - Observation
    - Monitor CBC 2-4x/year
    - Consider clinical trial

# Monitoring

- Institute regular monitoring of blood counts after evaluation as in MDS-1, generally at least every 3-6 months
- Monitoring is ultimately at clinical discretion, but these frequencies are reasonable based on risk of transformation

# Predictive value of the mutation profile

- Pathogenic mutations with >10% VAF, together with any of the following, have positive predictive values for myeloid neoplasms (MDS, MPN, or AML)
    - At least 2 somatic mutations
    - Spliceosome gene mutations
    - Mutations of RUNX1 or JAK2
- Isolated mutations of DNMT3A, TET2, and ASXL1 have less predictive value
- Most frequently mutated genes associated with CHIP: DNMT3A, TET2, ASXL1, RUNX1, JAK2, PPM1D, TP53, and splicing factor genes
- Myeloid neoplasm risk is increased 3-, 37-, and 348-fold in low-risk, intermediate-risk, and high-risk CHIP/CCUS, respectively, compared to unmutated controls

# Clonal hematopoiesis risk score (CHRS)

- An online calculator is available and should be considered by the clinician evaluating the patient: http://www.chrsapp.com
- CHRS ___ (chrs)
    - Low: CHRS 9.5 or below
    - Intermediate: CHRS 10-12
    - High: CHRS 12.5 or above
- The three risk strata significantly differ in the 10-year probabilities of myeloid neoplasms and overall survival, for relevant clinical discussions and follow-up
- The CHRS may have a role in clinical decision-making but requires confirmatory evidence to help assess its efficacy
- Other methods have also been reported to aid in the prediction or risk of progression of clonal hematopoiesis to myeloid neoplasms

# Next

- Diagnostic criteria for MDS met, see MDS-4, MDS-5, MDS-C, and MDS-D
