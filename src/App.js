import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import { Container, Button, TextField, Grid, Box, FormControl, InputLabel, Select, MenuItem, Icon } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
const Field = ({ onChangeCallback, value, cart }) => {



  return (
    <TextField

      label={cart}
      type="number"
      value={value}
      onChange={(event) => onChangeCallback(event.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}

const ROField = ({ cart, value }) => {
  return (
    <TextField

      label={cart}
      value={value}
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
    />)
}

function App() {

  let coords = { x: 0, y: 0, z: 0 }

  const [originCoords, setOriginCoords] = useState(coords)
  const [currentCoords, setCurrentCoords] = useState(coords)
  const [oldEntity, setOldEntity] = useState(coords)

  const [rotation, setRotation] = useState(0)


  const [finishedCoords, setFinishedCoords] = useState(coords)
  const [pasteInput, setpasteInput] = useState("")




  useEffect(() => {
    console.log(rotation)

    let ox = originCoords.x
    let oz = originCoords.z
    let oy = originCoords.y

    let cx = currentCoords.x
    let cz = currentCoords.z
    let cy = currentCoords.y

    let ex = oldEntity.x
    let ez = oldEntity.z
    let ey = oldEntity.y


    let x, z, y = 0
    switch (rotation) {
      case 0:
        x = ex + (cx - ox)
        z = ez + (cz - oz)
        y = ey + (cy - oy)


        break;

      case 90:
        x = (ez - oz) + (cz - oz)
        z = (-1 * (ex - ox)) + (cx - ox)
        y = ey + (cy - oy)

        break;

      case 180:
        x = (-1 * (ex - ox)) + (cx - ox)
        z = (-1 * (ez - oz)) + (cz - oz)
        y = ey + (cy - oy)

        break;

      case 270:

        x = (-1 * (ez - oz)) + (cz - oz)
        z = (ex - ox) + (cx - ox)
        y = ey + (cy - oy)

        break;

      default:
        break;
    }
    setFinishedCoords({ x, z, y })

  }, [originCoords, currentCoords, oldEntity, rotation])



  useEffect(() => {
    setCurrentCoords({ x: originCoords.x, z: originCoords.z, y: originCoords.y })
  }, [originCoords])

  useEffect(() => {
    setCurrentCoords({ x: originCoords.x, z: originCoords.z, y: originCoords.y })
  }, [originCoords])

  useEffect(() => {
    const reg = /-?\d+\.?\d+?/g

    


    if (pasteInput) {
      const allNums = [...pasteInput.matchAll(reg)]

      if (allNums?.length > 2) {
        setOldEntity({ x: Number(allNums[0]), y: Number(allNums[1]), z: Number(allNums[2]) })
      }
    }
  }, [pasteInput])

  const parsePaste = (e) => {
    setpasteInput(e.target.value)
  }

  return (
    <Box m={8}>
      <Grid container direction="column" spacing={3} justifz="center" alignItems="center">
        Original Origin Point
        <Grid item xs={"auto"}>

          <Field value={originCoords.x} cart='X' onChangeCallback={(value) => setOriginCoords({ ...originCoords, x: Number(value) })} />
          <Field value={originCoords.y} cart='y' onChangeCallback={(value) => setOriginCoords({ ...originCoords, y: Number(value) })} />
          <Field value={originCoords.z} cart='z' onChangeCallback={(value) => setOriginCoords({ ...originCoords, z: Number(value) })} />

        </Grid>
        New Origin Point
        <Grid item xs={"auto"}>
          <Field value={currentCoords.x} cart='X' onChangeCallback={(value) => setCurrentCoords({ ...currentCoords, x: Number(value) })} />
          <Field value={currentCoords.y} cart='y' onChangeCallback={(value) => setCurrentCoords({ ...currentCoords, y: Number(value) })} />
          <Field value={currentCoords.z} cart='z' onChangeCallback={(value) => setCurrentCoords({ ...currentCoords, z: Number(value) })} />
        </Grid>

        Old Entity Point
        <Grid item xs={"auto"}>
          <Field value={oldEntity.x} cart='X' onChangeCallback={(value) => setOldEntity({ ...oldEntity, x: Number(value) })} />

          <Field value={oldEntity.y} cart='y' onChangeCallback={(value) => setOldEntity({ ...oldEntity, y: Number(value) })} />
          <Field value={oldEntity.z} cart='z' onChangeCallback={(value) => setOldEntity({ ...oldEntity, z: Number(value) })} />
          <Grid item xs= {12}>
            <TextField

              id="outlined-full-width"
              label="Paste Coords"
              onChange={parsePaste}
              placeholder="Paste at least 3 numbers separated by whitespace or non numeric characters"
              helperText="Paste parseable xyz coords"
              fullWidth
              value={pasteInput}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs="auto">
          <FormControl  >
            <InputLabel id="demo-simple-select-label">Rotation?</InputLabel>
            <Select

              value={rotation}
              onChange={event => setRotation(Number(event.target.value))}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={90}>90</MenuItem>
              <MenuItem value={180}>180</MenuItem>
              <MenuItem value={270}>270</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        New Entity Coordinates
        <Grid item xs={"auto"}>
          <ROField value={finishedCoords.x} cart='X' />
          <ROField value={finishedCoords.y} cart='y' />
          <ROField value={finishedCoords.z} cart='z' />
        </Grid>
        {/*Copy to Clipboard
         <Grid item xs="auto">

          <Button
            variant="contained"
            color="primary"

            endIcon={<FileCopyIcon />}
          >
            {`"x" => ${finishedCoords.x}, "y" => ${finishedCoords.y}, "z" => ${finishedCoords.z}`}
          </Button>
        </Grid> */}

        {/* <Field input={coords.originCoords.z} />
      <Field input={coords.originCoords.y} /> */}


      </Grid >

    </Box>
  );
}

export default App;
