
# Set the Framework (Base Image) for the Virtual Machine
FROM webapp.io/docker:20.10

# Download an example web server (can be removed later)
RUN curl -fSsL https://github.com/filebrowser/filebrowser/releases/download/v2.21.1/linux-amd64-filebrowser.tar.gz \
    | tar -C /usr/local/bin -xzf /dev/stdin

# This line copies the whole repository to /root in the runner
COPY / /root

# This line runs the example webserver
RUN BACKGROUND filebrowser --database /tmp/filebrowser.db \
    --noauth --address 0.0.0.0 --port 80

EXPOSE WEBSITE http://localhost:80
