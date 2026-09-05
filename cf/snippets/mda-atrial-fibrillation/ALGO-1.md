+++
id           = "mda-atrial-fibrillation/ALGO-1"
gid          = "mda-atrial-fibrillation"
ref          = "ALGO-1"
page         = 1
title        = "Inpatient assessment, cardioversion, rate control, and anticoagulation management of new-onset atrial fibrillation or atrial flutter in adult cancer patients"
nccn_version = "V5"
nccn_date    = "11/18/2025"
generated    = "2026-09-03"

[facets]
disease = "mda-atrial-fibrillation"

[[variables]]
name = "sex"
type = "enum"
options = ["male", "female"]
[[variables]]
name = "onset_hours"
type = "number"
[[variables]]
name = "cha2ds2_vasc_score"
type = "number"
[[variables]]
name = "heart_rate"
type = "number"
[[variables]]
name = "has_bled_score"
type = "number"
[[variables]]
name = "weight_kg"
type = "number"
[[variables]]
name = "crcl"
type = "number"
[[variables]]
name = "platelet_count"
type = "number"
[[variables]]
name = "child_pugh_class"
type = "enum"
options = ["A", "B", "C"]
+++

# Source

- MD Anderson Atrial Fibrillation (AF) and Atrial Flutter Inpatient Management - Adult, V5, approved 11/18/2025
- This algorithm should not be used to treat pregnant women

# Assessment

- Suspected new onset AF/atrial flutter
- Initiate a Goal Concordant Care (GCC) conversation with the patient, or if clinically indicated with the Patient Representative and the Primary Oncologist/Primary Team/Attending Physician
    - Document the GCC discussion in the Advance Care Planning (ACP) note
- Assessment and prompt treatment of underlying medical condition and/or correction of modifiable risk factors (Appendix A)
- Obtain CBC, comprehensive metabolic panel, thyroid studies, PT/INR, PTT, magnesium as clinically indicated
- Perform EKG to confirm AF/atrial flutter
- Sex ___ (sex)
- Time since onset of symptoms ___ (onset_hours) hours
- Is the patient hemodynamically stable?
    - No: see "If Hemodynamically Unstable"
    - Yes, onset < 48 hours: see "If Hemodynamically Stable, Onset < 48 Hours"
    - Yes, onset ≥ 48 hours or unknown: see "If Hemodynamically Stable, Onset ≥ 48 Hours or Unknown"

# If Hemodynamically Unstable

- Initiate transfer to cardiac monitoring bed
- Notify Responding Provider and activate the appropriate emergency response process for your area
    - Appropriate provider may include: Acute Cancer Care Center (ACCC) physician, on-call provider, attending physician, anesthesiologist, radiation oncology team, or diagnostic imaging team/radiologist
    - Refer to Cardiac Monitoring Admission and Discharge Policy (#CLN0511)
- Place patient on cardiac monitoring
- Initiate emergent electrical cardioversion (synchronized biphasic at 100-200 joules), per advanced cardiac life support (ACLS)
- Time of onset < 48 hours?
    - Yes
        - Immediately initiate LMWH or IV UFH at presentation if no contraindications (Appendix B), but do not delay cardioversion
        - Obtain EKG and echocardiogram and consult Cardiology
    - No
        - Assess for management of AF/atrial flutter and long term anticoagulation, see "Long Term Anticoagulation Management"
        - Obtain CBC, comprehensive metabolic panel, thyroid studies, PT/INR, PTT, magnesium as clinically indicated
- Refer to GCC home page (for internal use only)

# If Hemodynamically Stable, Onset < 48 Hours

- Applies to hemodynamically stable patients with onset < 48 hours and ongoing AF/atrial flutter
- Consult Cardiology for cardioversion
- CHA2DS2-VASc score ___ (cha2ds2_vasc_score) (Appendix C)
- Is CHA2DS2-VASc score ≥ 2 for males or ≥ 3 for females?
    - Yes
        - Pharmacologic cardioversion (see Appendix D for ibutilide exclusion criteria)
        - Anticoagulation with LMWH, IV UFH, or DOAC (Appendix E) if no contraindications (Appendix B), followed by long term anticoagulation, see "Long Term Anticoagulation Management"
    - No
        - Pharmacologic cardioversion (see Appendix D for ibutilide exclusion criteria)
        - Consider anticoagulation as clinically indicated
- Termination of AF/atrial flutter in < 48 hours?
    - Yes: follow up with Cardiology
    - No: see "If Hemodynamically Stable, Onset ≥ 48 Hours or Unknown"

# If Hemodynamically Stable, Onset ≥ 48 Hours or Unknown

- Applies to hemodynamically stable patients with onset ≥ 48 hours or unknown and ongoing AF/atrial flutter
- Consult Cardiology if not done previously to assess need for cardioversion
- Need for cardioversion?
    - Yes
        - Anticoagulation with LMWH, IV UFH, or DOAC (Appendix E) if no contraindications (Appendix B), PRIOR to TEE/electrical or pharmacological cardioversion
        - For elective outpatient cardioversion, consult Cardiology
        - Anticoagulation if no contraindications for at least 4 weeks after cardioversion, and assess for long term anticoagulation, see "Long Term Anticoagulation Management"
    - No
        - For management with rate control, see "Rate Control"
        - Assess for long term anticoagulation, see "Long Term Anticoagulation Management"

# Rate Control

- Factors to consider for treatment include
    - Persistent AF/atrial flutter
    - Symptoms (e.g., palpitations, shortness of breath, lightheadedness)
    - Age > 65 years
    - Hypertension
    - No history of heart failure (HF)
    - Patient preference
    - Refractory to previous anti-arrhythmic drug therapy
- Initiate rate controlling medications
    - Beta blockers, calcium channel blockers, digoxin, amiodarone (Appendix G for common medication dosage)
    - Consider Cardiology consult prior to ordering digoxin for patients with atrial fibrillation with rapid ventricular response (RVR)
    - See Appendix F for special considerations regarding drug choice
- Heart rate ___ (heart_rate) bpm
- Rate control < 110 bpm?
    - Yes
        - Continue regimen
        - Follow-up with Cardiology
    - No
        - Is the patient hemodynamically unstable?
            - Yes
                - Continue rate controlling medications
                - Consider admit/transfer to Intensive Care Unit (ICU)
                    - Criteria for admit/transfer to ICU: progressive hemodynamic instability, failure to respond to rate control agents
                - Cardiology consult
            - No: follow-up with Cardiology

# Long Term Anticoagulation Management

- CHA2DS2-VASc score ___ (cha2ds2_vasc_score), sex ___ (sex) (Appendix C)
- CHA2DS2-VASc high risk (score ≥ 2 for males or ≥ 3 for females)
    - Long term anticoagulation recommended if no contraindications (Appendix B)
    - Assess bleeding risk (Appendix I), HAS-BLED score ___ (has_bled_score)
        - For those at high risk of bleeding, attempt to eliminate modifiable risk factors; decision to anticoagulate can be made on a case-by-case basis
    - See Appendix H for anticoagulation recommendations for patients on OAC needing PCI
- CHA2DS2-VASc moderate risk (score 1 for males or 2 for females)
    - Consider long term anticoagulation if no contraindications (Appendix B)
    - Assess bleeding risk (Appendix I) if decision is made to anticoagulate
        - For those at high risk of bleeding, attempt to eliminate modifiable risk factors; decision to anticoagulate can be made on a case-by-case basis
    - See Appendix H for anticoagulation recommendations for patients on OAC needing PCI
- CHA2DS2-VASc low risk (score 0 for males or 1 for female)
    - Anticoagulation not recommended

# Appendix A: Risk Factors for New-Onset AF/Atrial Flutter

- Acid-base abnormalities
- Advanced age
- Anemia
- Electrolyte abnormalities
- Fluid overload
- Acute coronary syndrome (ACS)
- Hypertension
- Hyperthyroid
- Alcohol use
- Heart failure
- Diabetes
- Smoking
- Hypotension
- Hypoxemia
- Male sex
- Obesity
- Recent (within 24-48 hours) thoracic surgery (e.g., esophageal, lung, heart)

# Appendix B: Contraindications to Anticoagulation Therapy

- Absolute contraindications
    - Major active bleeding (bleeding requiring > 2 units packed red blood cells (PRBC) transfusion, decrease in hemoglobin by ≥ 2 g/dL, or bleeding in a critical area or organ)
    - Platelet count ___ (platelet_count) K/microliter; if < 25 K/microliter, consult to Benign Hematology
    - Spinal procedure and/or epidural placement
    - Severe uncontrolled malignant hypertension
- Relative contraindications
    - Brain metastases with higher risk of bleeding (renal, choriocarcinoma, melanoma, thyroid cancer)
    - Intracranial or central nervous system (CNS) bleeding within the past 4 weeks
    - Recent high-risk surgery or bleeding event
    - Active but non-life threatening bleeding
    - Active gastrointestinal (GI) ulceration at high risk of bleeding
    - Platelet count < 50 K/microliter, consider consult to Benign Hematology
    - Patient on active protocol that prohibits use of anticoagulation
- Refer to Peri-Procedure Management of Anticoagulants algorithm

# Appendix C: CHA2DS2-VASc Risk Score for Stroke or Systemic Embolism

- Congestive heart failure — 1 point
- Hypertension: blood pressure consistently above 140/90 mmHg (or treated hypertension on medication) — 1 point
- Age ≥ 75 years — 2 points
- Diabetes mellitus — 1 point
- Prior stroke or TIA or thromboembolism — 2 points
- Vascular disease — 1 point
- Age 65-74 years — 1 point
- Sex category (1 point for female)

# Appendix D: Ibutilide Exclusion Criteria

- Bundle branch block (BBB) (QRS > 120 ms)
- Preexisting 2nd/3rd degree atrioventricular block (AVB)
- Prolonged QT (QTc > 440) or Brugada syndrome
- Potassium level < 3 mmol/L
- Patient already on an antiarrhythmic
- Pregnancy
- Severe hepatic or renal insufficiency with creatinine clearance (CrCl) < 35 mL/minute

# Appendix E: Anticoagulation Therapy Options for Cancer Patients

- Prior to anticoagulation therapy, assess bleeding risk (Appendix I)
- For bleeding complications, refer to Emergency Anticoagulation Reversal Order Set
- If lab results indicate heparin induced thrombocytopenia, follow management per Heparin Induced Thrombocytopenia (HIT) Treatment algorithm
- Refer to the Anticoagulant Management and Required Laboratory Monitoring Policy (#CLN0984)
- Weight ___ (weight_kg) kg; creatinine clearance (CrCl) ___ (crcl) mL/minute; platelet count ___ (platelet_count) K/microliter
- LMWH — Enoxaparin (Lovenox)
    - Dose: 1 mg/kg subcutaneously every 12 hours, or 1.5 mg/kg subcutaneously once daily in selected patients
    - Monitoring
        - Baseline: hemoglobin/hematocrit, platelet count, creatinine, aPTT/PT
        - Routine therapeutic monitoring not required; anti-Xa levels may be useful in high-risk patients (obesity, malnutrition, renal insufficiency, unexplained bleeding or thrombosis)
        - Surgical inpatient: hemoglobin/hematocrit and platelet count 24 hours after starting, then every 3 days from days 4-14 unless stopped or discharged; after day 14, at least once weekly
        - Medical inpatient: hemoglobin/hematocrit and platelet count at least once weekly
        - Outpatient: no other monitoring needed except platelet count at least once during the first 14 days of therapy if prior recent (within 30 days) exposure to heparin or LMWH
        - Maintenance therapy: hemoglobin/hematocrit, platelet count, creatinine, hepatic function tests at least once yearly
            - CrCl 30-60 mL/minute: creatinine every 6 months
            - CrCl < 30 mL/minute: creatinine every 3 months
    - Dose adjustments
        - Renal: CrCl 20-30 mL/minute: 1 mg/kg once daily; CrCl < 20 mL/minute: avoid use
        - Weight: consider anti-Xa level if weight < 50 kg or > 150 kg or BMI ≥ 40 kg/m2
            - 1 mg/kg every 12 hour regimen: adjust dose to obtain anti-Xa level of 0.6-1 IU/mL (4-6 hours after fourth dose)
            - 1.5 mg/kg once daily regimen: adjust dose to obtain anti-Xa level of 1-2 IU/mL (4-6 hours after fourth dose)
            - Obese patients (BMI ≥ 40 kg/m2): limited data suggest 0.75-0.85 mg/kg every 12 hours
        - Platelet count
            - Platelet count > 50 K/microliter: full dose 1 mg/kg every 12 hours, or alternative 1.5 mg/kg once daily
            - Platelet count 25-50 K/microliter: half dose 0.5 mg/kg every 12 hours
            - Platelet count < 25 K/microliter: hold all anticoagulants
- UFH (unfractionated heparin) — IV heparin infusion
    - Dose per Adult Heparin Infusion Order Set
    - Monitoring
        - Baseline: hemoglobin/hematocrit, platelet count, aPTT/PT
        - Therapeutic: aPTT to achieve specified target range per protocol
        - Inpatient: hemoglobin/hematocrit and platelet count 24 hours after starting, then every 2 days from days 4-14 unless stopped; after day 14, at least once weekly
        - Outpatient new start: platelet count at least once during the first 14 days of therapy regardless of prior exposure history
        - Outpatient maintenance: hemoglobin/hematocrit and platelet count every 3 months
- Warfarin (selected vitamin K antagonist) — for long term management
    - Overlap warfarin (2.5-5 mg PO) with induction therapy (LMWH or Factor Xa inhibitor) beginning on Day 1 of therapy
    - Continue induction therapy until INR ≥ 2 for two days, AND patient has received at least 4-5 days of induction therapy overlap
    - General INR goal: 2-3
    - Mechanical aortic valve INR goal: 2-3
    - On-X mechanical aortic valve INR goal: 2-3, then may lower to 1.5-2 after 3 months post-op
    - Mechanical mitral valve INR goal: 2.5-3.5
    - A higher INR goal of 2.5-3.5 is recommended for patients with additional thromboembolic risk factors (older-generation valve, atrial fibrillation, previous thromboembolism, hypercoagulable state, or left ventricular systolic dysfunction)
    - Monitoring
        - Baseline: hemoglobin/hematocrit, platelet count, PT/INR, hepatic function tests
        - Therapeutic: INR to achieve specified target range
        - Inpatient: hemoglobin/hematocrit, platelet count, INR at least once weekly
        - Outpatient: INR every 3 months at a minimum; hemoglobin/hematocrit, platelet count, creatinine, hepatic function tests at least once yearly
- Fondaparinux (Arixtra), Factor Xa inhibitor — subcutaneously daily
    - Dose by actual body weight: < 50 kg: 5 mg; 50-100 kg: 7.5 mg; > 100 kg: 10 mg
    - Monitoring
        - Baseline: hemoglobin/hematocrit, platelet count, aPTT/PT, creatinine
        - Routine therapeutic monitoring not required; anti-Xa levels may be useful in high-risk patients (obesity, malnutrition, renal insufficiency, unexplained bleeding or thrombosis)
        - Inpatient: hemoglobin/hematocrit, platelet count, creatinine at least once weekly
        - Outpatient: hemoglobin/hematocrit, platelet count, creatinine, hepatic function tests at least once yearly
            - CrCl 30-60 mL/minute: creatinine every 6 months
            - CrCl < 30 mL/minute: creatinine every 3 months
    - Dose adjustments
        - Renal: CrCl 30-50 mL/minute: use with caution; CrCl < 30 mL/minute: contraindicated
        - Weight: BMI ≥ 40 kg/m2: no dose adjustment necessary
        - Platelet count: use with caution if platelet count < 100 K/microliter
- DOACs are preferred over warfarin for prevention of thromboembolism in patients with atrial fibrillation, except in moderate to severe mitral stenosis or mechanical heart valve recipients
    - No evidence available with DOAC management in cancer patients who experience chemotherapy induced thrombocytopenia
    - DOACs are not recommended in patients with active gastrointestinal cancer
- Rivaroxaban (Xarelto), oral Factor Xa inhibitor
    - CrCl > 50 mL/minute, non-valvular AF (NVAF), not for any heart valve: 20 mg once daily with food in evening
    - CrCl ≤ 50 mL/minute: 15 mg once daily with food in evening
    - Child-Pugh class ___ (child_pugh_class) (Appendix J); Child-Pugh class B or C: NOT recommended
    - Class specific contraindication: moderate to severe mitral stenosis or mechanical heart valve
    - Significant drug-drug interactions: P-glycoprotein and CYP 3A4 (assess via UpToDate, Lexidrug, or Micromedex)
- Apixaban (Eliquis), oral Factor Xa inhibitor
    - Dosing by criteria (age ≥ 80 years, weight ≤ 60 kg, creatinine ≥ 1.5 mg/dL)
        - 0-1 criterion: 5 mg twice daily
        - 2-3 criteria: 2.5 mg twice daily
    - ESRD on hemodialysis: 5 mg twice daily; if age ≥ 80 years or body weight ≤ 60 kg, then 2.5 mg twice daily
    - Strong CYP 3A4 inhibitors (ketoconazole, itraconazole, ritonavir, clarithromycin) and P-glycoprotein inhibitors: decrease current dose by 50% (if on 2.5 mg twice daily, then avoid)
    - Child-Pugh class C: not recommended; limited experience in Child-Pugh class B
    - Class specific contraindication: moderate to severe mitral stenosis or mechanical heart valve
    - Significant drug-drug interactions: P-glycoprotein and CYP 3A4
- Rivaroxaban/apixaban monitoring
    - Baseline: hemoglobin/hematocrit, platelet count, aPTT/PT, creatinine, hepatic function tests
    - Routine therapeutic monitoring not required; anti-Xa levels may be useful in high-risk patients, currently only available for apixaban and rivaroxaban
    - Inpatient: hemoglobin/hematocrit, platelet count, creatinine at least once weekly
    - Outpatient: hemoglobin/hematocrit, platelet count, creatinine, hepatic function tests at least once yearly
        - CrCl 30-60 mL/minute: creatinine every 6 months
        - CrCl < 30 mL/minute: creatinine every 3 months
- Edoxaban (Savaysa), oral Factor Xa inhibitor — not currently on MD Anderson formulary
    - Non-valvular AF (NVAF), not for any heart valve; MUST assess CrCl before initiating
    - CrCl > 95 mL/minute: avoid use
    - CrCl > 50 to ≤ 95 mL/minute: 60 mg daily
    - CrCl 15-50 mL/minute: 30 mg daily
    - Child-Pugh class B or C: NOT recommended
    - Class specific contraindication: moderate to severe mitral stenosis or mechanical heart valve
    - Significant drug-drug interactions: P-glycoprotein and CYP 3A4
- Dabigatran (Pradaxa), direct thrombin inhibitor
    - CrCl > 30 mL/minute: 150 mg twice daily
    - CrCl 15-30 mL/minute: 75 mg twice daily
    - CrCl < 15 mL/minute or on hemodialysis: no recommendations
    - CrCl 30-50 mL/minute and dronedarone or ketoconazole: 75 mg twice daily
    - CrCl < 30 mL/minute and P-glycoprotein inhibitor (Pgp-I): avoid use
    - CrCl < 15 mL/minute and any P-glycoprotein inducer: avoid use
    - No recommendations by manufacturer for use in liver disease
    - Class specific contraindication: moderate to severe mitral stenosis or mechanical heart valve
    - Significant drug-drug interaction: P-glycoprotein
- Edoxaban/dabigatran monitoring
    - Baseline: hemoglobin/hematocrit, platelet count, aPTT/PT, creatinine, hepatic function tests
    - Routine therapeutic monitoring not required
        - Edoxaban: anti-Xa levels may be useful in high-risk patients
        - Dabigatran: thrombin time (TT) may be useful in high-risk patients
    - Inpatient: hemoglobin/hematocrit, platelet count, creatinine at least once weekly
    - Outpatient: hemoglobin/hematocrit, platelet count, creatinine, hepatic function tests at least once yearly
        - CrCl 30-60 mL/minute: creatinine every 6 months
        - CrCl < 30 mL/minute: creatinine every 3 months

# Appendix F: Drug Choice for Rate Control

- Reactive airway disease (asthma, chronic obstructive pulmonary disease)
    - Drug of choice: calcium channel blockers
    - Caution: beta-selective beta blockers may be used with caution
- Hypertension and heart failure (HF) with normal left ventricular systolic function
    - Drug of choice: beta blockers or calcium channel blockers
- Left ventricular systolic dysfunction with or without HF
    - Drug of choice: beta blockers, digoxin, or amiodarone
    - Caution: beta blockers should be used with caution as not to decompensate; calcium channel blockers are contraindicated
- No other cardiovascular disease
    - Drug of choice: beta blockers or calcium channel blockers

# Appendix G: Common Medication Dosage for Rate Control

- Beta blockers
    - Metoprolol tartrate: IV 2.5-5 mg IV bolus over 2 minutes, up to 3 doses; oral 25-100 mg twice daily
    - Metoprolol succinate (XL): oral 50-400 mg once daily
    - Atenolol: oral 25-100 mg once daily
    - Esmolol: IV 500 mcg/kg IV bolus over 1 minute, then 25-200 mcg/kg/minute IV
    - Propranolol: IV 1 mg IV over 1 minute, up to 3 doses at 2-minute intervals; oral 10-40 mg three to four times a day
    - Nadolol: oral 10-240 mg four times a day
    - Carvedilol: oral 3.125-25 mg twice daily
    - Bisoprolol: oral 2.5-10 mg once daily
- Nondihydropyridine calcium channel blockers
    - Verapamil: IV 0.075-0.15 mg/kg IV bolus over 2 minutes, may give an additional 10 mg after 30 minutes if no response, then 0.005 mg/kg/minute infusion; oral 180-480 mg once daily (extended release)
    - Diltiazem: IV 0.25 mg/kg IV bolus over 2 minutes, then 5-15 mg/hour; oral 120-360 mg once daily (extended release)
- Other
    - Digoxin: IV 8-12 mcg/kg (using ideal body weight) IV bolus to a maximum of 1 mg; oral 0.125-0.25 mg once daily
        - Obtain EKG for baseline pre-excitation
        - Not to be used if evidence of pre-excitation on EKG
        - Consider Cardiology consult prior to ordering digoxin for patients with atrial fibrillation with rapid ventricular response (RVR)
    - Amiodarone: IV 150 mg over at least 10 to 30 minutes, then 1 mg/minute for 6 hours, then 0.5 mg/minute for 18 hours; oral 400 mg twice daily for one week, then 200 mg once daily
- Refer to Adult Cardiac Medication Monitoring Policy (#CLN0500)

# Appendix H: Anticoagulation for OAC Patients Needing PCI

- Applies to patients on oral anticoagulant (OAC) for AF/atrial flutter needing percutaneous coronary intervention (PCI)
- Doses per Appendix E, except rivaroxaban used with a P2Y12 inhibitor: rivaroxaban dose is 15 mg daily regardless of renal function
- High ischemic/thrombotic risk may include: left main stent, multivessel PCI/stenting, etc.
- Low risk of bleeding: HAS-BLED score 0-2 (Appendix I)
- High risk of bleeding: HAS-BLED score ≥ 3 (Appendix I)
- If no contraindications, DOAC is preferred over warfarin
- DAPT (dual antiplatelet therapy) = aspirin plus P2Y12 inhibitor; if aspirin given with OAC, use aspirin 81 mg daily plus a proton pump inhibitor
- Clopidogrel is the drug of choice for P2Y12 inhibitor; ticagrelor may be considered in patients with high thrombotic risk and acceptable bleeding risk (Appendix I)
- By time from PCI
    - Inpatient stay until discharge after PCI (up to 1 week): OAC + DAPT, for all risk categories
    - Up to 1 month
        - Default strategy: OAC + P2Y12 inhibitor
        - High ischemic/thrombotic risk and low bleeding risk: OAC + DAPT
        - Low ischemic/thrombotic risk or high bleeding risk: OAC + P2Y12 inhibitor
    - Up to 3 months: OAC + P2Y12 inhibitor, for all risk categories
    - Up to 6 months: OAC + P2Y12 inhibitor, for all risk categories
    - Up to 12 months
        - Default strategy: OAC + P2Y12 inhibitor
        - High ischemic/thrombotic risk and low bleeding risk: OAC + P2Y12 inhibitor
        - Low ischemic/thrombotic risk or high bleeding risk: OAC alone
    - Greater than 12 months: OAC alone, for all risk categories

# Appendix I: HAS-BLED Risk Score for Bleeding

- Hypertension — 1 point
- Abnormal liver or renal function — 1 point each
- Stroke — 1 point
- Bleeding — 1 point
- Labile INR — 1 point
- Elderly (age > 65) — 1 point
- Drugs or alcohol — 1 point each
- High risk: score ≥ 3
- If patient has high risk of bleeding on full dose anticoagulation, consider aspirin 81 mg for anticoagulation

# Appendix J: Child-Pugh (CP) Scoring System

- Hepatic encephalopathy: none (1 point), grade 1 or 2 (2 points), grade 3 or 4 (3 points)
- Ascites: none (1 point), slight (2 points), moderate (3 points)
- Albumin: > 3.5 g/dL (1 point), 2.8-3.5 g/dL (2 points), < 2.8 g/dL (3 points)
- Total bilirubin: < 2 mg/dL (1 point), 2-3 mg/dL (2 points), > 3 mg/dL (3 points)
- Prothrombin time prolonged (seconds) or INR: < 4 seconds or INR < 1.7 (1 point), 4-6 seconds or INR 1.7-2.3 (2 points), > 6 seconds or INR > 2.3 (3 points)
- CP score is obtained by adding the score for each parameter
- CP class: Class A = 5-6 points; Class B = 7-9 points; Class C = 10-15 points
