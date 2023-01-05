pid=$(lsof -t -i:3000)
kill $pid 2> /dev/null #silence the error output <1 for regular info>
exit 0