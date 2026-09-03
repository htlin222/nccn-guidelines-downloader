+++
id           = "survivorship/SANXDE-5"
gid          = "survivorship"
ref          = "SANXDE-5"
page         = 83
title        = "Depression diagnosis: safety evaluation, major depressive disorder criteria, and adjustment disorder screening"
nccn_version = "3.2026"
nccn_date    = "07/22/26"
generated    = "2026-09-03"
see_also     = ["SANXDE-1", "SANXDE-6", "SANXDE-7", "SANXDE-A"]

[facets]
disease   = "survivorship"
timepoint = "survivorship"

[[variables]]
name = "safety_risk"
type = "text"
[[variables]]
name = "psychosis_symptoms"
type = "text"
[[variables]]
name = "depressive_symptom_count"
type = "number"
[[variables]]
name = "symptom_duration"
type = "text"
[[variables]]
name = "manic_symptom_count"
type = "number"
[[variables]]
name = "screening_tool"
type = "enum"
options = ["PHQ-9", "PHQ-2"]
[[variables]]
name = "phq_score"
type = "number"
+++

# Source

- NCCN Survivorship v3.2026, SANXDE-5, p83
- Entry point: Screening: Depression, followed by Diagnosis
- For a complete list of screening symptoms, review the American Psychiatric Association's Diagnostic and statistical manual of mental disorders (5th ed.), Arlington, VA, 2013
- Additional tools for individual intensive screening for a specific problem: PHQ-9 or PHQ-2
    - PHQ-2 is comprised of the first two items of the PHQ-9, used as an initial depression screening
    - If the patient responds affirmatively to either PHQ-2 item, ask the remaining 7 items
- When screening, also take into consideration a survivor's cultural differences at presentation, e.g. somatization as expression of emotional distress
- All recommendations category 2A unless otherwise indicated

# Assessment

- Safety risk, mania, or psychosis present: ___ (safety_risk)
- Psychosis symptoms present: ___ (psychosis_symptoms)
- Depressive symptoms present (of 9): ___ (depressive_symptom_count)
- Duration/frequency of depressive symptoms: ___ (symptom_duration)
- Manic symptoms present (of 7): ___ (manic_symptom_count)
- Screening tool used: ___ (screening_tool)
- Score: ___ (phq_score)

# Safety evaluation

- Safety Evaluation for Anxiety and Depression: SANXDE-A
- Safety risk, mania, or psychosis
    - Consider any of these symptoms of psychosis
        - Delusions
        - Auditory hallucinations
        - Disorganized thinking/speech
        - Abnormal behavior, catatonia
        - Diminished emotional expression
        - Lack of self-initiated activities
    - Evaluate medical factors, see Evaluation (SANXDE-7)
    - or refer to appropriate emergency mental health services for evaluation and treatment
        - Psychiatrist, psychologist, advanced practice clinician, and/or social worker
- No safety risk, mania, or psychosis
    - See Evaluation (SANXDE-7)
    - or refer to mental health services for evaluation and treatment
        - Psychiatrist, psychologist, advanced practice clinician, and/or social worker

# Major depressive disorder criteria

- For at least 2 weeks, at least half the time, having 5 or more of the following
    - Depressed, sad, empty, or hopeless mood or appearance
    - Loss of interest or pleasure in most activities
    - Weight loss or gain
    - Sleep disturbance
    - Psychomotor agitation or retardation
    - Lack of energy
    - Feeling worthless or having excessive guilt
    - Diminished concentration, indecisiveness
    - Thoughts of death, suicidal ideation
- Meets criteria: major depressive disorder (MDD)

# Adjustment disorder or other depressive symptoms disorder

- Does not meet MDD criteria
- Consider symptoms of mania or history of mania, with 3 or more of the following
    - Expansive or irritable mood
    - Increased energy or goal-directed activity
    - Inflated self-esteem or grandiosity
    - Decreased need for sleep
    - More talkative, pressured speech
    - Racing thoughts, flight of ideas
    - High-risk behaviors

# Next

- Safety risk, mania, or psychosis: evaluate medical factors, go to SANXDE-7, or refer to emergency mental health services for evaluation and treatment
- No safety risk, mania, or psychosis: go to SANXDE-7, or refer to mental health services for evaluation and treatment
- Meets major depressive disorder criteria: MDD
- Does not meet MDD criteria: adjustment disorder or other depressive symptoms disorder, go to Screening (SANXDE-6)
