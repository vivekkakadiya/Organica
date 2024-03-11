# Organica - Full Stack E-commerce Project

Organica is a full-stack e-commerce project built using Spring Boot, MySQL, and React.js. It handles various operations on the server side, such as managing the shopping cart and other functionalities. For security, it utilizes JWT authentication and authorization using Spring Security.

<a href="https://hits.sh/github.com/vivekkakadiya/Organica"><img alt="Hits" src="https://hits.sh/github.com/vivekkakadiya/Organica.svg?label=Viewer%20Count&color=355C7D&labelColor=4083e9"/></a>
## Tech Stack

- Backend Framework: Spring Boot
- Frontend Framework: React.js
- Database: MySQL

## Prerequisites

To run this project locally, you need to have the following software installed:

- JDK 17
- Node.js
- MySQL Server
- Git

## Features

- User authentication and authorization using JWT
- Product browsing and searching
- Shopping cart management
- Order placement and tracking
- Razorpay Payment integration

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/organica.git
   cd organica
   ```

2. Set up the database:

   - Create a MySQL database and configure the connection details in `backend/src/main/resources/application.properties` file. 

3. Application Properties

   To configure the application properties, follow these steps:

   - Open the `backend/src/main/resources/application.properties` file.

   - Configure the MySQL database connection properties by updating the following lines:

     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/organica
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```

     Replace `your-username` and `your-password` with your MySQL database credentials.

  
   - (Optional) If you want to change the server port, update the following line:

     ```
     server.port=8080
     ```

     Replace `8080` with the desired port number.

   - Save the `application.properties` file.

4. Backend Setup:

   - Navigate to the `Server` directory:

     ```shell
     cd server
     ```

   - Build and run the Spring Boot application:

     ```shell
     ./mvnw spring-boot:run
     ```

   The backend server should now be running on `http://localhost:8080`.

5. Frontend Setup:

   - Navigate to the `Client` directory:

     ```shell
     cd Client
     ```

   - Install the dependencies:

     ```shell
     npm install
     ```

   - Start the React development server:

     ```shell
     npm start
     ```

   The frontend server should now be running on `http://localhost:3000`.

6. Open your web browser and visit `http://localhost:3000` to access the Organica application.


## Contributing

Contributions are welcome! If you want to contribute to Organica, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.


## Contact

If you have any questions or suggestions, feel free to contact the project maintainers:

- Vivek Kakadiya - vivek.kakadiya111@gmail.com


