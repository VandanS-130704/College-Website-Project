# 🎓 RCOEM Enterprise Web Portal & Cloud Architecture

An enterprise-grade, highly scalable web portal for Shri Ramdeobaba College of Engineering and Management (RCOEM). This project goes beyond frontend development by implementing a robust DevOps pipeline, advanced AWS cloud infrastructure, serverless computing, and real-time observability.

## 🏗️ Architecture Overview

This project simulates a production-ready, high-traffic institutional portal. It utilizes a containerized frontend served through a reverse proxy, backed by AI-driven support systems, big data analytics pipelines, and comprehensive monitoring.

### 🌐 Web Serving & Content Delivery
* **Docker & Nginx:** The web application is fully containerized. Nginx is configured as a high-performance web server, reverse proxy, and load balancer to manage incoming traffic efficiently.
* **AWS CloudFront & S3:** Static assets are hosted on S3 and distributed globally with low latency via CloudFront's CDN.
* **Security:** Secured with end-to-end SSL/TLS encryption for safe data transmission.

### 🧠 AI, Auth & Serverless Backend
* **AWS Cognito:** Secure, scalable user authentication and identity management for student/admin portals.
* **Amazon Connect & AWS Lex:** Integrated intelligent support chatbot to handle student queries and automate administrative support.
* **Amazon Bedrock:** Leveraging generative AI capabilities for advanced content processing and intelligent user interactions.
* **AWS Lambda:** Serverless backend execution for dynamic API requests and automated cloud cost-optimization utilities.

### 📊 Data Analytics & Storage
* **Amazon DynamoDB:** Highly performant NoSQL database for managing user sessions and application state.
* **AWS Glue & Amazon Athena:** Serverless ETL (Extract, Transform, Load) pipelines querying large datasets directly from S3 using standard SQL.
* **Amazon QuickSight:** Business intelligence dashboards visualizing institutional data and portal analytics.

### 📈 Observability & Monitoring
* **Real-Time EC2 Performance Monitoring:** AWS CloudWatch is configured to monitor core compute resources, ensuring high availability and optimized performance.
* **Prometheus & Grafana:** Deployed alongside the application to scrape and visualize detailed, webpage-level metrics, traffic patterns, and container health.

## 🛠️ Tech Stack summary

| Category | Technologies Used |
| :--- | :--- |
| **Frontend** | HTML5, Tailwind CSS, Vanilla JS |
| **Web Server & Proxy** | Nginx |
| **Containerization** | Docker |
| **Compute & Backend** | AWS EC2, AWS Lambda |
| **Storage & Database** | Amazon S3, Amazon DynamoDB |
| **Security & Auth** | SSL/TLS, AWS Cognito |
| **AI & Customer Support**| Amazon Connect, AWS Lex, Amazon Bedrock |
| **Data Pipeline & BI** | AWS Glue, AWS Athena, Amazon QuickSight |
| **Monitoring** | AWS CloudWatch, Prometheus, Grafana |

## 🚀 Infrastructure Flow

1. **User Request:** A user accesses the domain via HTTPS (SSL/TLS).
2. **CDN & Proxy:** CloudFront serves cached static assets. Dynamic requests hit the Nginx Load Balancer on EC2, which proxies traffic to the Dockerized application.
3. **Authentication:** Users attempting to access private portals are verified via AWS Cognito.
4. **Interactivity:** AI chatbot queries are routed through Amazon Connect and AWS Lex, while advanced generative tasks ping Amazon Bedrock.
5. **Data Processing:** Application data is stored in DynamoDB, while large-scale logs/data are processed via AWS Glue, queried by Athena, and visualized in QuickSight.
6. **Observability:** Prometheus scrapes Nginx/Docker metrics to display on Grafana, while CloudWatch tracks overall EC2 instance health.

---
*Developed as an advanced Cloud Infrastructure & DevOps portfolio project.*
