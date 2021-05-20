import { useState } from "react";
import python from "../logos/python.svg";
import numpy from "../logos/numpy.svg";
import pandas from "../logos/pandas.svg";
import scikit from "../logos/scikit-learn.svg";
import cSharp from "../logos/c-sharp.svg";
import unity from "../logos/unity.svg";
import photon from "../logos/photon.png";

const Portfolio = () => {
  const [exp, setExp] = useState([
    {
      title: "Data Analyst",
      company: "Defence Science and Technology Agency (DSTA)",
      date: "Jan 2020 to Mar 2020",
      pointers: [
        "Performed data analysis on Navy ship engine data to create a predictive maintenance model",
        "Written in Python using Numpy, pandas and scikit-learn",
        "Made use of different modelling techniques, such as Principal Component Analysis, Isolation Forest, Change Point Algorithms",
      ],
      logos: [python, numpy, pandas, scikit],
    },
    {
      title: "Singapore Mahjong Game",
      company: "",
      date: "April 2020 to Jul 2020",
      pointers: [
        "Supports real-time multiplayer gameplay",
        "Features include winning hand detection, combos identification, points calculation",
        "Performed extensive unit testing using Unity Test Runner, a testing suite based on Java NUnit library",
      ],
      logos: [cSharp, unity, photon],
    },
  ]);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Portfolio;
