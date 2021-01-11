import React from "react"
import ReactDOM from "react-dom"
import domReady from "@mikaelkristiansson/domready"
import io from "socket.io-client"

import socketIo from "./socketIo"
import emitter from "./emitter"
import { apiRunner, apiRunnerAsync } from "./api-runner-browser"
import { setLoader, publicLoader } from "./loader"
import { Indicator } from "./loading-indicator/indicator"
import DevLoader from "./dev-loader"
import syncRequires from "$virtual/sync-requires"
// Generated during bootstrap
import matchPaths from "$virtual/match-paths.json"

if (process.env.GATSBY_HOT_LOADER === `fast-refresh` && module.hot) {
  module.hot.accept(`$virtual/sync-requires`, () => {
    // Manually reload
  })
}