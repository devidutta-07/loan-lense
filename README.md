# LoanLense 🏦

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-1.55+-red.svg)](https://streamlit.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

This project is a machine learning-based loan approval prediction system that analyzes applicant financial and demographic data to predict whether a loan application should be approved or rejected. The system uses various machine learning algorithms, with XGBoost providing the best performance for accurate predictions.

The project includes:
- 📊 Data preprocessing and feature engineering
- 🤖 Multiple model comparisons (Logistic Regression, KNN, SVM, Naive Bayes, Random Forest, XGBoost)
- 📈 Model evaluation with cross-validation
- 🌐 A Streamlit web application for easy prediction interface
- 💾 Saved model artifacts for deployment

## Features

- **Data Analysis**: Comprehensive exploratory data analysis (EDA) with correlation analysis
- **Feature Engineering**: Creation of new financial features like TotalIncome, LoanIncomeRatio, EMI, etc.
- **Model Training**: Training and evaluation of multiple ML models
- **Web Interface**: Streamlit app for user-friendly loan prediction
- **Model Persistence**: Saved models and scalers for production use

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deviduttaparida/loanlense.git
   cd loanlense
   ```

2. Create a virtual environment (recommended):
   ```bash
   python -m venv loan_env
   source loan_env/bin/activate  # On Windows: loan_env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Running the Streamlit App

To run the loan prediction web application:

```bash
streamlit run app.py
```

This will start the Streamlit server, and you can access the app in your browser at `http://localhost:8501`.

### Model Training

The model training process is documented in the Jupyter notebook `Universal_Loan_Prediction.ipynb`. To retrain the model:

1. Ensure you have the dataset `bank_loan_data.csv` in the project directory
2. Open and run the notebook cells sequentially
3. The trained model will be saved as `loan_prediction_model.pkl`

## Dataset

The model was trained on a loan application dataset containing features such as:
- Applicant Income
- Coapplicant Income
- Loan Amount
- Loan Amount Term
- Credit History
- Property Area
- Demographic information (Gender, Married, Education, Self-Employed, Dependents)

📥 **Download Dataset**: [Kaggle - The Loan Prediction Data Compendium](https://www.kaggle.com/datasets/deviduttaparida/the-loan-prediction-data-compendium)

## Model Performance

The XGBoost model achieved:
- Mean ROC-AUC: ~0.94 (with 5-fold cross-validation)
- Accuracy: ~92%
- Precision: ~0.90
- Recall: ~1.00

Key features influencing predictions:
1. LoanIncomeRatio
2. ApplicantIncome
3. EMI
4. TotalIncome
5. IncomePerPerson

## Project Structure

```
loanlense/
├── app.py                          # Streamlit web application
├── requirements.txt                # Python dependencies
├── Universal_Loan_Prediction.ipynb # Model training notebook
├── loan_prediction_model.pkl       # Saved model artifacts
├── README.md                       # Project documentation
└── bank_loan_data.csv              # Dataset (not included in repo)
```

## Technologies Used

- **Python**: Core programming language
- **Pandas & NumPy**: Data manipulation
- **Scikit-learn**: Machine learning algorithms and preprocessing
- **XGBoost**: Primary prediction model
- **Streamlit**: Web application framework
- **Matplotlib & Seaborn**: Data visualization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## GitHub Repository

Visit the project on GitHub: [LoanLense](https://github.com/deviduttaparida/loanlense)