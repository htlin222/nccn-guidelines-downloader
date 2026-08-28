+++
id           = "kaposi/KS-1"
gid          = "kaposi"
ref          = "KS-1"
page         = 7
title        = "Diagnosis and workup of Kaposi sarcoma, and assignment of KS state"
nccn_version = "2.2026"
nccn_date    = "09/16/25"
generated    = "2026-08-28"
see_also     = ["KS-2", "KS-3", "KICS-1", "KS-A", "HIV-B", "DIS-A"]

[facets]
disease   = "kaposi"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "hiv_status"
type = "text"
[[variables]]
name = "cd4"
type = "number"
[[variables]]
name = "hiv_vl"
type = "text"
[[variables]]
name = "lana1"
type = "text"
[[variables]]
name = "lesion_sites"
type = "text"
[[variables]]
name = "edema"
type = "text"
[[variables]]
name = "immunosuppression"
type = "text"
[[variables]]
name = "ks_state"
type = "enum"
options = ["limited cutaneous disease", "advanced disease", "KICS"]
+++

# Source

- NCCN Kaposi Sarcoma v2.2026, KS-1, p7
- Diagnosis and workup of Kaposi sarcoma (KS), leading to assignment of KS state
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- HIV status ___ (hiv_status)
    - If HIV seropositive, quantitative CD4+ T-cell count ___ (cd4)
    - If HIV seropositive, HIV viral load ___ (hiv_vl)
- KSHV (HHV8) LANA-1 immunohistochemistry ___ (lana1)
- Skin, oral, and lymph node lesions ___ (lesion_sites)
- Edema ___ (edema)
- Additional immunosuppressive disease or immunomodulatory therapy ___ (immunosuppression)
- KS state ___ (ks_state)

# Diagnosis, essential

- Review of adequate slides from paraffin block representative of the tumor, by a pathologist with expertise in the diagnosis of Kaposi sarcoma (KS)
    - Rebiopsy if non-diagnostic
- Histopathology review of adequate biopsy (ie, skin punch, incisional, excisional)
- Adequate immunophenotyping to establish diagnosis
- Immunohistochemistry (IHC) panel
    - Kaposi sarcoma-associated herpesvirus (KSHV; human herpesvirus 8 [HHV8])
    - LANA-1

# Diagnosis, useful in certain circumstances

- IHC: CD31 and CD34, if unclear whether the tumor has a vascular origin
- Encourage additional biopsy of nodal or visceral sites, if a coexisting disorder is suspected (ie, infection, lymphoma, multicentric Castleman disease [MCD])
- Encourage cytology and flow cytometry of effusion fluid if present, to evaluate for coexisting primary effusion lymphoma (PEL)

# Workup, essential

- History and physical examination
    - Including history of additional immunosuppressive disease or immunomodulatory therapy (eg, transplant; local or systemic corticosteroids)
    - Including complete skin, oral, and lymph node examinations
    - Including evaluation of edema
- Complete blood count (CBC), differential, and comprehensive metabolic panel
- Human immunodeficiency virus (HIV) screening and/or diagnostic testing
    - All patients who are HIV seropositive should have recent T-cell subsets, including quantitative CD4+ T-cell count and HIV viral load, to assess immune function and HIV control
- Photography of oral, conjunctival, and cutaneous lesions, for evaluation and monitoring of extent of disease
    - With reference unit of measure in the picture
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health (DIS-A)

# Workup, useful in selected cases

- In patients of childbearing potential, if chemotherapy or radiation therapy (RT) planned: pregnancy testing
- Evaluation for suspected opportunistic infections (OIs)
    - Involvement of an HIV specialist to evaluate for coexisting OI is appropriate, especially with advanced immunosuppression
- Stool hemoccult and/or chest x-ray as clinically indicated (eg, for advanced disease)
- If unexplained pulmonary symptoms or abnormalities on chest x-ray
    - Chest CT with contrast
    - Bronchoscopy
    - Imaging should be directed by symptoms or findings concerning for visceral or bone involvement
- If gastrointestinal (GI) symptoms or positive hemoccult
    - Abdomen/pelvis CT with contrast, or MRI with and without contrast
    - Esophagogastroduodenoscopy (EGD)/colonoscopy
    - Imaging should be directed by symptoms or findings concerning for visceral or bone involvement
- If concerns for coexisting KSHV-associated inflammatory cytokine syndrome (KICS), MCD, or KSHV+ lymphoma, or other KSHV-associated disease
    - CT scan or FDG-PET/CT scan
        - Imaging should be directed by findings concerning for coexisting KICS, MCD, or KSHV+ lymphoma, and can include whole body FDG-PET/CT
        - See NCCN Guidelines for Castleman Disease
    - And/or lab workup, useful in patients with clinical features (ie, fever, dyspnea, effusions) concerning for KICS or KSHV-associated MCD
        - C-reactive protein
        - KSHV serum viral load
        - Serum protein electrophoresis (SPEP)
        - Interleukin (IL)-6, or IL-10
- If anthracycline planned, or suspected pericardial effusion: transthoracic echocardiogram
- For people with HIV (PWH), begin discussions regarding the possible need to modify ART due to DDIs, and the need to involve an HIV specialist in care decisions
    - See Principles of Systemic Therapy and Drug-Drug Interactions (HIV-B) in the NCCN Guidelines for Patients with HIV

# Next

- Limited cutaneous disease, go to First-Line Therapy (KS-2)
- Advanced disease, go to First-Line Therapy (KS-3)
    - Advanced disease refers to T1 disease, extensive T0 cutaneous disease, or nodal disease
    - See Staging Classification for KS (KS-A 1 of 2) for definitions of T0 and T1
- KSHV-associated inflammatory cytokine syndrome (KICS), go to KICS-1
    - Patients with KICS present with symptoms such as fever, fatigue, edema, cachexia, gastrointestinal or respiratory symptoms, pain, neuropathy, and/or an altered mental state
