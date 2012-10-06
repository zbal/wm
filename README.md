# Webnode client

Wish me luck ... I don't know shit in Python, it's gonna be fun!

## Language

Prefered language for the webnode client is Python because of;

- its wide availability on all Linux platforms
- doesn't require extensive installation process as would a Node.js based client need
- can be compiled; and hopefully packaged to the respective Package managers

## Terminology / Glossary

- __WM__; Web Monitoring service

## Purpose

Provide a stand-alone client that will run as a background process / daemon and act as a webnode to the distributed web monitoring project.

The webnode client is meant to:

- fetch web checks / todo list from WM,
- run web checks,
- perform text match / HTTP return code match / various matching operations,
- report on web check completion to WM

Eventually, since the webnode client is meant to be a non-invasive / disruptive service running on a remote server, monitoring of the webnode itself will have to be performed to ensure that;
- not too much Bandwidth is being used by the process
- not too much CPU / RAM is being used by the process

It may ensue that at some point a webnode need to put itself in standby mode for some time to prevent disrupting its main work (web service, DB or other).

## TODO

- allow a webnode to register to WM, provided a key by WM to authentify it.
- allow secure connection to WM to:
  - fetch its own set of web checks
  - report on its own status
  - report on its web check reports
- find a way to refuse some of the webcheck provided by WM for various reasons (legislation, illegal content, etc.)
- all the rest
