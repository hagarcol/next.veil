import React from "react";

// @mui
import { Stack, useMediaQuery, useTheme, Box, Typography, Button } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { LineChart } from '@mui/x-charts/LineChart';

// components
import CustomContainer from "@/components/Custom/Container";
import TextSection from "@/components/Custom/TextSection";

import { getLighterColor } from "@/components/Token/Allocation/Chart";

const xLabels = [
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
  "April",
  "May",
  "June",
  "July",
  "Auguest"
];

const data = [0, 28000, 140000, 18000, 3000, 25000, 50000, 13000, null, 6800];
interface Column {
  id: 'name' | 'code';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Date' },
  { id: 'code', label: 'Payout', align: "right" }
];

interface Data {
  name: string;
  code: string;
  amount: string;
}

function createData(
  name: string,
  code: string,
  amount: string,
): Data {
  return { name, code, amount };
}

const rows = [
  createData('11/03/2023', '1.90ETH', "$237.0K"),
  createData('11/04/2023', '1.30ETH', "$77.0K"),
  createData('11/04/2023', '13.20ETH', "$73.0K"),
  createData('11/05/2023', "16.90ETH", "$127.0K"),
  createData('11/10/2023', '2.30ETH', "$2.0K"),
  createData('11/10/2023', '4.70ETH', "$11.0K"),
  createData('11/11/2023', '3.60ETH', "$12.1K"),
  createData('11/12/2023', '1.50ETH', "$3.7K"),
  createData('11/01/2024', '2.90ETH', "$16.1K"),
  createData('11/01/2024', '3.00ETH', "$11.0K"),
  createData('11/02/2024', '1.50ETH', "$5.5K"),
  createData('29/03/2024', "4.20ETH", "$15.4K"),
  createData('08/04/2024', '1.60ETH', "$5.9K"),
  createData('26/04/2024', '2.00ETH', "$7.3K"),
  createData('10/06/2024', '1.90ETH', "$7.0K"),
];

const MonthlyRevenuce = () => {
  const theme = useTheme();
  const islgOverScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rowsPerPage = 5;
  const [page, setPage] = React.useState(Math.ceil(rows.length / rowsPerPage) - 1);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const handleNext = () => {
    setPage(page + 1);
  }

  const handlePrev = () => {
    setPage(page - 1);
  }

  return (
    <CustomContainer>
      <Stack>
        <TextSection 
          text="Monthly Revenue & Payouts"
          variant="customFont"
          gradient={true}
          fontSize={40}
          align="center"
          margin="0 0 24px"
        />

        <TextSection 
          text="Overview for the past 12 Months"
          color="#8671FF"
          fontSize={16}
          fontWeight={400}
          align="center"
          margin="0 0 16px"
        />

        <Stack direction={islgOverScreen ? "row" : "column"} gap={2}>
          <Stack padding="0 24px" width={islgOverScreen ? "calc(100% /12 * 8)" : "100%"} gap={1}>
            <LineChart
              xAxis={[{ 
                data: xLabels, 
                scaleType: 'point',
                tickFontSize: 10,
                tickLabelStyle: {
                  fill: '#DEDEDE80',
                  // transform: 'rotate(-45deg)', 
                  // textAnchor: 'end'
                }
              }]}
              yAxis={[{ 
                tickFontSize: 12,
                tickLabelStyle: {
                  fill: '#DEDEDE80'
                },
                valueFormatter: (value) => `$${value.toLocaleString()}`
              }]}
              series={[{ data, connectNulls: false, curve: "linear" }]}
              height={400}
              margin={{ top: 10, bottom: 60, left: 60 }}
              grid={{ 
                horizontal: true,
                vertical: true
              }}
              sx={{
                ".MuiChartsAxis-line": {
                  stroke: "#DEDEDE80 !important"
                },
                ".MuiChartsAxis-tick":{
                  stroke: "#DEDEDE80"
                },
                ".css-195sd4n-MuiChartsGrid-line": {
                  stroke: "#343445"
                },
                '.MuiLineElement-root': {
                  stroke: '#ffce56',
                  strokeWidth: 4
                },
                '.css-xyaj9i-MuiMarkElement-root': {
                  fill: "transparent",
                  stroke: "#ffce56",
                  strokeWidth: 2
                }
              }}
            />

            <Stack direction="row" alignItems="center" gap={1} justifyContent="center">
              <Box 
                width={16}
                height={16}
                borderRadius="50%"
                sx={{
                  backgroundColor: getLighterColor("#FFA80080", 0.3),
                  border: `1px solid #FFA800`
                }}
              />

              <Typography
                color="#DEDEDE80"
                fontSize={14}
                fontWeight={400}
              >
                Monthly Revenue
              </Typography>
            </Stack>
          </Stack>

          <Stack padding="0 24px" width={islgOverScreen ? "calc(100% /12 * 4)" : "100%"} gap={2}>
            <Paper sx={{ width: '100%' }}>
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead
                  >
                    <TableRow>
                      {columns.map((column, index) => (
                        <TableCell
                          key={column.id}
                          align="right"
                          style={{ width: index == 0 ? "45%" : "55%" }}
                          sx={{
                            backgroundColor: '#202029',
                            border: "1px solid #373b3e",
                            justifyItems: index % 2 ? "end" : "start"
                          }}
                        >
                          <TextSection 
                            text={column.label}
                            align={index % 2 ? "left" : "right"}
                            fontWeight={700}
                            fontSize={16}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, rowId) => {
                        return (
                          <TableRow 
                            key={rowId}
                            sx={{
                              cursor: "pointer",
                            }}
                          >
                            {columns.map((column, index) => {
                              const value = row[column.id];
                              const bgColor = (rowId % 2) ? "#202029" : "#272731";
                              
                              return (
                                <TableCell 
                                  key={column.id} 
                                  align={column.align}
                                  sx={{
                                    backgroundColor: bgColor,
                                    border: "1px solid #373b3e",
                                    justifyItems: index % 2 ? "end" : "start"
                                  }}
                                >
                                  <Stack direction="row" gap={1}>
                                    <TextSection 
                                      text={value}
                                      align={column.align || "left"}
                                      fontWeight={400}
                                      fontSize={16}
                                    />

                                    {index !== 0 && (
                                      <TextSection 
                                        text={row["amount"]}
                                        align={column.align || "left"}
                                        color="#DEDEDE80"
                                        fontWeight={400}
                                        fontSize={16}
                                      />
                                    )}
                                  </Stack>
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>

            <Stack justifyContent="center" direction="row" gap={1}>
              <Button
                variant="contained"
                disabled={page === 0}
                onClick={handlePrev}
                sx={{
                  fontSize: 16,
                  padding: "6px 12px",
                  backgroundColor: "#56567b",
                  color: "white",
                  borderRadius: "1rem",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#666692",
                    boxShadow: "none"
                  },
                  "&:disabled": {
                    backgroundColor: "#2b2b3b",
                    color: "grey"
                  }
                }}
              >
                Prev
              </Button>

              <Stack
                fontSize={16}
                margin="8px"
                color="#DEDEDE"
              >
                Page {page + 1} of {Math.ceil(rows.length / rowsPerPage)}
              </Stack>

              <Button
                variant="contained"
                disabled={page + 1 === Math.ceil(rows.length / rowsPerPage)}
                onClick={handleNext}
                sx={{
                  fontSize: 16,
                  padding: "6px 12px",
                  backgroundColor: "#56567b",
                  color: "white",
                  borderRadius: "1rem",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#666692",
                    boxShadow: "none"
                  },
                  "&:disabled": {
                    backgroundColor: "#2b2b3b",
                    color: "grey"
                  }
                }}
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </CustomContainer>
  )
};

export default MonthlyRevenuce;