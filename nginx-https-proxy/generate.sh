#!/usr/bin/env sh
mkcert -cert-file nginx/certs/local.pem -key-file nginx/certs/local-key.pem proxied.local localhost 127.0.0.1 ::1