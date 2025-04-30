# 🧮 Loan Approval Prediction System

**Loan Approval Prediction System** is a machine learning project designed to predict whether a loan should be granted to an individual (classification) and, if yes, how much loan can be sanctioned (regression). The project performs detailed data analysis, preprocessing, model training, and ensembling to enhance decision-making in the loan approval process.

---

## 🎯 Use Case

This project simulates a **real-world financial decision system** for banks or lending institutions. It helps:
- **Financial analysts** assess applicant risk.
- **Institutions** reduce loan default risks.
- **Developers & data scientists** understand classification and regression in credit scoring.

---

## 🧪 Dataset

- **Train data**: `train.xlsx`
- **Test data**: `test.csv`
- Features include demographics, employment, income, loan history, and property area.
- Target variable: `Loan_Status`

---

## 📊 Data Cleaning & EDA

Performed with:
- **Heatmaps** and **boxplots** to detect relationships and outliers.
- Outlier removal from fields like `ApplicantIncome`.
- Missing value imputation on: `'Gender', 'Married', 'Dependents', 'Self_Employed', 'LoanAmount', 'Loan_Amount_Term', 'Credit_History'`.

### Feature Engineering:
- Created logs of income features: `TotalIncome_log`, `ApplicantIncome_log`, etc.
- Scaled numerical features using **Normalizer** for stability.
- Used **Label Encoding** for categorical variables.

---

## 🧠 Models Used

| Model                  | Accuracy (%)           |
|------------------------|------------------------|
| Naive Bayes            | 82.92%                 |
| K-Nearest Neighbors    | 83.74%                 |
| Logistic Regression    | 82.11%                 |
| Voting Classifier      | 82.92% (Ensembled)     |

### Ensemble Method:
Used **Voting Classifier** to combine individual models for improved performance.

---

## 🛠️ Technologies Used

- **Language**: Python
- **Libraries**: pandas, numpy, seaborn, matplotlib, scikit-learn
- **Modeling**: Naive Bayes, KNN, Logistic Regression, VotingClassifier
- **Notebook**: Jupyter (.ipynb)
- **Data**: Excel (.xlsx), CSV

---

## 📂 Files Included

- `Outstanding-1.ipynb`: Main notebook for model training
- `train.xlsx`: Training data
- `test.csv`: Test data

---

## 📜 License

This project is intended for educational and research purposes only.
