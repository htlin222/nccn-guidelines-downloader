+++
id           = "testicular/SEM-5"
gid          = "testicular"
ref          = "SEM-5"
page         = 12
title        = "Post first-line chemotherapy management of pure seminoma, stage IIA-IIC and III"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["SEM-4", "SEM-6", "TEST-A", "TEST-I", "TEST-E"]

[facets]
disease    = "testicular"
stage      = ["II", "III"]
timepoint  = ["surveillance", "recurrence"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "enum"
options = ["IIA", "IIB", "IIC", "III"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "wks_postchemo"
type = "number"
[[variables]]
name = "residual_size"
type = "number"
[[variables]]
name = "afp"
type = "number"
[[variables]]
name = "hcg"
type = "number"
+++

# Source

- NCCN Testicular Cancer v2.2026, SEM-5, p12
- Applies to pure seminoma, stage IIA, IIB, IIC, or III, after first-line treatment with chemotherapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, pure seminoma
- Stage ___ (stage)
- First-line chemotherapy given: ___ (regimen)
- ___ (wks_postchemo) wks since completion of chemotherapy
- Residual mass ___ (residual_size) cm
- Serum AFP ___ (afp) ng/mL
- Serum beta-hCG ___ (hcg) IU/L
- Mass growing or markers rising: no / yes

# No residual mass, or residual mass 3 cm or less, with normal serum AFP and beta-hCG

- Surveillance
    - C/A/P CT or MRI
        - CT with contrast, or MRI with and without contrast
    - Serum tumor markers
- See Follow-up for Seminoma, Table 3 (TEST-A 2 of 3) or 6 (TEST-A 3 of 3)
- For recurrence, see Second-Line Therapy (SEM-6)

# Residual mass greater than 3 cm, with normal serum AFP and beta-hCG

- Consider FDG-PET/CT from skull base to midthigh
    - 6 wks or more postchemotherapy
- Negative or indeterminate FDG-PET/CT
    - Surveillance
    - See Follow-up for Seminoma, Table 6 (TEST-A 3 of 3)
- Positive FDG-PET/CT
    - Principles of Imaging (TEST-I)
    - Consider referral to a high-volume center
    - Repeat imaging in 6-12 weeks
        - If persistently positive, proceed with resection or biopsy
    - or Resection of residual mass
    - or Biopsy

# Result of resection or biopsy

- Positive for viable seminoma
    - In rare cases, nonseminomatous elements will be identified; if they are nonteratomatous, proceed in the same fashion as for viable seminoma
    - Complete resection
        - Consider 2 cycles of adjuvant chemotherapy
            - EP or TIP or VIP or VeIP
        - See Follow-up for Seminoma, Table 6 (TEST-A 3 of 3)
        - For recurrence, see Second-Line Therapy (SEM-6)
    - Incomplete resection, or positive biopsy, or progression
        - Second-Line Therapy (SEM-6)
- Negative for viable seminoma
    - See Follow-up for Seminoma, Table 6 (TEST-A 3 of 3)

# Progressive disease (growing mass or rising markers)

- Second-Line Therapy (SEM-6)
- Before treating on marker elevation alone
    - Mildly elevated, non-rising AFP levels may not indicate presence of germ cell tumor
    - Decisions to treat should not be based solely on AFP values under 20 ng/mL
    - More highly elevated AFP levels generally indicate the presence of nonseminomatous tumor elements
    - Consider further workup before initiating treatment for mildly elevated beta-hCG (generally under 20 IU/L)
        - Other factors, including hypogonadism and cannabis use, can cause false-positive results

# Next

- Surveillance, see Follow-up for Seminoma, Table 3 (TEST-A 2 of 3) or Table 6 (TEST-A 3 of 3)
- Recurrence, incomplete resection, positive biopsy, or progression, go to Second-Line Therapy (SEM-6)
