#!/bin/bash

if [ "$RUN_ENV" = "dev" ] || [ "$RUN_ENV" = "\"dev\"" ]; then 
  python app.py;
  exit 0;
fi

if [ "$RUN_ENV" = "prod" ] || [ "$RUN_ENV" = "\"prod\"" ]; then
  hypercorn app:app -b=$HYPERCORN_ADDR;
  exit 0;
fi

echo "RUN_ENV is not set to dev or prod";
exit 1;