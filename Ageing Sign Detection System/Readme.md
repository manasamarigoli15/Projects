 # 🧬 Ageing Sign Detection System

**Ageing Sign Detection** is a machine learning-based application that detects and localizes common signs of facial ageing such as **puffy eyes**, **wrinkles**, and **dark spots** using the **EfficientNet** model. The solution leverages bounding box annotations for real-time visualization and provides multiple interfaces for execution: Google Colab, Jupyter Notebook, and Python scripts.

---

## 🎯 Use Case

This project is designed for:
- **Healthcare and dermatology professionals** to visually assess facial ageing signs.
- **Cosmetic companies** for AI-powered before/after visualizations.
- **Computer vision learners and researchers** as a practical application of object detection using TensorFlow and EfficientNet.

---

## 🛠️ Technologies Used

| Category         | Tools/Technologies                                      |
|------------------|----------------------------------------------------------|
| ML/DL Framework  | TensorFlow 2.4.1, Keras                                  |
| Computer Vision  | OpenCV (cv2), dlib, Haar cascades, imutils               |
| Model Used       | EfficientNet                                             |
| Programming Lang | Python 3.8                                               |
| IDE Support      | Jupyter Notebook, Google Colab, CLI Python               |

---

## 🧾 Folder Structure

- `/dataset`: Contains the facial images used for training.
- `/cascade`: Haar cascades for face detection.
- `/shape-predictor`: Dlib's 81-point facial landmark model.
- `/Colab notebook`: Google Colab-compatible notebooks.
- `/Jupyter notebook`: Jupyter environment-compatible notebooks.
- `/Python Script`: Standalone script for local execution.
  
---

## 🚀 How to Run the Project

### Option 1: Google Colab
1. Upload the project folder to Google Drive.
2. Open `Ageing_Sign_Detect.ipynb` in Colab.
3. Provide appropriate paths when prompted (e.g., model.json, weights.h5).
4. Run each cell with `Shift+Enter`.

### Option 2: Jupyter Notebook
1. Open `Ageing_Sign_Detect.ipynb` via Anaconda or JupyterLab.
2. Ensure local paths to model and predictors are correctly set.
3. Run all cells in order.

### Option 3: Python Script
```bash
python Ageing_Sign_Detect.py \
    --model ../model_weights/model.json \
    --weight ../model_weights/weights.h5 \
    --cascade ../cascade/haarcascade_frontalface_default.xml \
    --shape-predictor ../shape-predictor/shape_predictor_81_face_landmarks.dat \
    --image path_to_image.jpg
```
Use `--help` for command-line help:
```bash
python Ageing_Sign_Detect.py --help
```

---

## 🧪 Model Training (Developer Use)

To train or retrain the model:
- Use `Ageing_Sign_Train.ipynb` found in each interface folder (Colab/Jupyter/Python).
- Preprocesses images and trains EfficientNet on ageing sign classes.
- Outputs weights and JSON model files for deployment.

---

## 📦 Requirements

```
tensorflow==2.4.1
tensorflow-base==2.4.1
tensorflow-estimator==2.4.1
scikit-learn
cv2
dlib
keras
imutils
```
---

## 📄 License
This project is licensed for educational and research purposes only.
