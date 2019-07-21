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
import img_1 from "../../images/diet/1.jpg";
import img_2 from "../../images/diet/2.jpg";
import img_3 from "../../images/diet/3.jpg";
import consultant from "../../images/diet/consultant.jpg";
import tea from "../../images/diet/tea.svg";
import noodles from "../../images/diet/noodles.svg";
import call from "../../images/diet/call.jpg";
import chat from "../../images/diet/chat.jpg";
import "react-chat-widget/lib/styles.css";
import "./Diet.css";
import axios from "axios";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class Diet extends React.Component {
  componentDidMount() {
    addResponseMessage("Welcome to the diet consultation chat!");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message from user: ${newMessage}`);
    // Now send the message throught the backend API
    axios
      .get(`http://localhost:4000/chat-session?text=${newMessage}`)
      .then(response => addResponseMessage(response.data));
  };

  render() {
    return (
      <div className="root">
        <Header />
        {/* start of hero grid  */}
        <Grid container className="hero-grid-parent" spacing={24}>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={img_1} alt="img_1" />
              <div className="img-text">Not sure what to eat?</div>
            </Box>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={img_2} alt="img_2" />
              <div className="img-text">Try our Digital Consultant</div>
            </Box>
          </Grid>
          <Grid item className="hero-grid-item" xs={8} sm={4}>
            <Box className="img-container">
              <img className="img-media" src={img_3} alt="img_3" />
              <div className="img-text">Get customized meal plans</div>
            </Box>
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
              title="Click on the icon below to chat!"
              subtitle={<span />}
              actionIcon={
                <IconButton>
                  <Widget
                    className="chat-widget"
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="Diet Consultant"
                    subtitle="Get customized diet advice"
                    profileAvatar={chat}
                  />
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

Diet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Diet);
