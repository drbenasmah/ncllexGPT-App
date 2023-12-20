import { useEffect } from "react";

import "./Result.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/qbank");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        // href="/qbank"
        onClick={() => navigate("/qbank")}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
