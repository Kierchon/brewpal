import React from 'react'
import PropTypes from 'prop-types';
import TextInput from "../../shared/components/TextInput";
import { filterNonNumber, getGrainOptions } from "../../shared/utils";
import Select from "../../shared/components/Select";
import { Button } from "react-bootstrap";

export default class RecipeGrains extends React.Component {

    updateGrainStore = (updatedGrain, index) => {
        this.props.handleGrainChange(updatedGrain, index)
    };

    handleGrainTypeChange = (event, index) => {
        const updatedGrain = this.props.grains[index];
        updatedGrain.grainType = event.target.value;

        this.updateGrainStore(updatedGrain, index);
    };

    handleGrainAmountChange = (event, index) => {
        const updatedGrain = this.props.grains[index];
        updatedGrain.amount = filterNonNumber(event.target.value);
        this.updateGrainStore(updatedGrain, index);
    };

    buildGrainComponent = (grain, index) => {
        return (
            <div key={index} className="row">
                <Select
                    index={index}
                    label="Grain"
                    name="grainType"
                    value={grain.grainType}
                    options={this.buildGrainOptions()}
                    onChange={(event) => this.handleGrainTypeChange(event, index)}
                />
                <TextInput
                    label="Amount (lbs)"
                    name="grainAmount"
                    value={grain.amount}
                    onChange={(event) => this.handleGrainAmountChange(event, index)}
                />
                <Button
                    type="button"
                    disabled={this.props.disableDelete}
                    onClick={() => this.props.handleDeleteGrain(grain)}
                >
                    DeleteGrain
                </Button>
            </div>
        )
    };

    buildGrainOptions = () => {
        //TODO: filter out already selected grains
        return getGrainOptions();
    };

    render() {
        const grains = this.props.grains;
        return (
            <div>
                {grains.map((grain, i) => (
                    this.buildGrainComponent(grain, i)
                ))}
                <Button type="button" onClick={this.props.handleAddGrain}>Add Grain</Button>
            </div>
        )
    }
}

RecipeGrains.proptypes = {
    grains: PropTypes.array.required,
    handleDeleteGrain: PropTypes.func.required,
    handleGrainChange: PropTypes.func.required,
    handleAddGrain: PropTypes.func.required,
    disableDelete: PropTypes.bool.required
};