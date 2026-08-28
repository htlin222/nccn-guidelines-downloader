+++
id           = "testicular/NSEM-7"
gid          = "testicular"
ref          = "NSEM-7"
page         = 22
title        = "Postchemotherapy management of a partial response to primary treatment in nonseminoma, by residual masses and serum tumor markers"
nccn_version = "2.2026"
nccn_date    = "06/16/2026"
generated    = "2026-08-28"
see_also     = ["NSEM-8", "TEST-B", "TEST-E", "TEST-F"]

[facets]
disease    = "testicular"
timepoint  = ["primary-treatment", "surveillance"]
population = "male"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "residual_masses"
type = "text"
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "bhcg"
type = "text"
[[variables]]
name = "marker_trend"
type = "enum"
options = ["normal", "elevated-and-rising", "elevated-but-stable", "mildly-elevated-and-normalizing"]
[[variables]]
name = "resection_path"
type = "text"
+++

# Source

- NCCN Testicular Cancer, Nonseminoma, v2.2026, NSEM-7, p22
- Applies to nonseminoma with a partial response after primary treatment, with residual masses
- Postchemotherapy management, sorted by whether AFP and beta-hCG are normal or abnormal
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, nonseminoma, partial response after primary treatment
- Residual masses ___ (residual_masses)
- Serum AFP ___ (afp)
    - Mildly elevated, non-rising AFP levels may not indicate presence of germ cell tumor
    - Decisions to treat should not be based solely on AFP values <20 ng/mL
    - More highly elevated AFP levels generally indicate the presence of nonseminomatous tumor elements
- Serum beta-hCG ___ (bhcg)
    - Further workup should be considered before initiating treatment for mildly elevated beta-hCG (generally <20 IU/L), since other factors, including hypogonadism and cannabis use, can cause false-positive results
- Marker pattern ___ (marker_trend)

# Partial response, residual masses with normal AFP and beta-hCG levels

- Surgical resection of all residual masses
    - Recommend referral to a high-volume center for residual masses with abnormal AFP and/or beta-hCG levels
    - If there is a teratoma with somatic-type malignancy, consider histology-directed therapy and referral to an academic center with a high-volume germ cell tumor unit
- Then follow the resection pathology below

# Partial response, residual masses with abnormal AFP and/or beta-hCG levels

- Recommend referral to a high-volume center for residual masses with abnormal AFP and/or beta-hCG levels
- Consider brain imaging and testicular ultrasound in patients with elevated or rising markers after primary or secondary chemotherapy, to evaluate for occult brain metastases or contralateral primary disease
- Elevated and rising AFP and/or beta-hCG levels
    - Second-Line Therapy (TEST-F)
    - or Surgery in highly select cases
        - Recommend referral to a high-volume center
        - Highly select means presentation of resectable retroperitoneal-only disease, significant factors that preclude chemotherapy use, and/or presence of cystic components
- Elevated but stable AFP and/or beta-hCG levels
    - Close surveillance
    - or Surgery in highly select cases
        - Recommend referral to a high-volume center
        - Highly select means presentation of resectable retroperitoneal-only disease, significant factors that preclude chemotherapy use, and/or presence of cystic components
- Mildly elevated and normalizing AFP and/or beta-hCG levels
    - Consider surgical resection of all residual masses
        - Recommend referral to a high-volume center
    - Then follow the resection pathology below

# Pathology of the resected residual masses

- Resection pathology ___ (resection_path)
- Teratoma or necrosis
    - Surveillance
- Residual embryonal, yolk sac, choriocarcinoma, or seminoma element
    - Chemotherapy for 2 cycles, EP or TIP or VIP or VeIP
        - Consider EP for low-volume residual disease
        - First-Line Chemotherapy Regimens for Germ Cell Tumors (TEST-E)
        - Second-Line Chemotherapy Regimens for Metastatic Germ Cell Tumors (TEST-F)
    - or Surveillance for select patients
        - Surveillance is a reasonable alternative to chemotherapy for patients with residual masses that have been completely resected, if all of the residual masses have <10% viable cancer cells in the resected tissue
- EP = Etoposide/Cisplatin
- TIP = Paclitaxel/Ifosfamide/Cisplatin
- VIP = Etoposide/Ifosfamide/Cisplatin
- VeIP = Vinblastine/Ifosfamide/Cisplatin

# Next

- Follow-up: See Follow-up for Nonseminoma, Table 10 (TEST-B 2 of 3)
- For recurrence, see Second-Line Therapy (NSEM-8)
- Elevated and rising markers, go to Second-Line Therapy (TEST-F)
