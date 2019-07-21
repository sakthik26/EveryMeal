import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Widget, addResponseMessage } from "react-chat-widget";
import hero_1 from "../../images/home/hero_1_min.jpg";
import hero_2 from "../../images/home/hero_2_min.jpg";
import hero_3 from "../../images/home/hero_3_min.jpg";
import hero_5 from "../../images/home/hero_5_min.jpg";
import hero_7 from "../../images/home/hero_7_min.jpg";
import tea from "../../images/diet/tea.svg";
import noodles from "../../images/diet/noodles.svg";
import chat from "../../images/diet/chat.jpg";
import "./LandingPage.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class LandingPage extends React.Component {
  render() {
    return (
      <div className="root">
        <Header />
        {/* start of hero grid  */}
        <Grid container className="hero-grid-parent" spacing={24}>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={hero_1} alt="img_1" />
            </Box>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={hero_2} alt="img_2" />
            </Box>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={hero_3} alt="img_3" />
            </Box>
          </Grid>
        </Grid>
        {/* end of hero grid  */}
        <Grid container className="divider-grid" spacing={24}>
          <Grid item className="divider-grid-text" xs={8} sm={5}>
            {/* <Box height="" className="divider-grid"> */}
            <div className="divider-grid-text" mx="auto">
              <div />
              <Typography component="h1" variant="h4">
                <span style={{ display: "inline-block" }}>How d</span>oes
                EveryMeal w<span style={{ display: "inline-block" }}>ork?</span>
              </Typography>
            </div>
            {/* </Box> */}
          </Grid>
        </Grid>
        {/* start of GridListTile grid  */}
        <GridList cellHeight={300} className="grid-list-parent" cols={5}>
          <GridListTile className="grid-list-item" key={hero_5}>
            <img className="grid-list-item-img" src={hero_5} alt="hero_5" />
            <GridListTileBar
              title="Eat freshly prepared meals"
              subtitle={
                <span className="grid-list-item-text">
                  Choose from our long list of meals or customize your meal
                  yourself.
                </span>
              }
            />
          </GridListTile>
          <GridListTile className="grid-list-item" key={noodles}>
            <img className="grid-list-img" src={noodles} alt="noodles" />
          </GridListTile>
          <GridListTile className="grid-list-item" key={hero_7}>
            <img className="grid-list-item-img" src={hero_7} alt="hero_7" />
            <GridListTileBar
              title="Schedule your meals"
              subtitle={
                <span className="grid-list-item-text">
                  Decide when you want your meals delivered and on which days of
                  the week.
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
              title="Diet Consultation"
              subtitle={
                <span className="grid-list-item-text">
                  Need professional help customizing your meal plans? Our
                  digital diet consultant is here to help.
                </span>
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

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
