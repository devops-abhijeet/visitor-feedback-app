# Use This to manually run containers 

# Mysql Container Pull
  docker pull mysql

# Running Mysql Container
  docker run -d --name mysql-host --network feedback -e MYSQL_ROOT_PASSWORD=abhi -e MYSQL_DATABASE=feedback_app image_id

# Login into MySQL container 
  docker exec -it mysql-host mysql -uroot -p

# Create table into database
  use feedback_app
  CREATE TABLE feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  message TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

# Build Node Image 
  docker build -t visitorapp .

# Running Node Container
  docker run -d -p 80:3000 --network feedback -e MYSQL_USER=root -e MYSQL_HOST=mysql-host -e MYSQL_PASSWORD=abhi -e MYSQL_DATABASE=feedback_app image_id

Note :  Manually we have to first run MySQL container and create table into it then run node-app container so it can connect with MySQL container and store data
