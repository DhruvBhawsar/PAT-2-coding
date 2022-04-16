import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, loadDatas } from "../Redux/actions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, city, country, population) {
  return { id, city, country, population };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Home = () => {
  // const classes = useStyles();
  let dispatch = useDispatch();
  const { datas } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadDatas());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete ?")) {
      dispatch(deleteData(id));
    }
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Population</StyledTableCell>
              <StyledTableCell align="center">Country</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas &&
              datas.map((data) => (
                <StyledTableRow key={data.id}>
                  <StyledTableCell component="th" scope="row">
                    {data.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{data.city}</StyledTableCell>
                  <StyledTableCell align="center">
                    {data.population}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {data.country}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button style={{ marginRight: "5px" }} color="primary">
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        onClick={() => handleDelete(data.id)}
                        style={{ marginLeft: "10px" }}
                        color="secondary"
                      >
                        Remove
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
