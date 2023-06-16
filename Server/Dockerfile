# Base image
FROM openjdk:17-oracle

# Set working directory
WORKDIR /app

# Copy JAR file
COPY target/organica-0.0.1-SNAPSHOT.jar myapp.jar

# Expose port 8080
EXPOSE 9090

# Start the Java Spring Boot application
CMD ["java", "-jar", "myapp.jar"]
