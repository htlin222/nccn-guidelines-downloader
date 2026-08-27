+++
id           = "ovarian/OV-1"
gid          = "ovarian"
ref          = "OV-1"
page         = 7
title        = "Clinical presentation and workup of a suspicious pelvic mass, and primary treatment by clinical stage"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["OV-2", "OV-3", "OV-4", "OV-A", "OV-B", "OV-C", "OV-D", "LCOC-1"]

[facets]
disease   = "ovarian"
histology = "any"
stage     = ["I", "II", "III", "IV"]
biomarker = "brca"
timepoint = ["workup", "staging", "primary-treatment"]
population = "fertility"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "text"
[[variables]]
name = "exam_findings"
type = "text"
[[variables]]
name = "ascites"
type = "text"
[[variables]]
name = "ca125"
type = "text"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "nutritional_status"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "clinical_stage"
type = "text"
[[variables]]
name = "fertility_desired"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["surgical candidate, optimal cytoreduction likely", "poor surgical candidate", "low likelihood of optimal cytoreduction"]
+++

# Source

- NCCN Epithelial Ovarian Cancer/Fallopian Tube Cancer/Primary Peritoneal Cancer v4.2026, OV-1, p7
- Applies to suspicious or palpable pelvic mass on abdomen/pelvis exam, and/or ascites, abdominal distention
- Also applies to symptoms without source of malignancy
    - Bloating
    - Pelvis/abdomen pain
    - Difficulty eating or feeling full quickly
    - Urinary symptoms (urgency or frequency)
- Also applies to diagnosis by previous surgery or tissue biopsy (cytopathology)
- For less common ovarian cancers (LCOC), see LCOC-1
    - LCOC = carcinosarcoma, clear cell, mucinous, low-grade serous, grade 1 endometrioid, borderline epithelial, malignant sex cord-stromal tumors, and germ cell tumors
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Presentation ___ (presentation)
- Abdomen/pelvis exam ___ (exam_findings)
- Ascites, abdominal distention ___ (ascites)
- CA-125 ___ (ca125)
- Performance status ___ (performance_status)
- Nutritional status ___ (nutritional_status)
- Family history ___ (family_history)
- Clinical stage ___ (clinical_stage)
- Fertility desired ___ (fertility_desired)
- Surgical assessment ___ (surgical_candidate)

# Workup

- Abdomen/pelvis exam
- Imaging studies as clinically indicated
    - See Principles of Imaging (OV-A)
- Complete blood count (CBC)
- Chemistry profile with liver function test (LFT)
- CA-125 or other tumor markers as clinically indicated
    - Other tumor markers may include inhibin, beta-human chorionic gonadotropin (b-hCG), alpha-fetoprotein, lactate dehydrogenase (LDH), carcinoembryonic antigen (CEA), CA 19-9, and HE4
    - See Discussion for usefulness of diagnostic tests
- Evaluate performance status
- Evaluate nutritional status
- Gastrointestinal (GI) evaluation as clinically indicated
- Reproductive endocrinology and infertility (REI) evaluation as clinically indicated
    - Reconsider REI evaluation as clinically indicated once pathologic diagnosis is available
- Obtain family history
- Refer to gynecologic oncologist for clinically suspicious lesions

# Genetic risk evaluation and biomarker testing

- Patients with ovarian cancer, fallopian tube cancer, or primary peritoneal cancer should have genetic risk evaluation and germline and somatic biomarker testing, if not previously done
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
    - Germline and somatic BRCA1/2 status informs maintenance therapy
    - In the absence of a BRCA1/2 mutation, homologous recombination deficiency (HRD) status may provide information on the magnitude of benefit of PARP inhibitor (PARPi) therapy
    - For PARPi therapy in advanced stage disease, include measure of homologous recombination (HR), see Principles of Pathology (OV-C)

# Evaluation by a gynecologic oncologist is recommended for

- All patients with suspected ovarian malignancies
    - Published data demonstrate that primary assessment and debulking by a gynecologic oncologist results in a survival advantage
- Patients being evaluated for neoadjuvant therapy prior to being considered a poor surgical candidate
- Management of occult serous tubal intraepithelial carcinomas (STICs)
- Consideration of laparoscopic evaluation to determine feasibility of debulking surgery in select patients
- Endometrial biopsy as clinically indicated

# Primary treatment by clinical stage

- Evaluation by a gynecologic oncologist is recommended for clinical staging and for primary treatment
- Stage IA, fertility desired
    - Unilateral salpingo-oophorectomy (USO) + comprehensive surgical staging
    - May be an option for select patients with stage IC based on histology
    - Uterine preservation for potential future assisted reproductive approaches
    - See Principles of Surgery (OV-B)
    - See Principles of Pathology (OV-C)
- Stage IB, fertility desired
    - Bilateral salpingo-oophorectomy (BSO) + comprehensive surgical staging
    - May be an option for select patients with stage IC based on histology
    - Uterine preservation for potential future assisted reproductive approaches
    - See Principles of Surgery (OV-B)
    - See Principles of Pathology (OV-C)
- Stage IA to IV, surgical candidate, optimal cytoreduction likely, fertility not desired
    - Hysterectomy/BSO + comprehensive staging and debulking as needed
    - See Principles of Surgery (OV-B)
    - See Principles of Pathology (OV-C)
- Poor surgical candidate, or low likelihood of optimal cytoreduction
    - Neoadjuvant therapy (OV-2)
    - Low likelihood of optimal cytoreduction, see Principles of Surgery (OV-B)
    - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)

# Next

- After surgical staging and debulking, go to Pathologic Staging (OV-4)
- Poor surgical candidate or low likelihood of optimal cytoreduction, go to Neoadjuvant Therapy (OV-2)
- Diagnosis by previous surgery or tissue biopsy (cytopathology), go to Workup, Findings, and Primary Treatment (OV-3)
- Less common ovarian cancers (LCOC), go to LCOC-1
