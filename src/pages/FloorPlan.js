import React, { useState, useEffect } from "react";

import {
  fetchFloors,
  addFloor,
  updateFloor,
  deleteFloor,
} from "../redux/actions";
import {
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  Snackbar,
  Drawer,
  IconButton,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}
const FloorPlan = () => {
  const dispatch = useDispatch();
  const [floorName, setFloorName] = useState("");
  const [drawerToggler, setDrawerToggler] = useState(false);
  const [rowsToRender, setRowsToRender] = useState([]);
  const [currentRow, setCurrentRow] = useState({});
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [snackBarToggler, setSnackBarToggler] = useState(false);
  const [refreshToggler, setRefreshToggler] = useState(false);
  const [error, setError] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSnackBarToggler(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  var handleClose = () => {
    setOpen(false);
    setError(false);
    // setSnackBarToggler(false)
  };
  var floorsState = useSelector((state) => {
    return state.floorsReducer;
  });
  const handleDelete = (id) => {
    if (floorsState.floors.length == 1) {
      setOpen(true);
      return;
    }
    deleteFloor(dispatch, id);
    setSnackBarToggler(true);
    setRefreshToggler((prev) => !prev);
  };
  const handleAdd = (floorName) => {
    if (floorName.length > 0) {
      addFloor(dispatch, {
        name: floorName,
        branch_id: "183",
      });
      setSnackBarToggler(true);
      setRefreshToggler((prev) => !prev);
      setError(false);
      setDrawerToggler(false);
    } else {
      setError(true);
      return;
    }
  };
  const handleUpdate = (floorName) => {
    if (floorName.length > 0) {
      updateFloor(dispatch, {
        id: currentRow.id,
        branch_id: currentRow.branch_id,
        name: floorName,
      });
      setRefreshToggler((prev) => !prev);
      setIsUpdate(false);
      setSnackBarToggler(true);
      setDrawerToggler(false);
    } else {
      setError(true);
      return;
    }
  };
  useEffect(() => {
    fetchFloors(dispatch, "183");
    setRowsToRender(mapFloorsToRows(floorsState.floors));
  }, []);
  useEffect(() => {
    setRowsToRender(mapFloorsToRows(floorsState.floors));
    setCurrentRow("");
  }, [floorsState.floors]);
  var mapFloorsToRows = (floors) => {
    if (Array.isArray(floors))
      return floors.map((floor) => {
        return {
          name: floor.name,
          branch_id: floor.branch_id,
          id: floor.id,
        };
      });
    else console.log("floors are empty");
  };
  const columns = [
    { field: "name", headerName: "Floor Name", width: 150 },
    { field: "branch_id", headerName: "Branch ID", width: 300 },
    {
      field: "col3",
      headerName: "Update",
      width: 150,
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            setCurrentRow(params.row);
            setFloorName(params.row.name);
            setIsUpdate(true);
            setDrawerToggler(true);
          }}
        >
          <EditIcon variant="contained" size="medium" color="primary" />
        </IconButton>
      ),
    },
    {
      field: "col4",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            setCurrentRow(params.row);
            handleClickOpen();
          }}
        >
          <DeleteIcon
            variant="contained"
            size="medium"
            sx={{
              color: "#d32f2f",
            }}
          />
        </IconButton>
      ),
    },
  ];
  return (
    <Container color="white">
      <Drawer
        anchor="right"
        open={drawerToggler}
        onClose={() => {
          setIsUpdate(false);
          setDrawerToggler((prev) => !prev);
          setError(false);
          setIsUpdate(false);
          setFloorName("");
        }}
      >
        <Container
          sx={{
            width: `${window.innerWidth * (2 / 4)}px`,
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={5}>
            <Grid item xs={12}>
              <Typography variant="h5" justifySelf="center">
                {isUpdate ? "Update Floor " : "Add Floor"}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: `70%`,
              }}
            >
              <TextField
                error={error}
                onChange={(e) => setFloorName(e.target.value)}
                label="Floor Name"
                defaultValue={isUpdate ? currentRow.name : ""}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                width: `70%`,
              }}
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: "0.7rem",
                    padding: "6px",
                  }}
                  onClick={() =>
                    isUpdate ? handleUpdate(floorName) : handleAdd(floorName)
                  }
                >
                  {isUpdate ? "Update Floor" : "Add Floor"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Drawer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Floor"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {floorsState.floors.length > 1
              ? " Are you sure you want to delete this floor?"
              : "You Can`t Delete The Last FLoor You Have"}
          </DialogContentText>
        </DialogContent>
        {floorsState.floors.length > 1 ? (
          <DialogActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
              }}
              onClick={() => {
                handleDelete(currentRow.id);
                handleClose();
              }}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
              }}
              onClick={handleClose}
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "green",
              }}
              onClick={handleClose}
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        )}
      </Dialog>
      <Grid container direction="column">
        <Grid item container xs={12} alignSelf="flex-end">
          <Grid item container direction="column">
            <Grid item alignSelf="flex-end">
              <Button
                variant="contained"
                onClick={() => setDrawerToggler((prev) => !prev)}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mb={5}>
          <Typography variant="h2">Floor Plan</Typography>
        </Grid>
        <Grid item container xs={10} ml={1} rowSpacing={5}>
          <Grid item xs={12}>
            <DataGrid
              components={{
                LoadingOverlay: CustomLoadingOverlay,
              }}
              disableSelectionOnClick
              checkboxSelection
              loading={floorsState.loading ? true : false}
              rows={rowsToRender}
              columns={columns}
              autoHeight
            />
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={snackBarToggler}
        autoHideDuration={2000}
        onClose={() => {
          setSnackBarToggler(false);
        }}
        message={floorsState.response}
        action={action}
      />
    </Container>
  );
};

export default FloorPlan;