# Maven Web Application

A Java-based web application built using Maven, showcasing a modern DevOps workflow with features like CI/CD, Docker containerization, and deployment-ready packaging.

---

## 📌 Features

- Java Web Application following MVC architecture
- Dependency management and build automation with Apache Maven
- Docker support for containerized deployment
- Jenkins pipelines for CI/CD automation
- Deployment-ready for Apache Tomcat
- Compatible with IntelliJ IDEA for seamless development

---

## 🛠️ Tech Stack

- **Java 8+**
- **Apache Maven**
- **Spring Framework**
- **JUnit / Mockito**
- **Docker**
- **Jenkins**
- **Apache Tomcat**
- **IntelliJ IDEA** (Recommended IDE)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 8 or higher
- Maven 3.6+
- Docker (optional for containerization)
- Jenkins (optional for CI/CD pipeline)
- Apache Tomcat (optional for manual deployment)
- IntelliJ IDEA (recommended for development)

---

### 💻 Importing the Project into IntelliJ IDEA

1. Open IntelliJ IDEA.
2. Click on **File > New > Project from Existing Sources**.
3. Select the root folder containing the project.
4. IntelliJ will automatically detect the `pom.xml` and import it as a Maven project.
5. Wait for Maven dependencies to finish loading before proceeding.

---

### 🧪 Build Locally

Use the following command to build the project:

```bash
mvn clean install
```

This will generate a `.war` file in the `target/` directory.

---

### 🐳 Run with Docker

To build and run the application using Docker:

```bash
docker build -t maven-web-app .
docker run -p 8080:8080 maven-web-app
```

Visit `http://localhost:8080/` to access the application.

---

### ⚙️ Run via Tomcat (Manual Deployment)

1. Copy the generated `.war` file from the `target/` folder.
2. Paste it into the `webapps/` folder of your Apache Tomcat installation.
3. Start Tomcat and access the app at:  
   `http://localhost:8080/maven-web-application`

---

### 🔁 CI/CD with Jenkins

Use the provided `Jenkinsfile` to create a CI/CD pipeline with the following stages:

- Clone the repository
- Build with Maven
- Run tests
- Package the `.war`
- Build and optionally push Docker image
- Deploy to staging or production

---

## 📂 Project Structure

```
maven-web-application/
├── src/
│   ├── main/java/
│   └── main/webapp/
├── Dockerfile
├── Jenkinsfile
├── pom.xml
└── target/
```

---

## 💬 Feedback & Contributions

Contributions, issues, and feature requests are welcome. Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open for use and customization under a permissive license.
