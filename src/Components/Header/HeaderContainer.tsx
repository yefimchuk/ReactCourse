import React from "react";
import Header from "./Header";

import { compose } from "redux";
import { WithAuthRedirectToProfile } from "../../hoc/WithAuthRedirectToProfile";
import {
  getAuthDateSelector,
  getAuthIsLoginSelector,
} from "../../BLL/Auth/authSelector";
import { useSelector } from "react-redux";

