+++
id           = "colorectal_screening/CSCR-14"
gid          = "colorectal_screening"
ref          = "CSCR-14"
page         = 29
title        = "IBD surveillance: a dysplastic lesion is found, is it resectable, and when to scope again"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-13", "CSCR-15"]

[facets]
disease   = "colorectal_screening"
timepoint = "surveillance"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ibd_type"
type = "enum"
options = ["crohn", "ulcerative-colitis"]
[[variables]]
name = "colonoscopy_date"
type = "text"
[[variables]]
name = "lesion_morphology"
type = "enum"
options = ["sessile", "pedunculated", "nonpolypoid", "invisible", "mass", "none"]
[[variables]]
name = "lesion_size"
type = "text"
[[variables]]
name = "dysplasia_grade"
type = "enum"
options = ["none", "low-grade", "high-grade"]
[[variables]]
name = "resection"
type = "enum"
options = ["complete", "piecemeal", "incomplete", "non-resectable", "not-attempted"]
[[variables]]
name = "active_inflammation"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "psc"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "family_history_crc_under_50"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-14, p29
- Increased risk based on personal history of inflammatory bowel disease
- Evaluation of surveillance findings, the follow-up they drive, and the next surveillance interval
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- IBD type ___ (ibd_type)
- Colonoscopy date ___ (colonoscopy_date)
- Lesion morphology ___ (lesion_morphology)
- Lesion size ___ (lesion_size)
- Dysplasia grade ___ (dysplasia_grade)
- Resection outcome ___ (resection)
- Endoscopic or histologic active inflammation ___ (active_inflammation)
- Primary sclerosing cholangitis ___ (psc)
- Family history of CRC <50 y ___ (family_history_crc_under_50)

# Evaluation of findings

- Resectable lesion
    - Sessile or pedunculated
    - Nonpolypoid (flat lesion)
    - Consider utilizing Paris classification to describe the lesion
        - Polypoid, ≥2.5 mm tall
        - Nonpolypoid, <2.5 mm
        - Invisible
        - All polypoid and nonpolypoid lesions should be completely resected
    - Patients with ulcerative colitis develop sporadic colorectal adenomas at the same rate as the general population
        - Lesions that appear endoscopically and histologically similar to a sporadic adenoma or SSP/SSL, and without invasive carcinoma in the polyp, can be treated safely by polypectomy
        - Some lesions may require endoscopic mucosal resection (EMR) or endoscopic submucosal dissection (ESD) techniques for complete resection
        - Confirmation of all polyp histology and dysplasia by an expert GI pathologist is desirable
- Incomplete endoscopic resection
- Non-resectable polypoid lesion or mass

# Resectable lesion

- Complete endoscopic resection
    - Some lesions may require EMR or ESD techniques for complete resection
    - Following endoscopic resection of visible lesions, biopsy of surrounding mucosa is not routinely necessary
        - But should be considered if there is any doubt regarding the completeness of resection

# Incomplete endoscopic resection, or non-resectable polypoid lesion or mass

- Refer to endoscopist with expertise in advanced resection techniques
- Consider referral to a surgeon with expertise in IBD
    - A surgical consult may include a discussion about surveillance and colectomy, based on multiple factors
        - Other visible dysplastic lesions in the same segment
        - Histology
        - A discussion with the patient about risks and benefits of each approach

# Surveillance

- Lower risk, colonoscopy follow-up in 1-3 y
    - Hyperplastic or normal mucosa
    - No endoscopic/histologic active inflammation
    - <1 cm with low-grade dysplasia
- Higher risk, colonoscopy follow-up in 1 y
    - PSC
    - ≥1 cm with low-grade dysplasia
    - Active inflammation
    - Family history of CRC <50 y
    - Any high-grade dysplasia
- Colonoscopy follow-up within 3-6 mo in lesions with
    - Low-grade dysplasia ≥2 cm
    - High-grade dysplasia
    - Piecemeal resection

# Next

- Complete endoscopic resection, go to surveillance interval by risk group above
- Incomplete endoscopic resection, refer to endoscopist with expertise in advanced resection techniques, and consider referral to a surgeon with expertise in IBD
- Non-resectable polypoid lesion or mass, refer to endoscopist with expertise in advanced resection techniques, and consider referral to a surgeon with expertise in IBD
