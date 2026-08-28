+++
id           = "ped_cns/PGLIO-4"
gid          = "ped_cns"
ref          = "PGLIO-4"
page         = 11
title        = "Treatment of recurrent or progressive pediatric diffuse high-grade glioma"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PGLIO-2", "PGLIO-3", "PGLIO-B", "PGLIO-C", "PGLIO-D", "PGLIO-E"]

[facets]
disease   = "ped_cns"
stage     = "recurrent"
biomarker = ["braf", "ntrk", "tmb-high"]
timepoint = "recurrence"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "molecular"
type = "text"
[[variables]]
name = "pattern"
type = "enum"
options = ["local", "diffuse", "multiple"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "resection-not-recommended", "resection-not-elected"]
[[variables]]
name = "ps"
type = "text"
+++

# Source

- NCCN Pediatric Diffuse High-Grade Gliomas v1.2026, PGLIO-4, p11
- Applies to recurrent disease or progressive disease for diffuse high-grade gliomas
- Diagnoses covered include
    - Diffuse hemispheric glioma, H3 G34-mutant
    - Pediatric diffuse high-grade glioma, H3 wild-type and IDH wild-type
    - Infant-type hemispheric glioma
    - Diffuse midline glioma, H3 K27-altered
    - Other high-grade glial entities
- Does not apply to oligodendroglioma, IDH1/2-mutant and 1p/19q-codeleted
- Does not apply to astrocytoma, IDH1/2-mutant
- Pathology: PGLIO-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (diagnosis)
- ___ (molecular)
- Recurrent or progressive disease confirmed
- Pattern of recurrence: ___ (pattern)
- Resectability: ___ (resectability)
- Performance status: ___ (ps)

# Local recurrence, resectable

- Resection (PGLIO-C)
    - Consider enrollment in phase 0 or preoperative clinical trials before resection
- Brain MRI after resection
    - Highly consider restaging spine imaging

# Local recurrence, unresectable or resection not recommended or not elected

- Clinical trial (preferred)
- or Surgery for symptomatic, large lesion
    - Re-resection at the time of recurrence may improve outcomes
    - As in adult patients with diffuse high-grade glioma, tumor involvement in specific critical brain areas and poor PS score may be associated with unfavorable re-resection outcomes
- and/or Chemotherapy (PGLIO-E)
- and/or Targeted therapy based on the molecular composition of the tumor (PGLIO-E)
    - Consider checkpoint blockade for high tumor mutational burden (TMB), or personal or family history of CMMRD
    - RAF and MEK inhibition is recommended for tumors with BRAF V600E mutation
    - TRK inhibitors are recommended for tumors with NTRK1/2/3 gene fusion
- and/or Reirradiation (PGLIO-D)
- and/or Palliative/best supportive care if poor performance status (PS)

# Diffuse or multiple recurrence

- Palliative/best supportive care, see NCCN Guidelines for Palliative Care
