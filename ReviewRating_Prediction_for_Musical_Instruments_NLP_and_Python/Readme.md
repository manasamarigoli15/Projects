# 🎵 Review Rating Prediction for Musical Instruments

This is an NLP-based machine learning project designed to predict product ratings based on customer reviews and summaries from the Amazon Musical Instruments dataset. This project focuses on **text preprocessing**, **feature engineering**, and **classification modeling** using both Bag-of-Words and TF-IDF vectorizations.

---

## 🎯 Use Case

This project demonstrates how Natural Language Processing can help e-commerce platforms:
- Predict user ratings from written reviews.
- Improve **personalized product recommendations**.
- Identify inconsistencies between written sentiment and numerical rating.
- Build smart review summarization systems.

---

## 📦 Dataset

- **File**: `Musical_instruments_reviews.csv` and `Musical_Instruments_5.json`
- **Independent Features**: `reviewText + summary` (combined as a single input text)
- **Dependent Feature**: `overall` (rating from 1 to 5)

---

## 🧹 Text Cleaning & Preprocessing

The following steps were applied to prepare the review text:

- Removing stopwords
- Removing punctuation
- Tokenization
- Lemmatization
- Feature Extraction:
  - Bag-of-Words (BoW)
  - TF-IDF (Term Frequency-Inverse Document Frequency)

---

## 🧠 Models Used & Accuracy

| Model                     | Vectorizer | Accuracy   |
|---------------------------|------------|------------|
| Logistic Regression       | BoW        | 88.99%     |
| Logistic Regression       | TF-IDF     | 88.99%     |
| Naive Bayes               | BoW        | 84.22%     |
| Naive Bayes               | TF-IDF     | 84.22%     |
| Support Vector Machine    | BoW        | 88.89%     |
| Support Vector Machine    | TF-IDF     | 88.89%     |

---

## 🧠 Neural Network Notes

- **Neuron Type**: Sigmoid neuron
- **Activation Function**: Sigmoid
  - Reason: Output maps between 0 and 1, ideal for binary/multiclass classification.
- **Optimizer**: (Not explicitly mentioned, but likely SGD or Adam)
  - Role: Adjusts weights to optimize model accuracy.

---

## 🛠️ Technologies Used

- **Language**: Python
- **Libraries**: pandas, numpy, scikit-learn, NLTK
- **Modeling**: Logistic Regression, Naive Bayes, SVM
- **NLP Techniques**: Lemmatization, TF-IDF, BoW
- **Notebook**: Jupyter

---

## 📁 Files Included

- `Outstanding-2.ipynb`: Main notebook with EDA, preprocessing, modeling
- `Musical_instruments_reviews.csv`: Review dataset
- `Musical_Instruments_5.json`: Additional Amazon review data

---

## 📜 License

This project is for educational and research purposes only.
