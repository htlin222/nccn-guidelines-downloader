+++
id           = "colorectal_screening/CSCR-9"
gid          = "colorectal_screening"
ref          = "CSCR-9"
page         = 22
title        = "Personal history of polyp(s) found at colonoscopy: which finding drives which follow-up"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1A", "CSCR-8", "CSCR-10", "CSCR-A"]

[facets]
disease   = "colorectal_screening"
timepoint = ["surveillance", "genetic-testing"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "colonoscopy_date"
type = "text"
[[variables]]
name = "polyp_histology"
type = "text"
[[variables]]
name = "largest_polyp_size"
type = "text"
[[variables]]
name = "count_single"
type = "number"
[[variables]]
name = "count_cumulative"
type = "number"
[[variables]]
name = "malignant_polyp"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "germline_result"
type = "enum"
options = ["negative", "positive", "not-performed"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-9, p22
- Applies to a personal history of polyp(s) found at colonoscopy
    - Adenomatous polyp(s)
    - SSP/SSL(s)
    - Traditional serrated adenoma(s) (TSA)
    - Large (≥1 cm) hyperplastic polyp(s)
        - There are limited data to support whether individuals with hyperplastic polyps ≥1 cm in size represent an increased risk group
        - Several analyses suggest that many of the larger polyps classified as hyperplastic in the past were reclassified as SSPs/SSLs when reviewed by experts
        - For this reason, it is reasonable to follow patients with hyperplastic polyps ≥1 cm in size similarly to patients with SSPs/SSLs, particularly if they have not been reviewed by an expert GI pathologist
- Surveillance colonoscopy is recommended in adults aged 45–75 years with a history of adenomas
    - Surveillance of individuals between ages 76–85 years should be individualized, and include a discussion of risks and benefits of continued colonoscopy based on
        - Comorbidity status
        - Estimated life expectancy
        - Findings on the last or the most recent colonoscopy
- For definitions of commonly used terms, see CSCR-GLOS
- For details on classification, see footnote c on CSCR-1A
- Footnotes on CSCR-9A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Date of the colonoscopy at which the polyp(s) were found: ___ (colonoscopy_date)
- Polyp histology: ___ (polyp_histology)
- Size of the largest polyp: ___ (largest_polyp_size)
- Number of adenomatous polyps and/or SSP/SSL(s) in this single colonoscopy: ___ (count_single)
- Cumulative number of adenomatous polyps and/or SSP/SSL(s) over multiple colonoscopies: ___ (count_cumulative)
- Malignant polyp(s) present: ___ (malignant_polyp)
- Germline testing result: ___ (germline_result)

# Follow-up of clinical findings

- Screening should be individualized and include a discussion of the risks and benefits of each modality
    - See Screening Modality and Schedule (CSCR-A)
- Any polyp(s) ≥1 cm
    - See CSCR-10
- ≥10 adenomatous polyps and/or SSP/SSL(s) in a single colonoscopy
    - Colonoscopy in 1 y
        - If germline testing is negative, or if evaluation is not performed, repeat colonoscopy within 1–3 years
            - Frequency of surveillance may be modified based on the age at which the patient met the cumulative adenoma threshold
            - Frequency of surveillance may be modified based on the total number of adenomas at the most recent colonoscopy
            - More frequent surveillance is favored for younger age at meeting the threshold
            - More frequent surveillance is favored for higher adenoma burden at the last colonoscopy
    - Then repeat colonoscopy according to clinical endoscopic findings
    - Consider the diagnosis of a polyposis syndrome
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- ≥10 cumulative adenomatous polyps and/or SSP/SSL(s) over multiple colonoscopies
    - Repeat colonoscopy according to clinical endoscopic findings
    - Consider the diagnosis of a polyposis syndrome
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
    - Consider germline testing for 10–19 cumulative adenomas if other factors suggest the possibility of a polyposis/CRC syndrome
        - Age of onset
        - Family or personal history of CRC
    - Nine or fewer polyps in the setting of a strong family history or younger age (<40 years) may sometimes be associated with an inherited polyposis syndrome
- Malignant polyp(s)
    - See NCCN Guidelines for Colon Cancer, or NCCN Guidelines for Rectal Cancer

# Next

- Any polyp(s) ≥1 cm, go to CSCR-10
- ≥10 adenomatous polyps and/or SSP/SSL(s) in a single colonoscopy, colonoscopy in 1 y, then repeat colonoscopy according to clinical endoscopic findings and consider a polyposis syndrome
- ≥10 cumulative adenomatous polyps and/or SSP/SSL(s), repeat colonoscopy according to clinical endoscopic findings and consider a polyposis syndrome
- Malignant polyp(s), go to the NCCN Guidelines for Colon Cancer or the NCCN Guidelines for Rectal Cancer
