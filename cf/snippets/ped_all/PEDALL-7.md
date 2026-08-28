+++
id           = "ped_all/PEDALL-7"
gid          = "ped_all"
ref          = "PEDALL-7"
page         = 20
title        = "Induction and consolidation therapy for infant ALL, by KMT2A status and infant risk group"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-2", "PEDALL-3", "PEDALL-8", "PEDALL-C", "PEDALL-E", "PEDALL-G", "PEDALL-I", "PEDALL-J", "PEDALL-K"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = "mrd-positive"
timepoint = ["induction", "consolidation", "maintenance", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "wbc"
type = "text"
[[variables]]
name = "kmt2a"
type = "enum"
options = ["rearranged", "not-rearranged", "pending"]
[[variables]]
name = "risk_group"
type = "enum"
options = ["high", "intermediate", "standard"]
[[variables]]
name = "mrd"
type = "text"
[[variables]]
name = "donor"
type = "enum"
options = ["yes", "no", "unknown"]
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-7, p20
- Infant ALL, induction therapy and consolidation therapy
- Special Considerations for Patients with Down Syndrome and Infants (PEDALL-E)
- Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) months old
- WBC count ___ (wbc)
- KMT2A (11q23) status ___ (kmt2a)
- Infant risk group ___ (risk_group)
- MRD after intensive consolidation therapy ___ (mrd)
- HCT donor available ___ (donor)

# Infant risk group definitions

- High risk
    - KMT2A-rearranged, and age <3 mo with any WBC count
    - KMT2A-rearranged, and age <6 mo with WBC count >=300,000
    - Or KMT2A-rearranged, and remains MRD+ after intensive consolidation therapy, any age or WBC count
        - The threshold for MRD positivity may vary based on the protocol being followed and/or the assay being used
        - For further information, see Minimal Residual Disease (PEDALL-J)
- Intermediate risk
    - KMT2A-rearranged and not high risk
- Standard risk
    - KMT2A not rearranged
- Definitions reproduced with permission from Brown P, Pieters R, Biondi A. How I treat infant leukemia. Blood 2019

# Induction therapy

- Principles of Supportive Care (PEDALL-C) applies throughout induction therapy
- KMT2A rearranged, high risk or intermediate risk
    - Clinical trial (preferred)
    - Or Interfant induction, see Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
- KMT2A not rearranged, standard risk
    - Clinical trial (preferred)
    - Or Interfant induction, see Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)

# Consolidation therapy

- High risk
    - Interfant intensive chemotherapy consolidation + blinatumomab
        - Blinatumomab is incorporated into frontline therapy as a postremission approach, based on data from AALL1731 as well as the ECOG1910 study in adults
        - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities
        - Experience in the use of the drug, as well as resources to monitor the patient closely, are essential
        - Follow the instructions for blinatumomab product preparation (including admixing) and administration strictly, to minimize medication errors including underdosing and overdosing
        - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
- Intermediate risk
    - Interfant consolidation + blinatumomab
        - Blinatumomab is incorporated into frontline therapy as a postremission approach, based on data from AALL1731 as well as the ECOG1910 study in adults
        - Blinatumomab may cause severe, life-threatening, or fatal adverse events, including CRS and neurologic toxicities
        - Experience in the use of the drug, as well as resources to monitor the patient closely, are essential
        - Follow the instructions for blinatumomab product preparation (including admixing) and administration strictly, to minimize medication errors including underdosing and overdosing
        - Toxicity Management for Inotuzumab Ozogamicin, Blinatumomab, and Tisagenlecleucel (PEDALL-C, 15 of 18)
    - Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
- Standard risk, KMT2A not rearranged
    - See Consolidation Therapy for Pediatric B-ALL (PEDALL-3)

# Next

- High risk, after Interfant intensive chemotherapy consolidation + blinatumomab
    - Response Assessment (PEDALL-I)
    - Then consider HCT, see Principles of Hematopoietic Cell Transplant (PEDALL-K)
        - If donor available, prefer non-total body irradiation (TBI)-based prep regimen and age >=6 mo at time of HCT
    - Or maintenance chemotherapy, see Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
    - Then Surveillance (PEDALL-8)
- Intermediate risk, after Interfant consolidation + blinatumomab
    - Maintenance chemotherapy, see Principles of Systemic Therapy for Infant ALL (PEDALL-G, 2 of 13)
    - Then Surveillance (PEDALL-8)
- Standard risk, go to Consolidation Therapy for Pediatric B-ALL (PEDALL-3)
