#!/bin/bash


# 设置要kill的进程名和端口号
PROC_NAME="chatgpt_web"
PORT_NUM="2343"

# 查找进程号
PID=$(netstat -nlp | grep :$PORT_NUM | awk '{print $7}' | awk -F"/" '{print $1}')

# 如果进程号存在，则kill进程
if [ -n "$PID" ]; then
    echo "Killing process $PROC_NAME (PID=$PID)..."
    kill $PID
else
    echo "No process found with name $PROC_NAME and port number $PORT_NUM."
fi

rm -rf chatgpt_web

# Clone the repository from GitHub
git clone https://github.com/lc1993929/chatgpt_web

# Change directory to the cloned repository
# shellcheck disable=SC2164
cd chatgpt_web

serve -s build -l 2343 &
