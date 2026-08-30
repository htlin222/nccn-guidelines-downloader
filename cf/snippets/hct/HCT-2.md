+++
id           = "hct/HCT-2"
gid          = "hct"
ref          = "HCT-2"
page         = 10
title        = "Pre-transplant recipient evaluation before hematopoietic cell transplantation"
nccn_version = "3.2026"
nccn_date    = "07/30/26"
generated    = "2026-08-30"
see_also     = ["HCT-1", "HCT-3"]

[facets]
disease   = "hct"
timepoint = ["workup", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "hct_type"
type = "enum"
options = ["allogeneic", "autologous"]
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "disease_status"
type = "text"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "bmi"
type = "number"
[[variables]]
name = "lvef"
type = "number"
[[variables]]
name = "dlco"
type = "number"
[[variables]]
name = "egfr"
type = "number"
[[variables]]
name = "hct_ci"
type = "number"
+++

# Source

- NCCN Hematopoietic Cell Transplantation v3.2026, HCT-2, p10
- Pre-transplant recipient evaluation
    - Generates data to estimate risks of post-transplant complications including non-relapse mortality (NRM)
    - Also generates information that may inform other transplant-related decisions
- For pre-transplant donor evaluation and HLA typing, refer to the FACT-JACIE International Standards for Hematopoietic Cellular Therapy Product Collection, Processing, and Administration (8th edition)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, planned ___ (hct_type) HCT
- ___ (diagnosis)
- Disease status ___ (disease_status)
- Performance status ___ (performance_status)
- BMI ___ (bmi)

# Clinical assessment

- Confirm histologic diagnosis
- History and physical exam
    - Evaluation of performance status, Eastern Cooperative Oncology Group (ECOG) or Karnofsky Performance Scale (KPS)
    - Body mass index
- Assess disease status
    - Including cytogenetic/molecular testing for risk stratification
    - Including assessment of minimal residual disease, if applicable
    - Disease risk index may be used to predict overall survival based on only disease-related risk factors
- Bone marrow aspiration and biopsy to confirm remission status
    - As indicated by underlying disease: pathology, flow cytometry, cytogenetics, molecular studies
    - And to rule out other diseases
    - For acute leukemia, ideally performed within 4 weeks of starting a conditioning regimen
- Pulmonary function tests (PFTs), DLCO ___ (dlco)
    - Spirometry
    - Lung volumes
    - Diffusing capacity of the lungs for carbon monoxide (DLCO)
        - DLCO should be corrected for hemoglobin concentration using the Dinakara method
        - In patients with significantly reduced DLCO, exercise caution when using busulfan or carmustine-based regimens
        - Consider pulmonary consultation and/or arterial blood gas analysis if DLCO <60%
- Electrocardiogram, with QTc interval assessment
- Measure left ventricular ejection fraction (LVEF) ___ (lvef)
    - Echocardiogram, if valvular assessment required
    - Or multigated acquisition scan
    - Consider cardiac consultation in patients with compromised LVEF
- Discuss fertility preservation for individuals of childbearing potential
- Psychosocial evaluation
    - Assess medication adherence
    - Assess high-risk behavior
    - Assess mood disorders
    - Assess caregiver availability, to ensure patient adherence to treatment
    - If needs are identified, ensure referral to psycho-oncology, social work, mental health provider, or addiction psychiatry as appropriate
- HCT Comorbidity Index (HCT-CI) score ___ (hct_ci), for allogeneic HCT
    - Predicts the risk of NRM after transplant more accurately than age and performance status
    - Does not predict the risk of relapse
- Consider geriatric assessment or HCT specific risk assessment tool for older adults, as indicated per institutional preference

# Imaging

- Disease-specific restaging studies, see NCCN Guidelines for Treatment by Cancer Type
- Chest x-ray, if no other chest imaging done

# Laboratory tests

- Complete blood count with differential
- ABO/Rh typing
- Chemistry profile
    - Blood glucose
    - Creatinine and estimated glomerular filtration rate ___ (egfr)
        - Calcineurin inhibitors (CNIs) are associated with increased risk of renal failure after HCT
    - Electrolytes
    - Liver function tests (LFTs): transaminases and bilirubin
        - Cirrhosis, in particular with portal hypertension, is generally considered a contraindication for allogeneic HCT
        - Veno-occlusive disease/sinusoidal obstruction syndrome (VOD/SOS) risk calculator may be used to predict risk of VOD/SOS
- Prothrombin time/partial thromboplastin time
- Urinalysis
- Infectious disease testing
    - Cytomegalovirus (CMV)
    - Herpes simplex virus (HSV)
    - Varicella zoster virus (VZV)
    - Hepatitis B virus (HBV)
    - Hepatitis C virus (HCV)
    - Human immunodeficiency virus (HIV)
    - Syphilis
- Human leukocyte antigen (HLA) typing per FACT-JACIE International Standards
- Toxoplasma serology, for allogeneic HCT
- Donor and recipient genotyping to inform post-transplant chimerism analysis, for allogeneic HCT

# Next

- Additional evaluation as clinically indicated, go to HCT-3
