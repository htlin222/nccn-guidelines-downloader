+++
id           = "mds/MDS-7"
gid          = "mds"
ref          = "MDS-7"
page         = 14
title        = "Management of higher-risk MDS, split by transplant candidacy"
nccn_version = "3.2026"
nccn_date    = "01/12/26"
generated    = "2026-08-27"
see_also     = ["MDS-3", "MDS-4", "MDS-8"]

[facets]
disease   = "mds"
histology = "myelodysplastic"
biomarker = ["idh1", "idh2", "tp53"]
timepoint = ["primary-treatment", "transplant", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ipssr_category"
type = "enum"
options = ["intermediate", "high", "very-high"]
[[variables]]
name = "ipssr_score"
type = "number"
[[variables]]
name = "marrow_blasts"
type = "number"
[[variables]]
name = "idh_status"
type = "enum"
options = ["mIDH1", "mIDH2", "no mIDH"]
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "transplant_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Myelodysplastic Syndromes v3.2026, MDS-7, p14
- Applies to higher-risk disease: IPSS-R Intermediate-, High-, Very-High-Risk disease
- Footnotes on MDS-7A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- IPSS-R category ___ (ipssr_category)
    - Given its more accurate risk stratification, the IPSS-R categorization is preferred, although the other systems also have good value
- IPSS-R score ___ (ipssr_score)
    - IPSS-R Intermediate-Risk MDS may be managed as lower risk if the score is 3.5 or less, versus higher risk if the score is above 3.5
- Marrow blast percentage ___ (marrow_blasts)
- IDH mutation status ___ (idh_status)
- Comorbidities ___ (comorbidities)
    - Presence of comorbidities should also be considered for evaluation of prognosis, see Comorbidity Indices in the Discussion
- Supportive care applies throughout (MDS-8)

# Transplant candidacy

- Transplant candidate ___ (transplant_candidate)
    - Based on age, including up to at least 75 y
    - Performance status
    - Major comorbid conditions
    - Psychosocial status
    - Patient preference
    - Availability of caregiver
    - Patients may be taken immediately to transplant, or bridging therapy can be used to decrease marrow blasts to an acceptable level prior to transplant

# Transplant candidate, treatment

- Allo-HCT
    - Allogeneic HCT from the most suitable donor, ie, HLA-matched sibling or unrelated donor, HLA-haploidentical family member, or cord blood
    - Early referral for transplant evaluation is recommended to allow moving to transplant efficiently
    - Pre-transplant debulking therapy to reduce marrow blasts to less than 5% is recommended, with the goal of reducing post-transplant relapse
    - The optimum debulking strategy, ie, azacitidine, decitabine, or induction-type chemotherapy, has not been determined
    - Reducing the disease burden pre-transplant is particularly important in patients who will receive a reduced-intensity conditioning regimen
    - At some centers, failure to achieve less than 5% blasts with cytoreduction should not preclude patients from proceeding to transplant, as these patients appeared to derive survival benefit from transplant
    - Strategies for patients with specific mutations are under investigation
    - Patients with TP53 mutations, particularly biallelic, have a poor prognosis even with transplantation; discuss these cases with a transplant physician and enroll in a clinical trial whenever possible
- Azacitidine/Ivosidenib, if mIDH1 (category 2B), followed by allo-HCT
- Clinical trial, followed by allo-HCT
    - A 20% blast cut-off for AML evolving out of MDS and for MDS-EB2 may be arbitrary in some clinical scenarios
    - Some clinical trials designed for high-grade MDS may allow enrollment of patients with AML-MDS
- Azacitidine with or without Venetoclax
    - The addition of venetoclax is based on patient status and tolerance
    - When used as cytoreduction for MDS in combination with an HMA, venetoclax has been effectively given for 14 days in monthly courses
- Decitabine with or without Venetoclax
- Decitabine and Cedazuridine, with or without Venetoclax
    - Oral decitabine and cedazuridine (DEC-C) could be a substitution for intravenous decitabine in patients with IPSS Intermediate-1 and above
- High-intensity chemotherapy
    - Clinical trials with investigational therapy, preferred
    - Or standard induction therapy if investigational protocol is unavailable, or if it is used as a bridge to HCT
- Repeat the bone marrow evaluation after one to two cycles, to clarify the recovery of hematopoiesis and potential requirement for further therapy

# Transplant candidate, outcome of initial treatment

- If response
    - Allo-HCT
- If no response and if mIDH1
    - Consider single-agent Ivosidenib
    - Or single-agent Olutasidenib (category 2B)
    - Or Azacitidine/Olutasidenib (category 2B)
    - Followed by allo-HCT
- If no response and if mIDH2
    - Enasidenib
        - Emerging data are demonstrating effectiveness of enasidenib for patients with MDS with IDH2 mutations
    - Followed by allo-HCT
- If no response and if no mIDH
    - Clinical trial
    - Followed by allo-HCT

# After allo-HCT, relapse or no response

- Relapse after allo-HCT, or no response
    - Reevaluation with bone marrow and/or molecular testing is recommended at relapse
    - Treatment failure would be considered if no response within 3-6 months
    - Response should be evaluated based on IWG criteria
- Consider allo-HCT or donor lymphocyte infusion
    - Consider second transplant or donor lymphocyte infusion immuno-based therapy for appropriate patients who had a prolonged remission after first transplant
- Clinical trial
- HMA: Azacitidine, or Decitabine, or Decitabine and Cedazuridine

# Not a transplant candidate, treatment

- Preferred
    - Azacitidine (category 1)
    - Decitabine
    - Decitabine and Cedazuridine
- Useful in certain circumstances
    - Venetoclax may be added to the HMA backbone in select patients
    - Ivosidenib (category 2B) with or without Azacitidine, if mIDH1 (category 2B)
    - Olutasidenib plus Azacitidine, if mIDH1 (category 2B)
- HMA dosing and duration
    - Azacitidine, decitabine, or oral decitabine and cedazuridine should be continued for approximately 4-6 monthly cycles as tolerated to assess response to these agents
    - In patients who have clinical benefit, continue treatment with the HMA as maintenance therapy
    - While the response rates are similar for both drugs, survival benefit from phase III randomized trials is reported for azacitidine and not for decitabine
    - Standard monthly dosing of azacitidine is 75 mg/m2/day SC or IV x 7 days
    - Standard monthly dosing of decitabine is 20 mg/m2/day IV x 5 days

# Not a transplant candidate, response assessment

- Response
    - Continue
- No response, or intolerance, or relapse
    - Treatment failure would be considered if no response within 3-6 months, evaluated based on IWG criteria
    - For HMAs, no response within 6 cycles of Azacitidine, or 4 cycles of decitabine or oral decitabine and cedazuridine
    - Reevaluation with bone marrow and/or molecular testing is recommended at relapse
- If mIDH1
    - Ivosidenib or Olutasidenib (category 2B), if IDH1 inhibitor not previously used
- If mIDH2
    - Enasidenib
- If no mIDH
    - Clinical trial
    - Or add Venetoclax to the HMA backbone, if not previously used

# Next

- Response, continue current therapy
- No response or relapse after the above, go to Clinical trial, or Supportive care (MDS-8)
- AML-style therapies may be considered for appropriate patients with MDS-EB2, especially at younger ages of presentation, see NCCN Guidelines for Acute Myeloid Leukemia
- A diagnosis of AML may be made with less than 20% blasts in patients with certain cytogenetic abnormalities per ICC
- Some patients with higher-risk disease with WHO 2022 MDS-IB2 and ICC MDS/AML could be considered for AML-type therapy
