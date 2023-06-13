import myData from "./../assets/results.json";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import { SelectLabels } from "../components/SelectLabels";
import { TableRace } from "../components/TableRace";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { RaceResultChart } from "../components/RaceResultChart";
export const Home = () => {
  const [params, setParams] = useState({
    year: "",
    grandPrix: "",
    winner: "",
    car: "",
    laps: "",
    q: "",
  });

  const years = Array.from(new Set(myData.map((x) => x.year)));
  const grandPrixs = Array.from(new Set(myData.map((x) => x.grandPrix)));
  const winners = Array.from(new Set(myData.map((x) => x.winner)));
  const cars = Array.from(new Set(myData.map((x) => x.car)));

  const filtered = useMemo(() => {
    return myData
      .filter((obj) => {
        return (
          (params.year ? obj.year === params.year : obj.year) &&
          obj.grandPrix.toLowerCase().search(params.grandPrix.toLowerCase()) >=
            0 &&
          obj.winner.toLowerCase().search(params.winner.toLowerCase()) >= 0 &&
          obj.car.toLowerCase().search(params.car.toLowerCase()) >= 0
        );
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [params.car, params.grandPrix, params.winner, params.year]);
  function handleClears() {
    setParams({
      ...params,
      year: "",
      grandPrix: "",
      winner: "",
      car: "",
      laps: "",
      q: "",
    });
  }
  return (
    <Container fixed>
      <h1>RACE RESULTS</h1>
      <Grid container rowSpacing={2}>
        <Grid
          rowSpacing={2}
          columnSpacing={1}
          mb={2}
          mt={2}
          style={{ gap: "0.5rem", display: "inline-flex" }}
        >
          <SelectLabels
            value={params.year}
            data={years}
            handleChange={(e) => setParams({ ...params, year: e.target.value })}
          />
          <Autocomplete
            disablePortal
            id="combo-box-grand"
            sx={{ width: 220 }}
            options={grandPrixs}
            value={params.grandPrix}
            renderInput={(params) => (
              <TextField {...params} label="Grand Prix" />
            )}
            onChange={(_, grand) => {
              return setParams({ ...params, grandPrix: grand ?? "" });
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-winner"
            sx={{ width: 200 }}
            options={winners}
            value={params.winner}
            renderInput={(params) => <TextField {...params} label="Winner" />}
            onChange={(_, winner) => {
              return setParams({ ...params, winner: winner ?? "" });
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-cars"
            sx={{ width: 250 }}
            options={cars}
            value={params.car}
            renderInput={(params) => <TextField {...params} label="car" />}
            onChange={(_, car) => {
              return setParams({ ...params, car: car ?? "" });
            }}
          />
          <Button onClick={handleClears}>
            <FilterAltOffIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <RaceResultChart data={filtered} />
        <TableRace data={filtered} />
      </Grid>
    </Container>
  );
};

export default Home;
