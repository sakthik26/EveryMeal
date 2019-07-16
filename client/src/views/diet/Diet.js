import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  FormControl,
  Card,
  CardContent,
  CardActions,
  CardActionArea
} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img_1 from "../../images/diet/1.jpg";
import img_2 from "../../images/diet/2.jpg";
import img_3 from "../../images/diet/3.jpg";
import consultant from "../../images/diet/consultant.jpg";
import tea from "../../images/diet/tea.svg";
import noodles from "../../images/diet/noodles.svg";
import call from "../../images/diet/call.jpg";
import chat from "../../images/diet/chat.jpg";
import "./Diet.css";

const paperStyle = {};
const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class GuttersGrid extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <div className="root">
        <Header />
        {/* start of hero grid  */}
        <Grid container className="hero-grid-parent" spacing={24}>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Paper className="img-container">
              <img className="img-media" src={img_1} alt="img_1" />
              <div className="img-text">Not sure what to eat?</div>
            </Paper>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Paper className="img-container">
              <img className="img-media" src={img_2} alt="img_2" />
              <div className="img-text">Try our Digital Consultant</div>
            </Paper>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Paper className="img-container">
              <img className="img-media" src={img_3} alt="img_3" />
              <div className="img-text">Get customized meal plans</div>
            </Paper>
          </Grid>
        </Grid>
        {/* end of hero grid  */}
        <Grid container className="divider-grid" spacing={24}>
          <Grid item className="divider-grid-text" xs={8} sm={5}>
            {/* <Box height="" className="divider-grid"> */}
            <div className="divider-grid-text" mx="auto">
              <Typography component="h1" variant="h4">
                <span style={{ display: "inline-block" }}>Need help </span>{" "}
                customizing you
                <span style={{ display: "inline-block" }}>r meals?</span>
              </Typography>
            </div>
            {/* </Box> */}
          </Grid>
        </Grid>
        {/* start of GridListTile grid  */}
        <GridList cellHeight={300} className="grid-list-parent" cols={5}>
          <GridListTile className="grid-list-item" key={consultant}>
            <img
              className="grid-list-item-img"
              src={consultant}
              alt="consultant"
            />
            <GridListTileBar
              title="Digital Consultant"
              subtitle={
                <span className="grid-list-item-text">
                  Click on 'Diet Consultation' at the top of the page. Our
                  friendly chat agent should have answers to most of your
                  questions.
                </span>
              }
            />
          </GridListTile>
          <GridListTile className="grid-list-item" key={noodles}>
            <img className="grid-list-img" src={noodles} alt="noodles" />
          </GridListTile>
          <GridListTile className="grid-list-item" key={call}>
            <img className="grid-list-item-img" src={call} alt="call" />
            <GridListTileBar
              title="Customize meals for an upgrade fee"
              subtitle={
                <span className="grid-list-item-text">
                  For advice tailor-made to your needs, you may choose to talk
                  to our expert diet consultant for an upgrade fee.
                </span>
              }
            />
          </GridListTile>
          <GridListTile className="grid-list-item" key={tea}>
            <img className="grid-list-img" src={tea} alt="tea" />
          </GridListTile>
          <GridListTile className="grid-list-item" key={chat}>
            <img className="grid-list-item-img" src={chat} alt="chat" />
            <GridListTileBar
              title="Click on the icon to chat!"
              subtitle={<span />}
              actionIcon={
                <IconButton>
                  <SvgIcon className="svg-icon">
                    <path
                      d="M14.9,6.707c-0.804-2.497-3.649-4.351-7.035-4.351c-4.008,0-7.27,2.594-7.27,5.782
								c0,2.163,1.516,4.133,3.903,5.122v3.091c0,0.251,0.144,0.478,0.372,0.586c0.087,0.042,0.182,0.062,0.276,0.062
								c0.148,0,0.295-0.051,0.412-0.15l3.678-3.038c0.14-0.022,0.275-0.057,0.413-0.084c0.655,0.666,1.544,1.185,2.607,1.46
								c0.198,0.051,0.401,0.094,0.608,0.125l2.641,2.182c0.118,0.099,0.264,0.15,0.413,0.15c0.094,0,0.188-0.02,0.276-0.062
								c0.228-0.108,0.372-0.335,0.372-0.586v-2.135c1.74-0.761,2.84-2.231,2.84-3.846C19.405,8.862,17.456,7.073,14.9,6.707z
								 M8.885,12.552c-0.019,0.003-0.032,0.018-0.051,0.022c-0.101,0.022-0.2,0.056-0.281,0.123l-2.76,2.28v-2.161
								c0-0.275-0.175-0.521-0.434-0.612C3.253,11.467,1.89,9.871,1.89,8.138c0-2.474,2.68-4.487,5.975-4.487
								c2.604,0,4.801,1.265,5.617,3.014c0.187,0.401,0.302,0.823,0.33,1.268c0.005,0.069,0.028,0.134,0.028,0.205
								c0,1.819-1.481,3.438-3.706,4.129c-0.115,0.037-0.224,0.08-0.343,0.111C9.497,12.455,9.196,12.513,8.885,12.552z M15.703,13.809
								c-0.259,0.091-0.434,0.336-0.434,0.612v1.199l-1.723-1.422c-0.095-0.079-0.211-0.129-0.333-0.144
								c-0.219-0.028-0.431-0.068-0.636-0.121c-0.545-0.14-1.023-0.364-1.433-0.64c2.423-0.969,3.99-2.942,3.99-5.155
								c0-0.024-0.004-0.047-0.005-0.071c1.718,0.385,2.98,1.553,2.98,2.948C18.11,12.202,17.165,13.299,15.703,13.809z"
                    />
                  </SvgIcon>
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
        {/* end of GridListTile grid  */}
        <Footer className="footer" />
      </div>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GuttersGrid);
