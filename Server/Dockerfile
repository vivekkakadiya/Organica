#Stage 1 : Build maven java app using alpine version of base image

FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

COPY pom.xml .

COPY src ./src


RUN mvn dependency:go-offline

RUN mvn clean package -DskipTests


#Stage 2: Run the build file using jre base image



FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]


