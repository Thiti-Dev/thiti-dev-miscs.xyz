edge_runtime_port=$(grep -v '^#' .env | grep -e "EDGE_RUNTIME_PORT" | sed -e 's/.*=//') # extract the env variable
pid=$(lsof -t -i:$edge_runtime_port)
kill $pid 2> /dev/null #silence the error output <1 for regular info>
exit 0