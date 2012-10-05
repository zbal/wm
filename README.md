# Distributed web monitoring

## Overview

Provide a fully distributed monitoring with a control over a cluster of nodes, proper management of the web nodes, control of the bandwidth and check frequency, optionally with full stats

## Plan

- Provide distributed web monitoring
- Allow voting across the various web nodes
- Have private web nodes spread across the world
- Have public web nodes from customers to act as nodes

## Future

- Get a private network of nodes used to monitor host or a specific customer
- get credits by registering a web nodes
- get stats per regions

# Architecture

## Server

- API based
- web frontend (light client)
- keep track of the registered web nodes
- keep track of the location and group web nodes geographically
- rely on backend DB (to define) for storing sites to check, results of checks
- send list of websites to check to the remote web nodes
- keep track of the size of checked pages to avoid overloading web nodes and properly schedule checks

## Web nodes

- proper install process - linux only for now, maybe clean client in C ?
- register with a key (similar to dropbox server client)
- established communication with the server
- can receive and send data to the server
- communicate over secure channel
- JSON shared data back and forth with the server

# IA

## API

- CRUD API
  - nodes: get / create / delete / update 
  - website: get / create / delete / update 
  - list: get / create / delete / update 
nodes

## Web nodes

- connect and authenticate against the server
- fetch its work list, including frequency, pattern, etc.
- work list provided by the server and calculated on the fly
- work list is kept as accurate for a period of time
- report its results
