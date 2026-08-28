+++
id           = "testicular/NSEM-4"
gid          = "testicular"
ref          = "NSEM-4"
page         = 19
title        = "Post first-line chemotherapy management of stage IIA and IIB nonseminoma"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["TEST-B", "TEST-E", "TEST-F", "TEST-H"]

[facets]
disease    = "testicular"
stage      = "II"
timepoint  = ["primary-treatment", "surveillance"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IIA", "IIB"]
[[variables]]
name = "first_line_regimen"
type = "text"
[[variables]]
name = "markers"
type = "text"
[[variables]]
name = "mass_size"
type = "text"
[[variables]]
name = "primary_histology"
type = "text"
[[variables]]
name = "rplnd_path"
type = "text"
+++

# Source

- NCCN Testicular Cancer, Nonseminoma, v2.2026, NSEM-4, p19
- Applies to nonseminoma, stage IIA or IIB, treated with first-line chemotherapy
- Post first-line chemotherapy management, and the follow-up it leads into
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma
- Stage ___ (stage), treated with first-line chemotherapy
- First-line regimen given ___ (first_line_regimen)
- Tumor markers ___ (markers)
    - Both branches on this page start from negative markers
- Residual mass on CT or MRI ___ (mass_size)
    - Measure the transaxial long axis
    - Craniocaudal axis should not be used
- Primary tumor histology ___ (primary_histology)
    - Teratoma or yolk sac tumor in the primary tumor changes the subcentimeter branch below

# Restaging imaging

- Abdomen/pelvis CT or MRI
- Consider chest CT or MRI, or chest x-ray
- CT with contrast, and MRI with and without contrast, should be performed unless performed prior to orchiectomy
- FDG-PET/CT scan is not clinically indicated for nonseminoma

# Negative markers with no mass, or residual mass <1 cm transaxial long axis

- Surveillance (preferred)
- or Nerve-sparing bilateral RPLND in selected cases (category 2B)
    - Patients with subcentimeter residual nodes who have teratoma or yolk sac tumor in their primary tumor may be at higher risk of teratoma or viable germ cell elements in the post-chemotherapy residual nodes
    - More data are still needed to know if they are at a higher risk of relapse or worse outcomes
    - Recommended within 4 weeks of CT or MRI, and within 2 weeks of confirmation of normal tumor markers
    - Referral to a high-volume center is recommended
    - Principles of Surgery for Germ Cell Tumors (TEST-H)

# Negative markers with residual mass 1 cm or larger, transaxial long axis

- Nerve-sparing bilateral RPLND
    - Recommended within 4 weeks of CT or MRI, and within 2 weeks of confirmation of normal tumor markers
    - Referral to a high-volume center is recommended
    - Principles of Surgery for Germ Cell Tumors (TEST-H)

# Pathology of the resected residual mass

- Resection pathology ___ (rplnd_path)
- Teratoma or necrosis
    - Surveillance
- Residual embryonal, yolk sac, choriocarcinoma, or seminoma element
    - Chemotherapy (preferred) for 2 cycles, EP or TIP or VIP or VeIP
        - First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
        - Second-Line Chemotherapy Regimens for Metastatic Germ Cell Tumors (TEST-F)
    - or Surveillance for select patients
        - Surveillance is a reasonable alternative to chemotherapy for patients with residual masses that have been completely resected, if all of the residual masses have <10% viable cancer cells in the resected tissue
- EP = Etoposide/Cisplatin
- TIP = Paclitaxel/Ifosfamide/Cisplatin
- VIP = Etoposide/Ifosfamide/Cisplatin
- VeIP = Vinblastine/Ifosfamide/Cisplatin

# Next

- All branches converge on follow-up: See Follow-up for Nonseminoma, Table 10 (TEST-B 2 of 3)
