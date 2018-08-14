#!/bin/bash
# <bitbar.title>JS Authenticator</bitbar.title>

# user clicks on 'getpass'
if [[ "$1" = "getpass" ]]; then
  echo -n "PUT_PASSWORD_HERE" | pbcopy
  exit
fi

# user clicks on 'getcode'
if [[ "$1" = "getcode" ]]; then
  CODE=$(/usr/bin/env node /ABSOLUTE_PATH/Bitbar/authenticator/index.js)
  echo -n "$CODE" | pbcopy
  exit
fi

echo "📋"
echo "---"
echo "Generate Pass | bash='$0' param1=getpass terminal=false"
echo "Generate Code | bash='$0' param1=getcode terminal=false"