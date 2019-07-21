import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormDatePicker from './FormDatePicker';
import { withRouter } from 'react-router-dom';

class DashboardMealForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            calories: 0,
            carbs: 0,
            fats: 0,
            proteins: 0,
            calcium: 0,
            iron: 0,
            selenium: 0,
            date: new Date(),
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCalories = this.handleChangeCalories.bind(this);
        this.handleChangeCarbs = this.handleChangeCarbs.bind(this);
        this.handleChangeFats = this.handleChangeFats.bind(this);
        this.handleChangeProteins = this.handleChangeProteins.bind(this);
        this.handleChangeIron = this.handleChangeIron.bind(this);
        this.handleChangeSelenium = this.handleChangeSelenium.bind(this);
        this.handleChangeCalcium = this.handleChangeCalcium.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    handleChangeCalories(event) {
        this.setState({calories: event.target.value});
    }

    handleChangeCarbs(event) {
        this.setState({carbs: event.target.value});
    }

    handleChangeFats(event) {
        this.setState({fats: event.target.value});
    }

    handleChangeProteins(event) {
        this.setState({proteins: event.target.value});
    }

    handleChangeCalcium(event) {
        this.setState({calcium: event.target.value});
    }

    handleChangeIron(event) {
        this.setState({iron: event.target.value});
    }

    handleChangeSelenium(event) {
        this.setState({selenium: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let meal = {macronutrients: {},micronutrients: {}};

        meal.title = this.state.title;
        meal.calories = this.state.calories;
        meal.macronutrients.carbs = this.state.carbs;
        meal.macronutrients.fats = this.state.fats;
        meal.macronutrients.proteins = this.state.proteins;
        meal.micronutrients.selenium = this.state.selenium;
        meal.micronutrients.calcium = this.state.calcium;
        meal.micronutrients.iron = this.state.iron;
        meal.date = this.state.date;
        meal.user_id = "test";

        this.props.onSubmit(meal);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h5>Date and calories (required)</h5>
                <FormDatePicker />
                <br />
                <TextField
                    label="Title"
                    id="TitleField"
                    type="text"
                    className="md-row"
                    required={true}
                    value={this.state.title}
                    onChange={this.handleChangeTitle}/><br />
                <TextField
                    id="CaloriesField"
                    label="Calories"
                    type="number"
                    required={true}
                    value={this.state.calories}
                    onChange={this.handleChangeCalories}
                    margin="normal"/><br />
                <h5>Macronutrients (optional)</h5>
                <TextField
                    id="CarbsField"
                    label="Carbohydrates"
                    type="number"
                    value={this.state.carbs}
                    onChange={this.handleChangeCarbs}
                    margin="normal"
                /><br />
                <TextField
                    id="FatsField"
                    label="Fats"
                    type="number"
                    value={this.state.fats}
                    onChange={this.handleChangeFats}
                    margin="normal"
                /><br />
                <TextField
                    id="ProteinsField"
                    label="Proteins"
                    type="number"
                    value={this.state.proteins}
                    onChange={this.handleChangeProteins}
                    margin="normal"
                /><br />
                <h5>Micronutrients (optional)</h5>
                <TextField
                    id="CalciumField"
                    label="Calcium"
                    type="number"
                    value={this.state.calcium}
                    onChange={this.handleChangeCalcium}
                    margin="normal"
                /><br />
                <TextField
                    id="SeleniumField"
                    label="Selenium"
                    type="number"
                    value={this.state.selenium}
                    onChange={this.handleChangeSelenium}
                    margin="normal"
                /><br />
                <TextField
                    id="IronField"
                    label="Iron"
                    type="number"
                    value={this.state.iron}
                    onChange={this.handleChangeIron}
                    margin="normal"
                /><br /><br />
                <Button id="submit" type="submit">Submit</Button>
            </form>
        );
    }
}

export default withRouter(DashboardMealForm);