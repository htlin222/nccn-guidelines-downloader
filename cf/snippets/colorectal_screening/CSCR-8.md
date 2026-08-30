+++
id           = "colorectal_screening/CSCR-8"
gid          = "colorectal_screening"
ref          = "CSCR-8"
page         = 21
title        = "Surveillance interval after polyp(s) found at colonoscopy, by clinical findings"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-1A", "CSCR-9A"]

[facets]
disease   = "colorectal_screening"
timepoint = ["screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "colonoscopy_date"
type = "text"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "largest_polyp_size_cm"
type = "number"
[[variables]]
name = "polyp_histology"
type = "text"
[[variables]]
name = "dysplasia"
type = "enum"
options = ["none", "low-grade", "high-grade"]
[[variables]]
name = "resection_complete"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "bowel_prep_adequate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "exam_complete"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-8, p21
- Risk status: personal history of polyp(s) found at colonoscopy
    - Adenomatous polyp(s)
    - SSP/SSL(s)
    - Traditional serrated adenoma(s) (TSA)
    - Large (≥1 cm) hyperplastic polyp(s)
        - Limited data on whether hyperplastic polyps ≥1 cm represent an increased risk group
        - Several analyses suggest many larger polyps classified as hyperplastic in the past were reclassified as SSPs/SSLs when reviewed by experts
        - Reasonable to follow them similarly to patients with SSPs/SSLs, particularly if not reviewed by an expert GI pathologist
- Surveillance colonoscopy is recommended in adults aged 45–75 years with a history of adenomas
    - Ages 76–85 years: individualize, discussing risks and benefits of continued colonoscopy based on comorbidity status, estimated life expectancy, and findings on the last or most recent colonoscopy
- Screening should be individualized and include a discussion of the risks and benefits of each modality (CSCR-A)
- For definitions of commonly used terms see CSCR-GLOS; for details on classification see footnote c on CSCR-1A
- Footnotes on CSCR-9A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, index colonoscopy ___ (colonoscopy_date)
- Number of polyps: ___ (polyp_count)
- Largest polyp: ___ (largest_polyp_size_cm) cm
- Histology: ___ (polyp_histology)
- Dysplasia: ___ (dysplasia)
- Preconditions for using these intervals
    - Complete resection: ___ (resection_complete)
    - Adequate bowel preparation: ___ (bowel_prep_adequate)
    - Complete examination: ___ (exam_complete)

# Clinical findings and follow-up interval

- Low-risk adenoma(s)
    - 1-2 tubular adenoma(s) < 1 cm
    - Repeat colonoscopy between 7–10 y
- Low-risk SSP/SSL(s)
    - 1–2 SSP/SSL(s) <1 cm; no dysplasia
    - Repeat colonoscopy in 5 y
- High-risk polyp(s) <1 cm
    - Any adenoma(s) <1 cm with villous/tubulovillous histology and/or high-grade dysplasia
    - Any SSP/SSL(s) <1 cm with dysplasia
    - ≥3 adenoma(s)/SSP/SSL(s) <1 cm with any histology/dysplasia status
    - TSA(s) <1 cm
    - Repeat colonoscopy in 3 y
- Before shortening any of these intervals
    - Available data suggest individuals with low-risk adenomas or SSP/SSL(s) may not have an increased risk of metachronous advanced colorectal neoplasia compared to the general population
    - Any recommendation for a shorter interval should include a discussion with the individual based on an assessment of individual risk, including age, family history, comorbidity, and the results of previous colonoscopies

# Follow-up of the surveillance colonoscopy

- After a low-risk finding interval
    - Negative / no adenoma or SSP/SSL, repeat colonoscopy in 10 y
    - Positive / adenoma(s) or SSP/SSL(s), repeat colonoscopy according to endoscopic findings
- After a high-risk finding interval
    - Negative, repeat colonoscopy in 5 y
    - Positive / adenoma(s) or SSP/SSL(s), repeat colonoscopy according to endoscopic findings
- In patients who previously had high-risk adenomas, high-risk SSP/SSLs, TSAs, or hyperplastic polyps ≥1 cm, the surveillance interval should not be increased to >5 years

# Cumulative adenoma burden

- Consider germline testing for 10–19 cumulative adenomas if other factors suggest the possibility of a polyposis/CRC syndrome, such as age of onset or family or personal history of CRC
- Nine or fewer polyps in the setting of a strong family history or younger age (<40 years) may sometimes be associated with an inherited polyposis syndrome
- If germline testing is negative, or if evaluation is not performed, repeat colonoscopy within 1–3 years
    - Frequency of surveillance may be modified based on factors such as age at which the patient met the cumulative adenoma threshold, or total number of adenomas at the most recent colonoscopy
    - More frequent surveillance is favored for younger age at meeting threshold, or higher adenoma burden at last colonoscopy

# Next

- Repeat colonoscopy at the interval set by the clinical findings above
- On the next colonoscopy, re-enter this page with the new findings
