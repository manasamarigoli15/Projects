# 🐦 Twitter User Gender Classification

This is a machine learning project focused on **predicting the gender of Twitter users** based on user metadata and tweet content. It uses a mix of text-based features and profile attributes to classify users as **male**, **female**, or **unknown**.

---

## 🎯 Use Case

This project is relevant for:
- **Marketing analytics**: Gender targeting in campaigns.
- **Sociological research**: Understanding gendered patterns in social media.
- **NLP learners**: End-to-end practice in text normalization and user classification.

---

## 📂 Dataset

- **Source**: [Kaggle – Twitter User Gender Classification](https://www.kaggle.com/crowdflower/twitter-user-gender-classification)
- **File**: `gender-classifier-DFE-791531.csv`

### 🧾 Features

- **Independent Features**:
  - Textual: `text`, `description`, `text_norm`, `description_norm`
  - Metadata: `fav_number`, `retweet_count`, `tweet_count`, `link_color`, `sidebar_color`, etc.
- **Dependent Feature**: `gender`

---

## 🧹 Data Cleaning & Feature Engineering

Steps performed:
- Handled missing values by dropping or imputing.
- Normalized text using:
  - Lowercasing
  - Removing punctuation
  - Removing stopwords
- Feature selection:
  - Used **correlation matrix** and **heatmap**
  - Evaluated feature importance from models

---

## 🧠 Models & Accuracy

| Model         | Accuracy |
|---------------|----------|
| MLPClassifier | 38.01%   |
| Naive Bayes   | 43.61%   |

---

## 🧠 Neural Network Details

- **Neuron Type**: Sigmoid neuron
- **Activation Function**: Sigmoid
  - Maps outputs between 0 and 1
- **Optimizer**: (Not specified, typically Adam/SGD)
  - Helps shape model weights during training

---

## 🛠️ Technologies Used

- **Language**: Python
- **Libraries**: pandas, numpy, matplotlib, seaborn, scikit-learn
- **Modeling**: MLPClassifier (Neural Network), Naive Bayes
- **Notebook**: Jupyter Notebook

---

## 📁 Files Included

- `Outstanding-3.ipynb`: Main notebook for cleaning, modeling, and evaluation
- `gender-classifier-DFE-791531.csv`: Input dataset

---

## 📜 License

This project is for educational and research purposes only.
