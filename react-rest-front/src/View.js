import React from 'react';
const RadarChart = require('react-chartjs').Radar;
const axios = require('axios');


class View extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        fillColor: "rgba(179,181,198,0.2)",
                        strokeColor: "rgba(179,181,198,1)",
                        pointColor: "rgba(179,181,198,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(179,181,198,1)",
                        data: []
                    }
                ],
            },
            value: '',

        }

        this.handleClickSelector = this.handleClickSelector.bind(this)

    };
    
    handleClickSelector(i) {
        axios.get('http://localhost:3005/strains/' + this.props.params.strains)
        .then(res=>{
            let name = "medical"
            this.setState({
                    data: {
                        labels: res.data.medical,

                        datasets: [
                            {
                                label: res.data.name,
                                fillColor: "rgba(179,181,198,0.2)",
                                strokeColor: "rgba(179,181,198,1)",
                                pointColor: "rgba(179,181,198,1)",
                                pointStrokeColor: "red",
                                pointHighlightFill: "blue",
                                pointHighlightStroke: "rgba(179,181,198,1)",
                                data: res.data.medical_data
                            }
                        ],

                    },
                    options: {
                        responsive: true,
                        pointLabelFontSize: 14
                    },
                    description: res.data.description,
                    image: res.data.imagePath
                })
            console.log(res.data)
        })
    }


    componentWillMount() {
        axios.get('http://localhost:3005/strains/' + this.props.params.strains)
            .then(res => {
                // console.log(res)
                this.setState({
                    data: {
                        labels: res.data.effects,

                        datasets: [
                            {
                                label: res.data.name,
                                fillColor: "rgba(179,181,198,0.2)",
                                strokeColor: "rgba(179,181,198,1)",
                                pointColor: "rgba(179,181,198,1)",
                                pointStrokeColor: "red",
                                pointHighlightFill: "blue",
                                pointHighlightStroke: "rgba(179,181,198,1)",
                                data: res.data.effects_data
                            }
                        ],

                    },
                    options: {
                        responsive: true,
                        pointLabelFontSize: 14
                    },
                    description: res.data.description,
                    image: res.data.imagePath
                })
            })
    }


    render() {
        console.log(this.state.data.datasets)
        return (
            <div className="container">
                <h1>{this.state.data.datasets[0].label.replace(/_/g, " ")}</h1>
                <div className="selector" onClick={this.handleClickSelector}>
                    <h2>Effect</h2>
                </div>
                <div className="selector">
                    <h2>Medical</h2>
                </div>
                <div className="selector">
                    <h2>Negatives</h2>
                </div>
                <div className="box">

                    <img src={this.state.image} />
                    <div id="RadarChart">
                        <RadarChart data={this.state.data} options={this.state.options} redraw />
                    </div>
                    <div className="box">
                        <h3>Description</h3>
                        <p>{this.state.description} </p>

                    </div>
                </div>
            </div>


        )
    }
}
export default View;