# Dockerfile for Tweet Get Get
FROM node:8.11.3
LABEL maintainer.name="shawnkoon" \
      maintainer.web="https://github.com/shawnkoon" \
      version="1.0" \
      description="Docker Image to set up Tweet Get Get environment"

# Basic package update.
RUN apt-get update && \
    apt-get upgrade -y

# Update project directory
RUN mkdir -p /home/docker/app
WORKDIR /home/docker/app

# Install Git & Project related sources.
RUN apt-get install git -y && \
    git clone https://github.com/shawnkoon/tweet-get-get.git
WORKDIR ./tweet-get-get

# Install Node dependencies.
RUN npm install
