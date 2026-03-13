import streamlit as st
import pandas as pd
import numpy as np
import joblib

# -----------------------------

# Load Model

# -----------------------------

artifacts = joblib.load("loan_prediction_model.pkl")

model = artifacts["model"]
features = artifacts["features"]

# -----------------------------

# Page Title

# -----------------------------

st.title("🏦 Loan Approval Prediction System")

st.write("Enter applicant details to check loan approval probability")

# -----------------------------

# Input Section

# -----------------------------

Gender = st.selectbox("Gender", ["Male","Female"])

Married = st.selectbox("Married", ["Yes","No"])

Dependents = st.selectbox("Dependents", [0,1,2,3])

Education = st.selectbox("Education", ["Graduate","Not Graduate"])

Self_Employed = st.selectbox("Self Employed", ["Yes","No"])

ApplicantIncome = st.number_input("Applicant Income", min_value=0)

CoapplicantIncome = st.number_input("Coapplicant Income", min_value=0)

LoanAmount = st.number_input("Loan Amount", min_value=0)

Loan_Amount_Term = st.number_input("Loan Amount Term (Months)", min_value=1)

Credit_History = st.selectbox("Credit History", [1,0])

Property_Area = st.selectbox("Property Area", ["Urban","Semiurban","Rural"])

# -----------------------------

# Encoding

# -----------------------------

Gender = 1 if Gender == "Male" else 0

Married = 1 if Married == "Yes" else 0

Education = 1 if Education == "Graduate" else 0

Self_Employed = 1 if Self_Employed == "Yes" else 0

area_map = {"Urban":2,"Semiurban":1,"Rural":0}

Property_Area = area_map[Property_Area]

# -----------------------------

# Feature Engineering

# -----------------------------

TotalIncome = ApplicantIncome + CoapplicantIncome

LoanIncomeRatio = LoanAmount / (TotalIncome + 1)

EMI = LoanAmount / (Loan_Amount_Term + 1)

ApplicantIncome_log = np.log1p(ApplicantIncome)

LoanAmount_log = np.log1p(LoanAmount)

IncomePerPerson = TotalIncome / (Dependents + 1)

LoanTermYears = Loan_Amount_Term / 12

LoanPerYear = LoanAmount / (LoanTermYears + 1)

# -----------------------------

# DataFrame Creation

# -----------------------------

input_data = pd.DataFrame([[

Gender,
Married,
Dependents,
Education,
Self_Employed,
ApplicantIncome,
CoapplicantIncome,
LoanAmount,
Loan_Amount_Term,
Credit_History,
Property_Area,
TotalIncome,
LoanIncomeRatio,
EMI,
ApplicantIncome_log,
LoanAmount_log,
IncomePerPerson,
LoanTermYears,
LoanPerYear

]], columns=features)

# -----------------------------

# Prediction

# -----------------------------

if st.button("Predict Loan Status"):

    input_data = input_data[features]

    prediction = model.predict(input_data)[0]

    # probability = model.predict_proba(input_data)[0][1]

    st.subheader("Prediction Result")

    if prediction == 1:
        st.success("✅ Loan Approved")
    else:
        st.error("❌ Loan Rejected")

    # st.write("Approval Probability:", round(probability,2))
