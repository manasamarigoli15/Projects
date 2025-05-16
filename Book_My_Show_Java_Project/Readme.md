
# 🎬 Movie Ticket Booking Application

A **microservices-based** movie ticket booking application built using **Spring Boot**, **JPA**, **MySQL**, and **Angular**. Designed to provide a seamless experience for both moviegoers and multiplex administrators.

---

## 📌 Features

### 🎟️ For Users
- Browse currently running movies
- View show timings and availability
- Select preferred seats and book tickets
- Receive email confirmation on successful booking

### 🛠️ For Admin (Multiplex Manager)
- Add and manage screens
- Schedule and update movie shows
- Monitor screen capacity and show occupancy

---

## 🧱 Tech Stack

| Layer         | Technology                  |
|---------------|-----------------------------|
| Backend       | Spring Boot (Microservices) |
| Database      | MySQL + JPA (Hibernate)     |
| Frontend      | Angular                     |
| Communication | REST APIs                   |
| Email Service | Spring Mail                 |

---

## 📁 Microservices Architecture

- **User Service**: Handles user registration, login, and booking history
- **Movie Service**: Manages movie details and show schedules
- **Booking Service**: Processes seat selection and ticket confirmation
- **Admin Service**: Enables multiplex admin to manage screens and shows
- **Email Notification Service**: Sends confirmation emails post booking

---

## 🛠️ Setup Instructions

### 📦 Prerequisites

- Java 17+
- Node.js 16+
- MySQL 8+
- Angular CLI
- Maven

## 📌 Future Enhancements

- Payment Gateway Integration
- Mobile App Support
- Recommendation System for Movies
- Seat auto-allocation with AI-based optimization
