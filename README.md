# Gerçek Zamanlı Sohbet Uygulaması (English below)

**Next.js**, **Socket.io** ve **React** kullanarak geliştirilen gerçek zamanlı bir sohbet uygulamasıdır. Bu uygulama, kullanıcıların belirli odalara katılmalarına, mesaj göndermelerine ve anlık olarak mesajları görmelerine olanak tanır. Backend, **Node.js** ve **Socket.io** kullanılarak geliştirilmiştir ve WebSocket iletişimi ile kullanıcılar arasındaki mesajlaşma sağlanmaktadır.

---

## Özellikler

- **Gerçek Zamanlı Mesajlaşma**: Kullanıcılar, **Socket.io** ile anlık mesajlaşabilirler.
- **Odalara Katılma**: Kullanıcılar, belirli bir odanın adıyla odaya katılabilirler.
- **Kullanıcı Dostu Arayüz**: **React** ve **Tailwind CSS** ile tasarlanmış duyarlı bir tasarım.
- **Sistem Mesajları**: Kullanıcı bir odaya katıldığında veya odadan ayrıldığında sistem mesajları görüntülenir.

---

## Kullanılan Teknolojiler

- **Frontend**:

  - **Next.js**: Statik ve dinamik web uygulamaları geliştirmek için kullanılan bir React framework'ü.
  - **React**: Kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesi.
  - **Socket.io-client**: Frontend'de WebSocket iletişimini sağlamak için kullanılır.
  - **Tailwind CSS**: Hızlı bir şekilde stil vermek için kullanılan utility-first bir CSS framework'ü.

- **Backend**:
  - **Node.js**: Sunucu tarafında kullanılan JavaScript çalışma zamanı.
  - **Socket.io**: Gerçek zamanlı, çift yönlü iletişim sağlamak için kullanılan bir kütüphane.

---

## Başlangıç

### Gereksinimler

- **Node.js**: [Node.js](https://nodejs.org/)in son sürümünü yükleyin.
- **npm**: Node.js ile birlikte gelen paket yöneticisi.

### Kurulum

1. Depoyu yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/furkanucgull/real-time-chat-app.git
   cd real-time-chat-app
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Uygulamayı geliştirme modunda çalıştırın:

   ```bash
   npm run dev
   ```

   Uygulamayı tarayıcınızda `http://localhost:3000` adresinden görüntüleyebilirsiniz.

### Yapılandırma ve Çalıştırma

Uygulamayı derlemek ve çalıştırmak için aşağıdaki komutları kullanabilirsiniz:

1. **Uygulamayı derlemek** (Socket.io ile):

   ```bash
   npm run build:socket
   ```

2. **Uygulamayı başlatmak**:

   ```bash
   npm run start:socket
   ```

---

## Nasıl Çalışır?

### Frontend

- **`Home` Component (`pages/index.tsx`)**:
  - Kullanıcı adı ve oda adı girdikten sonra, **Socket.io** üzerinden backend'e `join-room` olayı gönderilir ve kullanıcı odaya katılır.
  - Kullanıcı mesaj gönderdiğinde, **Socket.io** kullanılarak mesaj backend'e iletilir ve odaya bağlı tüm kullanıcılara iletilir.
  - **ChatForm** ve **ChatMessage** bileşenleri ile mesajlaşma işlemi yapılır.

### Backend

- **`server.js`**:
  - **Socket.io** kullanılarak gelen bağlantılar yönetilir ve odalara katılım sağlanır.
  - **`join-room`** olayı, kullanıcıları belirli bir odaya ekler ve tüm katılımcılara bildirilir.
  - **`message`** olayı, kullanıcıların mesajlarını backend'e iletir ve tüm odaya yayılarak diğer kullanıcılara gönderilir.

### WebSocket İletişimi

- **`socket.on('join-room')`**: Kullanıcı bir odaya katıldığında bu olay tetiklenir ve socket odaya dahil edilir.
- **`socket.on('message')`**: Mesajlar backend'e gelir ve odaya bağlı tüm kullanıcılara iletilir.

---

## Dağıtım

Bu uygulama, **Vercel**, **Heroku** veya **DigitalOcean** gibi platformlara kolayca dağıtılabilir. Vercel dağıtımı için aşağıdaki adımları takip edebilirsiniz:

1. Depoyu GitHub'a gönderin.
2. GitHub reposunu Vercel hesabınıza bağlayın.
3. Vercel, **Next.js** projesini otomatik olarak tespit eder ve dağıtım yapar.

---

# Real-Time Chat Application

A real-time chat application built with **Next.js**, **Socket.io**, and **React**. This application allows users to join specific rooms, send messages, and view messages instantly. The backend is built using **Node.js** and **Socket.io**, facilitating WebSocket communication for real-time messaging between users.

---

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly using **Socket.io**.
- **Join Rooms**: Users can join rooms by specifying a room name.
- **User-Friendly Interface**: Responsive design built with **React** and **Tailwind CSS**.
- **System Messages**: System messages notify when a user joins or leaves a room.

---

## Technologies Used

- **Frontend**:

  - **Next.js**: A React framework for building static and dynamic web applications.
  - **React**: A JavaScript library for building user interfaces.
  - **Socket.io-client**: Used for WebSocket communication on the frontend.
  - **Tailwind CSS**: A utility-first CSS framework for styling the application.

- **Backend**:
  - **Node.js**: JavaScript runtime used for the server-side.
  - **Socket.io**: A library for real-time, bi-directional communication.

---

## Getting Started

### Prerequisites

- **Node.js**: Install the latest version from [Node.js](https://nodejs.org/).
- **npm**: The package manager that comes with Node.js.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/furkanucgull/real-time-chat-app.git
   cd real-time-chat-app
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev
   ```

   You can view the app in your browser at `http://localhost:3000`.

### Build and Run

To build and run the application, use the following commands:

1. **Build the application** (with Socket.io):

   ```bash
   npm run build:socket
   ```

2. **Start the application**:

   ```bash
   npm run start:socket
   ```

---

## How It Works

### Frontend

- **`Home` Component (`pages/index.tsx`)**:
  - After entering a username and room name, the frontend sends a `join-room` event to the backend via **Socket.io**, and the user joins the room.
  - When a user sends a message, the message is emitted to the backend and broadcasted to all users in the room.
  - **ChatForm** and **ChatMessage** components handle the message sending and displaying.

### Backend

- **`server.js`**:
  - Manages incoming socket connections using **Socket.io** and handles user room joining.
  - The `join-room` event allows users to join specific rooms and notifies all users in the room.
  - The `message` event receives user messages and broadcasts them to all users in the room.

### WebSocket Communication

- **`socket.on('join-room')`**: When a user joins a room, this event is triggered, and the socket joins the room.
- **`socket.on('message')`**: User messages are received by the backend and broadcasted to all users in the room.

---

## Deployment

This application can easily be deployed to platforms like **Vercel**, **Heroku**, or **DigitalOcean**. For deployment on Vercel, follow these steps:

1. Push the repository to GitHub.
2. Link the GitHub repository to your Vercel account.
3. Vercel automatically detects the **Next.js** project and handles the deployment.
