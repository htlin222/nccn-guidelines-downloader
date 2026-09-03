+++
id           = "survivorship/SSH-1"
gid          = "survivorship"
ref          = "SSH-1"
page         = 134
title        = "Sexual health diagnostic evaluation"
nccn_version = "3.2026"
nccn_date    = "07/22/26"
generated    = "2026-09-03"
see_also     = ["SURV-A", "SSH-2", "SSH-3", "SF-1", "SANXDE-1", "DIS-A"]

[facets]
disease   = "survivorship"
timepoint = "survivorship"

[[variables]]
name = "screening_outcome"
type = "enum"
options = ["no issue indicated", "issue indicated, survivor declines discussion", "issue indicated, survivor wants to discuss further"]
[[variables]]
name = "diagnosis_stage"
type = "text"
[[variables]]
name = "surgeries"
type = "text"
[[variables]]
name = "systemic_treatment"
type = "text"
[[variables]]
name = "local_rt"
type = "text"
[[variables]]
name = "endocrine_therapy"
type = "text"
[[variables]]
name = "testosterone"
type = "number"
[[variables]]
name = "meds_affecting_sexual_health"
type = "text"
[[variables]]
name = "screening_tool"
type = "text"
+++

# Source

- NCCN Survivorship v3.2026, SSH-1, p134
- Screening questions: SURV-A
- Fertility preservation: NCCN Guidelines for Adolescent and Young Adult (AYA) Oncology
- Principles of Fertility: SF-1
- Recommendations are mainly based on data in cisgender survivors, but should be followed for gender diverse survivors as applicable, with the involvement of the appropriate health care specialists
- All recommendations category 2A unless otherwise indicated

# Assessment

- Ask about sexual health at regular intervals (see screening questions on SURV-A)
- Discuss treatment-associated infertility and refer to fertility specialist if indicated (SF-1)
- Screening outcome: ___ (screening_outcome)

# If screening questions do not indicate an issue

- Re-evaluate and discuss potential impact of treatment on sexual health at future visits

# If issue indicated but survivor does not want to discuss at oncology visit

- Refer to sexual health specialist, if survivor is interested
    - Sexual health specialists may come from a range of backgrounds, including primary care, gynecology, urology, oncology, psychology, and/or rehabilitation medicine
    - Whenever possible, refer to appropriate local resource for further sexual health evaluation
- Re-evaluate and discuss potential impact of treatment on sexual health at future visits

# If issue indicated and survivor wants to discuss further

- Consider use of a screening tool: ___ (screening_tool)
    - Brief Sexual Symptom Checklist for Women (SSH-A)
    - Sexual Health Inventory for Men (SHIM) (SSH-B)
    - Arizona Sexual Experience Scale
    - Female Sexual Functioning Index (FSFI), including a breast-specific adaptation of the FSFI
    - PROMIS Sexual Function and Satisfaction Measure (SexFS)
- H&P
- Review oncologic history
    - Diagnosis/stage: ___ (diagnosis_stage)
    - Surgeries: ___ (surgeries)
    - Systemic treatment: ___ (systemic_treatment)
    - Local RT: ___ (local_rt)
    - Endocrine therapy: ___ (endocrine_therapy)
- Discuss treatment-related impact on sexual health, ideally before planned procedures and/or systemic therapy
- Assess for signs or symptoms of estrogen or androgen deprivation, or refer to appropriate specialist
- Review medical history for conditions associated with sexual dysfunction
    - Depression (see SANXDE-1 and Distress Thermometer Screening Tool [DIS-A] in the NCCN Guidelines for Distress Management)
    - Diabetes
    - Hypertension
- Assess total morning testosterone as indicated: ___ (testosterone)
- Review medication list for drugs that impact sexual health: ___ (meds_affecting_sexual_health)
    - SSRIs
    - Beta blockers
- Appropriate referrals for
    - Psychotherapy
    - Sexual/couples counseling
    - Gynecologic care
    - Urology care
    - Sexual health specialist, if available
        - Whenever possible, refer to appropriate local resource for further sexual health evaluation
    - Sex therapist, if available
        - Certified by the American Association of Sexuality Educators, Counselors and Therapists (AASECT)

# Next

- Treatment for cisgender females, go to SSH-2
- Treatment for cisgender males, go to SSH-3
