#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: 'foo', pwd: 'bar', roles: [{role: 'readWrite', db: 'test'}]});"
echo "Mongo users created."