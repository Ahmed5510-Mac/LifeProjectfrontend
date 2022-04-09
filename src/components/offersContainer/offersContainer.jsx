import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function OffersContainer({
  offerTime,
  containerColor,
  textColor,
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        bgcolor: `${containerColor}`,
        color: `${textColor}`,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
      >
        <Grid item >
          <div
            style={{  
              textAlign: "left",
              fontWeight: "bold",
              color: textColor,
            }}
          >
            Flash Sales
          </div>
        </Grid>
        <Grid item>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "25px",
              color: textColor,
            }}
          >
            {offerTime}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
