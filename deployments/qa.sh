npm install -g now
echo "deploying..."
url=$(now --docker -t $NOW_TOKEN)
echo "running acceptance on $URL"
curl --silent -L $URL
