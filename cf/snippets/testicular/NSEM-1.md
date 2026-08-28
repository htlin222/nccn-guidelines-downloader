+++
id           = "testicular/NSEM-1"
gid          = "testicular"
ref          = "NSEM-1"
page         = 16
title        = "Postdiagnostic workup and clinical stage assignment for nonseminoma"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["TEST-1", "NSEM-2", "NSEM-3", "NSEM-6"]

[facets]
disease   = "testicular"
stage     = ["I", "II", "III"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "beta_hcg"
type = "text"
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
+++

# Source

- NCCN Testicular Cancer v2.2026, NSEM-1, p16
- Applies to a pathologic diagnosis of NSGCT
    - Includes mixed seminoma/nonseminoma tumors
    - Includes seminoma histology with elevated AFP
- Mildly elevated, non-rising AFP levels may not indicate presence of germ cell tumor
    - Decisions to treat should not be based solely on AFP values <20 ng/mL
    - More highly elevated AFP levels generally indicate the presence of nonseminomatous tumor elements
- Mediastinal primary nonseminoma is poor-risk disease
    - Treat with either VIP or BEP, with careful pulmonary function monitoring
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, post-orchiectomy
- Primary site ___ (primary_site)
- NSGCT histology
- Post-orchiectomy AFP ___ (afp)
- Post-orchiectomy beta-hCG ___ (beta_hcg)
- Post-orchiectomy LDH ___ (ldh)
- Clinical stage ___ (clinical_stage)

# Postdiagnostic workup

- Chest/abdomen/pelvis (C/A/P) CT or MRI
    - CT with contrast, or MRI with and without contrast
    - Not repeated if performed prior to orchiectomy
- Repeat beta-hCG, LDH, and AFP, because staging is based on post-orchiectomy values
    - Elevations of AFP either pre- or post-orchiectomy indicate the presence of nonseminomatous elements
    - Expected half-life for AFP is 5–7 days
    - If pre-orchiectomy beta-hCG was elevated, repeat beta-hCG determinations after orchiectomy to determine the trajectory and, if declining, the nadir
    - Expected half-life for beta-hCG is ≤3 days
    - Consider further workup before initiating treatment for mildly elevated beta-hCG (generally <20 IU/L), since other factors including hypogonadism and cannabis use can cause false-positive results
    - With normal imaging (ie, stage I), rising or persistently elevated beta-hCG generally indicates the presence of metastatic disease (stage IS)
    - With disease in the retroperitoneum or beyond (stage II or III), highly elevated post-orchiectomy beta-hCG (>1000 IU/L) may indicate the presence of nonseminomatous tumor elements
- Brain MRI, with and without contrast, if clinically indicated
    - Not repeated if performed prior to orchiectomy
    - Eg, beta-hCG >5000 IU/L
    - Extensive lung metastasis
    - Predominance of choriocarcinoma
    - Neurologic symptoms
    - Non-pulmonary visceral metastasis
    - AFP >10,000 ng/mL
- FDG-PET/CT scan is not clinically indicated for nonseminoma
- Recommend sperm banking, if clinically indicated
- Consider referral to social work
    - Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Next

- Stage I, with and without risk factors, go to NSEM-2
    - Risk factors for recurrence include lymphovascular invasion, or invasion of spermatic cord or scrotum
    - Some centers consider predominance of embryonal carcinoma as an additional risk factor for relapse
    - Stage a tumor with discontinuous invasion of the spermatic cord as pT3, high-risk stage I, and not as M1 (stage III) as recommended in the 8th edition of the AJCC Cancer Staging Manual
    - If surveillance is elected, include the pelvis in the imaging, due to a higher risk of pelvic relapses in these patients
- Stage IIA, IIB, go to NSEM-3
- Stage IS, IIC, IIIA, IIIB, IIIC, and brain metastasis, go to NSEM-6
